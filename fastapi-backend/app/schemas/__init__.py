from typing import Optional
from pydantic import BaseModel, SecretStr


class IDResponse(BaseModel):
    id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: Optional[str]
    is_active: Optional[bool]
    username: str
    mobile: Optional[str]
    address: Optional[str]
    detail_address: Optional[str]
    zipcode: Optional[str]
    privacy_ok: Optional[bool]


class UserCreate(UserBase):
    password: SecretStr


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class LoginUser(BaseModel):
    email: Optional[str]
    password: Optional[SecretStr]
    # is_social_login: Optional[bool]
