from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

client = OpenAI(
    api_key = os.getenv("OPENAI_API_KEY")
)

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/chat/")
async def chat_with_gpt(request: PromptRequest):
    try:
        response = client.chat.completions.create(
            model= "gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {
                    "role": "user",
                    "content": request.prompt
                }
            ]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
