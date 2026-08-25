import React from "react";

function About() {
    const timeline = [
        {
            type: "Experience",
            role: "Software & AI Engineer",
            company: "Tech Solutions",
            period: "2023 - Present",
            description:
                "Developing scalable backend APIs with FastAPI & Node.js, and integrating custom AI models and RAG pipelines for web applications.",
        },
        {
            type: "Education",
            role: "B.Tech. in Software Engineering",
            company: "University",
            period: "2026 - 2030",
            description:
                "Focused on Software Engineering, Data Structures, Algorithms, Machine Learning, and Artificial Intelligence.",
        },
    ];

    return (
        <section id="about" className="w-full bg-slate-950 py-20 px-6 border-t border-slate-800">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-3">
                    <span className="text-indigo-400 font-medium text-sm tracking-widest uppercase">
                        Get To Know Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        About Me
                    </h2>
                </div>

                {/* Story & Bio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Bio Text */}
                    <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
                        <h3 className="text-2xl font-bold text-white">
                            Hi, I'm <span className="text-indigo-400">Codeper-bit</span> 👋
                        </h3>
                        <p>
                            I am a passionate <span className="text-indigo-400 font-extrabold">Software & AI Engineer</span> with 3 years of hands-on experience building smart, performant, and user-friendly web applications.
                        </p>
                        <p>
                            My passion lies at the intersection of web development and Artificial Intelligence. I love taking complex problems and solving them with clean code, whether that’s designing robust backend systems or training specialized LLM agents.
                        </p>
                        <p>
                            My goal is to continue building cutting-edge software solutions that make technology more intuitive and accessible to everyone.
                        </p>

                        {/* Resume Download CTA */}
                        <div className="pt-4">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20"
                            >
                                <span>📄</span> Download CV
                            </a>
                        </div>
                    </div>

                    {/* Highlights Card */}
                    <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                        <h4 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                            Quick Highlights
                        </h4>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                                <span className="text-slate-400">Experience:</span>
                                <span className="text-slate-100 font-semibold">3+ Years</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                                <span className="text-slate-400">Main Focus:</span>
                                <span className="text-indigo-400 font-semibold">Fullstack & AI Engineering</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                                <span className="text-slate-400">Key Tech:</span>
                                <span className="text-slate-100 font-semibold">Python, React, FastAPI</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-slate-400">Availability:</span>
                                <span className="text-emerald-400 font-semibold">Open to Work / Freelance</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Experience & Education Timeline */}
                <div className="space-y-8 pt-6">
                    <h3 className="text-2xl font-bold text-white text-center sm:text-left">
                        Experience & Education
                    </h3>

                    <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-6 sm:pl-8 group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-125 transition-transform duration-200" />

                                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition duration-200">
                                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-white">
                                            {item.role} <span className="text-indigo-400">@ {item.company}</span>
                                        </h4>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;