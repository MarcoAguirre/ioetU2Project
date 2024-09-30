from fastapi import APIRouter, HTTPException
from app.models.request_models import PromptRequest
from app.services.openai_service import get_openai_response

router = APIRouter()

@router.post("/chat/")
async def chat_with_gpt(request: PromptRequest):
    try:
        response_content = await get_openai_response(request.prompt)
        return {"response": response_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
