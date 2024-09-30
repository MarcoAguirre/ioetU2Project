from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_chat_with_gpt():
    prompt = {"prompt": "Tell me a joke."}

    response = client.post("/chat/", json=prompt)

    assert response.status_code == 200
    assert "response" in response.json()

def test_chat_with_empty_prompt():
    prompt = {"prompt": ""}

    response = client.post("/chat/", json=prompt)

    assert response.status_code == 422
