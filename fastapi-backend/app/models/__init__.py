from sqlalchemy import Boolean, Column, Integer, String
from database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, index=True)
    password = Column(String(255))
    is_active = Column(Boolean, default=True)
    username = Column(String(8))
    mobile = Column(String(12))
    address = Column(String(255))
    detail_address = Column(String(255))
    privacy_ok = Column(Boolean, default=False)


