from typing import List, Optional
from hashlib import sha256
from datetime import timedelta, datetime

from jose import jwt, ExpiredSignatureError
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose.exceptions import JWTClaimsError, JWTError
from sqlalchemy.orm import Session
from devtools import debug

from app import schemas as schema
from app import models
from app.config import settings
from app.database import get_conn
from app.common.constant import HS256

router = APIRouter()

security = HTTPBearer()


def _hash(value: str) -> str:
    return sha256(value.encode()).hexdigest()


async def generate_jwt_token(user: schema.User, exp: Optional[timedelta] = None) -> str:
    """generator token"""
    expire = datetime.now() + (exp or timedelta(minutes=30))
    original_data = dict(
        id=int(user.id),
        username=user.username,
        exp=expire,
    )
    return jwt.encode(
        original_data, settings.JWT_SECRET_KEY.get_secret_value(), algorithm=HS256
    )


async def check_jwt_token(
    cred: HTTPAuthorizationCredentials = Depends(security),
    conn: Session = Depends(get_conn),
) -> models.User:
    token = cred.credentials
    # debug(token)
    try:
        decoded_data = jwt.decode(
            token, settings.JWT_SECRET_KEY.get_secret_value(), HS256
        )
    except ExpiredSignatureError:
        raise HTTPException(401, "Expired over!")  # 시간 만료 토큰
    except JWTClaimsError as error:
        raise HTTPException(400, str(error))
    except JWTError:
        raise HTTPException(401, "Invalid signature")  # 잘못된 토큰값 입력

    db_user = conn.query(models.User).filter_by(id=decoded_data.get("id")).first()
    if db_user:
        return db_user

    raise HTTPException(401, f'Not Allow User => {decoded_data.get("username", "")}')


@router.post(
    "/register", response_model=schema.User, status_code=status.HTTP_201_CREATED
)
async def user_join(join_user: schema.UserCreate, conn: Session = Depends(get_conn)):
    exist_user = conn.query(models.User).filter_by(email=join_user.email).first()
    if exist_user:
        raise HTTPException(status_code=406, detail="Duplicated Email!")

    new_user = models.User(**join_user.dict())
    new_user.password = _hash(join_user.password.get_secret_value())
    conn.add(new_user)
    conn.commit()
    return new_user


@router.post("/login")
async def login(login: schema.LoginUser, conn: Session = Depends(get_conn)) -> str:
    pwd_hash = _hash(login.password.get_secret_value())
    user = (
        conn.query(models.User).filter_by(email=login.email, password=pwd_hash).first()
    )
    if user:
        token = await generate_jwt_token(user)
        return {"token": token}

    raise HTTPException(401, "Failed Unauthorized!")


@router.get("/validation/jwt", response_model=schema.IDResponse)
async def validation_token(user: dict = Depends(check_jwt_token)):
    return user


@router.get(
    "/users", response_model=List[schema.User], dependencies=[Depends(validation_token)]
)
async def get_users(conn: Session = Depends(get_conn)):
    return conn.query(models.User).all()
