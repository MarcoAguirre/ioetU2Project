from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

from dotenv import load_dotenv
import os

from topics_to_files import topic_to_file

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

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/chat/")
async def chat_with_gpt(request: PromptRequest):
    query = f"""
        Identify key topics in the following feedback comment: '{request.prompt}'
        and recommend me some files to read and improve on those key topics.
        Right now the available files are: '{topic_to_file}'.
        Please return the response in markdown format.
        """
    try:
        response = client.chat.completions.create(
            model= "gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": query
                }
            ]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
