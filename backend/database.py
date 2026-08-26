import asyncio
import asyncpg
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

MY_INFO = [
    (
        "skills",
        "Tech Stack",
        "Proficiency in Python, FastAPI, PostgreSQL, React, JavaScript, Tailwind CSS, HTML/CSS, Git, REST APIs, AI integration"
    ),
    (
        "projects",
        "AI Portfolio Assistant",
        "Created a full-stack portfolio bot powered by FastAPI, PostgreSQL, and Groq Llama 3.3. It answers questions about my skills, projects, blogs, and contact information."
    ),
    (
        "bio",
        "Background",
        "I am CODEPER-BIT, a full-stack developer passionate about building AI-powered applications, scalable backend systems, and modern web experiences. I have 3 years plus in tech."
    )
]


async def init_db():
    """Initializes the database table and populates initial data safely."""
    if not DATABASE_URL:
        print("⚠️ DATABASE_URL environment variable is missing.")
        return

    conn = await asyncpg.connect(DATABASE_URL)
    try:
        # 1. Create the portfolio table if it does not exist
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS portfolio (
                id SERIAL PRIMARY KEY,
                category VARCHAR(50),
                title VARCHAR(100),
                details TEXT
            );
        """)

        # 2. Check if the table is empty before inserting initial records
        count = await conn.fetchval("SELECT COUNT(*) FROM portfolio;")
        if count == 0:
            for category, title, details in MY_INFO:
                await conn.execute(
                    "INSERT INTO portfolio (category, title, details) VALUES ($1, $2, $3)",
                    category, title, details
                )
            print("✅ PostgreSQL table created and populated successfully.")
        else:
            print(
                "ℹ️ Portfolio table already contains records. Skipping initial insertion.")

    except Exception as e:
        print(f"❌ Database Initialization Error: {e}")
    finally:
        await conn.close()

if __name__ == "__main__":
    asyncio.run(init_db())
