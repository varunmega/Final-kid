def apply_safety_filters(text: str, age: int) -> str:
    if age < 10:
        if any(word in text.lower() for word in ["death", "violence", "blood"]):
            return "Sorry, I can’t talk about that."
    return text