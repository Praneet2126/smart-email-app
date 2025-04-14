import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()
client = Groq(api_key=os.getenv("OOAD_AI_API_KEY"))

def generate_reply(text: str):
    response = client.chat.completions.create(
        model="deepseek-r1-distill-llama-70b",
        messages=[{"role": "system", "content": "Generate a professional and relevant reply to this email."},
                  {"role": "user", "content": text}]
    )
    return response.choices[0].message.content
