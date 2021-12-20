from fastapi import APIRouter

router = APIRouter()


@router.post('/register')
async def member_join():
    return {
        'msg': 'OK'
    }


@router.post('/login')
async def login():
    return {
        'msg': 'OK'
    }
