from pydantic import BaseModel, SecretStr


class UserBase(BaseModel):
    email: str
    is_active: bool
    username: str
    mobile: str
    address: str
    detail_address: str
    zipcode: str
    privacy_ok: bool


class UserCreate(UserBase):
    password: SecretStr


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
