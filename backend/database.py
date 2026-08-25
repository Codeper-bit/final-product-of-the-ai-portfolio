import asyncio
import asyncpg
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")


async def main():
    conn = await asyncpg.connect(DATABASE_URL)
    await conn.execute("""
                        CREATE TABLE IF NOT EXISTS portfolio (
                        id SERIAL PRIMARY KEY,
                        category VARCHAR(50),
                        title VARCHAR(100),
                        details TEXT
                );
                """
                       )
    my_info = [
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
            "I am CODEPER-BIT, a full-stack developer passionate about building AI-powered applications, scalable backend systems, and modern web experiences. I have 5 years plus in tech."
        )
    ]

    for category, title, details in my_info:
        await conn.execute(
            "INSERT INTO portfolio (category, title, details) VALUES ($1, $2, $3)",
            category, title, details)
    await conn.close()
    print("PostgreSQL table created and populated successfully")

if __name__ == "__main__":
    asyncio.run(main())
