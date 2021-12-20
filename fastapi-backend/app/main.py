import uvicorn
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app import routes
from app import models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5000",
        "http://localhost:3000",
        "http://localhost:5000",
    ],
    allow_credentials=True,
    allow_methods=["OPTION", "GET", "POST", "DELETE"],
    allow_headers={"*"},
)


@app.on_event("startup")
def startup():
    pass
    from app.database import engine
    app.mount("/static", StaticFiles(directory="app/static"), name="static")
    models.Base.metadata.create_all(bind=engine)


@app.get("/", status_code=status.HTTP_200_OK)
def health_check():
    return {
        "msg": "ok"
    }


app.include_router(routes.router)

if __name__ == '__main__':
    uvicorn.run('app.main:app', reload=True)
