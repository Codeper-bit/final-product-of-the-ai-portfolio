import React from "react";
import ai_portfolio from "../assets/ai_portfolio.JPG";
import ai_resume_analyser from "../assets/ai_resume_analyser.JPG";

function Projects() {
    const projectsList = [
        {
            id: 1,
            title: "AI Resume Analyzer",
            image: ai_resume_analyser,
            description:
                "An intelligent web app that parses resumes, extracts key skills and experience, and scores them against target job descriptions using NLP.",
            technologies: [
                "Python",
                "FastAPI",
                "React",
                "Tailwind CSS",
                "OpenAI API",
            ],
            github:
                "https://github.com/Codeper-bit/final-product-of-the-ai-resume-analyser",
            demo: "https://final-product-of-the-ai-resume-analyser-qj1u02vbx.vercel.app/",
        },

        {
            id: 2,
            title: "AI Portfolio Assistant",
            image: ai_portfolio,
            description:
                "A conversational RAG chatbot embedded into portfolio websites to answer recruiter questions dynamically about experience, skills, and projects.",
            technologies: [
                "Python",
                "FastAPI",
                "React",
                "TailwindCSS",
            ],
            github:
                "https://github.com/Codeper-bit/final-product-of-the-ai-portfolio",
            demo: "https://final-product-of-the-ai-portfolio.vercel.app/projects",
        },

        {
            id: 3,
            title: "Student Result System",
            description:
                "A full-stack web application for managing, calculating, and generating detailed academic performance reports and visual statistics for students.",
            technologies: [
                "Node.js",
                "Express",
                "PostgreSQL",
                "React",
                "Tailwind CSS",
            ],
            github:
                "https://github.com/codeper-bit/student-result-system",
            demo: "https://student-result.demo.com",
        },

    ];

    return (
        <section
            id="projects"
            className="w-full bg-slate-950 py-20 px-6 border-t border-slate-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-3">
                    <span className="text-indigo-400 font-medium text-sm tracking-widest uppercase">
                        Portfolio Showcase
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Featured Projects
                    </h2>

                    <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                        Here are some of the software and AI applications I've engineered recently.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {projectsList.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 flex flex-col group"
                        >

                            {/* Project Image */}
                            <div className="relative overflow-hidden h-52 bg-slate-800">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">

                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 text-indigo-300 text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* External Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                                    >
                                        GitHub Code
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition ml-auto"
                                    >
                                        Live Demo →
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;
