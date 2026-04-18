from fastapi import APIRouter
from services.ai_service import process_query

router = APIRouter()

@router.post("/process_query")
async def ai_query(data:dict):
    response =process_query(data['query'],data['user_id'])
    return {'response':response}