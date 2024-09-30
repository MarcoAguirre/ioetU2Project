from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_invalid_prompt():
    response = client.post("/chat/", json={"prompt": ""})
    assert response.status_code == 422

def test_gpt_api_failure(monkeypatch):
    def mock_openai_failure(*args, **kwargs):
        raise Exception("Failed to connect to OpenAI")

    monkeypatch.setattr("app.services.openai_service.client.chat.completions.create", mock_openai_failure)

    response = client.post("/chat/", json={"prompt": "Test feedback"})

    assert response.status_code == 500

    json_response = response.json()
    assert "message" in json_response, f"Expected 'message' in {json_response}"
    assert json_response["message"] == "500: Failed to connect to OpenAI"
