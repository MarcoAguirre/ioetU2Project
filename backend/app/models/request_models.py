from pydantic import BaseModel, Field

class PromptRequest(BaseModel):
    prompt: str = Field(..., min_length=1, description="Prompt cannot be empty")
