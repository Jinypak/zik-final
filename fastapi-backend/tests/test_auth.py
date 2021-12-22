import string
import random

from fastapi.testclient import TestClient

from app.main import app

# from app.routes.auth import generate_jwt_token

client = TestClient(app)


def test_get_users():
    response = client.get("/auth/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list) is True


def test_success_login():
    """로그인 정상 성공"""
    response = client.post("/auth/login", json={"email": "a@a.com", "password": 12345})
    assert response.status_code == 200
    token = response.json().get("token")
    assert len(token) > 10
    assert isinstance(token, str) is True


def test_failed_login():
    """로그인 실패
    1) 칮을 수 없는 이메일(가입 안된 회원)
    2) 패스워드 불일치 요청
    """

    response1 = client.post(
        "/auth/login", json={"email": "nobody@email.com", "password": 1111}
    )
    assert response1.status_code == 401

    response2 = client.post("/auth/login", json={"email": "a@a.com", "password": 11111})
    assert response2.status_code == 401


def test_join_user():
    """신규 회원 가입 (이메일 중복 X)"""
    letters = string.ascii_lowercase
    random_email = "".join(random.choice(letters) for _ in range(8)) + "@email.com"
    param = dict(
        email=random_email,
        password=12345,
        username="jojo",
        is_active=True,
        mobile="01012341122",
    )
    response = client.post("/auth/register", json=param)
    assert response.status_code == 201
    data = response.json()
    assert data.get("id") is not None


def test_error_join_user():
    """중복된 이메일 회원 가입 실패"""
    param = dict(email="a@a.com", password=12345, username="NONE")
    response = client.post("/auth/register", json=param)
    assert response.status_code == 406
    assert response.json() == {"detail": "Duplicated Email!"}


def test_validation_jwt_token():
    """validation jwt token"""
    # fake_token
    response = client.post("/auth/login", json={"email": "a@a.com", "password": 12345})
    assert "token" in response.json()
    token = response.json().get("token")
    response = client.get(
        "/auth/validation/jwt", headers={"Authorization": "Bearer " + token}
    )
    assert response.status_code == 200
    assert "id" in response.json()
