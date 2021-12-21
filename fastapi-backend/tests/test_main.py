# from fastapi import FastAPI
from fastapi.testclient import TestClient
from devtools import debug

from app.main import app

client = TestClient(app)


def test_healthcheck():
    response = client.get("/")
    debug(response.status_code)
    assert response.status_code == 200
    assert response.json() == {"healthcheck": "ok"}
