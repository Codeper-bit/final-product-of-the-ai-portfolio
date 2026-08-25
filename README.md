AI-Powered Developer Portfolio
A modern, responsive developer portfolio built with React and Tailwind CSS, featuring an integrated custom AI Assistant designed to answer questions about my experience, skills, and background in real time.

Features
Interactive AI Assistant: Powered by a custom backend pipeline to act as a personal representative, answering recruiter and visitor FAQs about my background.

Featured Projects Showcase: Highlighted project cards with visual previews, tech stack tags, and quick links.

Modern UI/UX: Styled with Tailwind CSS, supporting responsive layouts and dark mode aesthetics.

Tech Stack & Expertise: Clean display of core technical skills and tools.

🛠️ Tech Stack
Frontend
Framework: React (Vite)

Styling: Tailwind CSS

Icons & Assets: Custom asset management

Backend & AI
Framework: FastAPI / Python

AI Architecture: Custom RAG (Retrieval-Augmented Generation) pipeline / LangChain

🚀 Getting Started
Prerequisites
Node.js (v18 or higher)

Python (v3.9 or higher)

1. Clone the Repository
Bash
git clone https://github.com/your-username/ai-portfolio.git
cd ai-portfolio

2. Frontend Setup
Bash
# Install dependencies
npm install

# Start the development server
npm run dev

3. Backend Setup
Bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload

📁 Project Structure
Plaintext
ai-portfolio/
├── backend/
│   ├── main.py
│   └── requirements.txt
├── src/
│   ├── assets/           # Project preview images and icons
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/            # Page views (Home, About, Projects, etc.)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md

