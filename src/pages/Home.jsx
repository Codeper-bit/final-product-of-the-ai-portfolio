import React from "react";

import { Link } from "react-router-dom";
import ai_portfolio from "../assets/ai_portfolio.JPG";
import ai_resume_analyser from "../assets/ai_resume_analyser.JPG";
function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
            {/* ---------------- 1. HERO SECTION ---------------- */}
            <section className="relative flex flex-col justify-center items-center text-center w-full min-h-[85vh] px-6 py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        Available for new opportunities
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Hi, I'm<span className="px-4 text-yellow-600 font-extrabold">Codeper-bit</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                        Software & AI Engineer
                    </h2>

                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        With 3 years of experience building intelligent software applications,
                        I specialize in combining robust backend architectures with modern machine learning solutions.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition duration-200 shadow-lg shadow-indigo-500/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition duration-200"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* ---------------- 2. CHAT WITH AI SECTION ---------------- */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                            Interactive AI Assistant
                        </h3>
                        <p className="text-slate-300 max-w-xl text-sm sm:text-base">
                            Have questions about my experience, skills, or projects? Chat directly with my custom AI assistant!
                        </p>
                    </div>
                    <Link to="/xion" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-xl shadow-md transition duration-200 whitespace-nowrap">
                        Ask AI Assistant
                    </Link>
                </div>
            </section>

            {/* ---------------- 3. FEATURED PROJECTS ---------------- */}
            <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                        <p className="text-slate-400 text-sm mt-1">A showcase of some recent work</p>
                    </div>
                    <Link to="/projects" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col">
                        <div className="h-48 bg-slate-800 overflow-hidden">
                            <img
                                src={ai_resume_analyser}
                                alt="AI Resume Analyzer Preview"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">AI Resume Analyzer</h3>
                            <p className="text-slate-400 text-sm mb-4 flex-grow">
                                Extracts key insights and matches resumes against job descriptions using NLP.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Python</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">FastAPI</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">React</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col">
                        <div className="h-48 bg-slate-800 overflow-hidden">
                            <img
                                src={ai_portfolio}
                                alt="AI Portfolio Assistant Preview"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">AI Portfolio Assistant</h3>
                            <p className="text-slate-400 text-sm mb-4 flex-grow">
                                A custom-trained RAG chatbot integrated into portfolio sites to handle recruiter FAQs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">React</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">OpenAI</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Tailwind</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">PostgreSQL</span>


                            </div>
                        </div>
                    </div>


                     {/* Project 3 */}
                     <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col">
                        <div className="h-48 bg-slate-800 overflow-hidden">
                            <img
                                src={food-mart}
                                alt="FoodMart Agentic"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">Food Mart Agentic</h3>
                            <p className="text-slate-400 text-sm mb-4 flex-grow">
                                FoodMart is a full-stack e-commerce web platform designed to stramline food ordering. featuring dynamic product filtering, adn a fast email checkout system, FoodMart also includes a built-in AI customer Suppot Assistant powered by Groq to answer store inquires 24/7.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">Python</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">FastAPI</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">React</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* ---------------- 4. SKILLS PREVIEW ---------------- */}
            <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/80">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack & Expertise</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {["Python", "React", "FastAPI", "Github", "Git", "LLM", "PostgreSQL"].map((skill) => (
                        <div
                            key={skill}
                            className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-200 font-medium hover:border-indigo-500/50 hover:text-white transition duration-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- 5. LATEST BLOG POSTS PREVIEW ---------------- */}
            <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/80">
                <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs text-indigo-400 font-semibold">AI & Machine Learning</span>
                        <h3 className="text-lg font-bold text-white mt-1">Building Practical RAG Pipelines with Python</h3>
                        <p className="text-slate-400 text-sm mt-2">Learn how to store vector embeddings and query them effectively using FastAPI.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-xs text-indigo-400 font-semibold">Frontend</span>
                        <h3 className="text-lg font-bold text-white mt-1">Structuring Modern React & Tailwind Projects</h3>
                        <p className="text-slate-400 text-sm mt-2">Best practices for clean UI design and scalable component organization.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- 6. CONTACT CTA ---------------- */}
            <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-slate-400 max-w-lg mx-auto mb-8">
                    Whether you have a project in mind, want to integrate AI solutions, or just want to connect—my inbox is open.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition duration-200"
                >
                    Send a Message
                </a>
            </section>
        </div>
    );
}

export default Home;
