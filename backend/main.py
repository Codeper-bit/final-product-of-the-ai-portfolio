from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncpg
import os
from groq import AsyncGroq
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use AsyncGroq client
client = AsyncGroq(api_key=os.getenv("GROQ_API_KEY"))
# Ensure database name is 'portfolio' (matching your pgAdmin setup)
DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql://postgres:codeper_bit@localhost:5432/portfolio"
)


class PortfolioQuery(BaseModel):
    user_message: str


async def search_postgres_db(user_query: str) -> str:
    """Queries PostgreSQL safely for context matching user search terms."""
    conn = None
    try:
        conn = await asyncpg.connect(DATABASE_URL)
        words = [w.strip() for w in user_query.split() if len(w) > 2]

        if not words:
            rows = await conn.fetch("SELECT category, title, details FROM portfolio LIMIT 5;")
        else:
            conditions_list = []
            params = []
            for i, word in enumerate(words):
                idx = i + 1
                conditions_list.append(
                    f"(title ILIKE ${idx} OR details ILIKE ${idx} OR category ILIKE ${idx})")
                params.append(f"%{word}%")

            conditions = " OR ".join(conditions_list)
            query = f"SELECT category, title, details FROM portfolio WHERE {conditions};"
            rows = await conn.fetch(query, *params)

        if not rows:
            return "No specific database matching records found."

        formatted_context = ""
        for r in rows:
            formatted_context += f"- [{r['category'].upper()}] {r['title']}: {r['details']}\n"

        return formatted_context
    except Exception as db_err:
        print("Database Error:", db_err)
        return "Database query failed or is unreachable."
    finally:
        if conn:
            await conn.close()


# main.py
@app.post("/ask_xion")
async def ask_portfolio_ai(ask: PortfolioQuery):
    try:
        retrieved_info = await search_postgres_db(ask.user_message)

        # Fallback: if search returns no records, retrieve everything from database
        if "No specific database" in retrieved_info or "failed" in retrieved_info:
            conn = await asyncpg.connect(DATABASE_URL)
            all_rows = await conn.fetch("SELECT category, title, details FROM portfolio;")
            await conn.close()
            retrieved_info = "\n".join(
                [f"- [{r['category'].upper()}] {r['title']}: {r['details']}" for r in all_rows])

        response = await client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[
                {
                    "role": "system",
                    "content": f"""
You are Xion, the official AI portfolio assistant for CODEPER-BIT.
Answer the visitor's question ONLY and STRICTLY using the information provided below.
DO NOT invent or assume any technical skills, languages, or tools that are not listed here.
If information is not listed in the retrieved data, state clearly that CODEPER-BIT has not provided details on that topic.
Be conservative with visitor's, make them know that i am competent enough for the job. 
DO NOT write back or copy back as i gave you the info, refine it and make it look more professional.


--- RETRIEVED POSTGRESQL DATA ---
{retrieved_info}
----------------------------------
"""
                },
                {
                    "role": "user",
                    "content": ask.user_message
                }
            ],
            temperature=0.2  # Lower temperature prevents creative hallucinations
        )

        return {"reply": response.choices[0].message.content}

    except Exception as e:
        print("Backend Error:", e)
        return {"error": str(e)}
