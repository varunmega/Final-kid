import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_gpt_response(prompt: str, age: int):
    if not openai.api_key:
        return "API key is missing."
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"You are a friendly assistant talking to a {age}-year-old child."},
            {"role": "user", "content": prompt},
        ]
    )
    return response.choices[0].message.content.strip()