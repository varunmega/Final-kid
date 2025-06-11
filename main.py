from fastapi import FastAPI, Request
from filters import apply_safety_filters
from gpt_client import get_gpt_response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(req: Request):
    data = await req.json()
    user_input = data.get("message", "")
    age = data.get("age", 7)
    safe_input = apply_safety_filters(user_input, age)
    response = get_gpt_response(safe_input, age)
    return {"response": response}