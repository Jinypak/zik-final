from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from devtools import debug

from app import schemas as schema
from app import models
from app.database import get_conn

router = APIRouter()


@router.post('/register', response_model=schema.User)
async def user_join(join_user: schema.UserCreate, conn: Session = Depends(get_conn)):
    new_user = models.User(**join_user.dict())
    new_user.password = join_user.password.get_secret_value()
    # @TODOL password 암호화
    conn.add(new_user)
    conn.commit()
    return new_user


@router.get('/users', response_model=List[schema.User])
async def get_users(conn: Session = Depends(get_conn)):
    return conn.query(models.User).all()


@router.post('/login')
async def login():
    return {
        'msg': 'OK'
    }
