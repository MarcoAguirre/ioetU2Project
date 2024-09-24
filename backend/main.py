from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    api_key = os.getenv("OPENAI_API_KEY")
)

class PromptRequest(BaseModel):
    prompt: str

def get_context_from_file():
    try:
        with open("Branching strategies.md", "r") as file:
            context = file.read()
        return context
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading file: {str(e)}")

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/chat/")
async def chat_with_gpt(request: PromptRequest):
    try:
        context = get_context_from_file()
        response = client.chat.completions.create(
            model= "gpt-4o-mini",
            messages=[
                {"role": "system", "content": context},
                {
                    "role": "user",
                    "content": request.prompt
                }
            ]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
