from fastapi import HTTPException

from openai import OpenAI
from core.config import settings
from topics_to_files import topic_to_file

client = OpenAI(api_key=settings.OPENAI_API_KEY)

async def get_openai_response(prompt: str) -> str:
    query = f"""
        Identify key topics in the following feedback comment: '{prompt}'
        and recommend me some files to read and improve on those key topics.
        Right now the available files are: '{topic_to_file}'.
        Please return the response in markdown format.
    """
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": query
                }
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to connect to OpenAI")
