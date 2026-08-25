import React from "react";

function Skills() {
    // Organized skill categories to match an AI & Software Engineer profile
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
        },
        {
            title: "AI & Machine Learning",
            icon: "🧠",
            skills: ["Scikit-Learn", "Llamas API", "OpenAI API"],
        },
        {
            title: "Backend Development",
            icon: "⚙️",
            skills: ["FastAPI", "REST APIs"],
        },
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: ["React", "Tailwind CSS"],
        },
        {
            title: "Databases & Storage",
            icon: "🗄️",
            skills: ["PostgreSQL", "MySQL"],
        },
        {
            title: "DevOps & Tools",
            icon: "🛠️",
            skills: ["Git", "GitHub", "Vercel", "Render"],
        },
    ];

    return (
        <section id="skills" className="w-full bg-slate-950 py-16 px-6 border-t border-slate-800">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="text-indigo-400 font-medium text-sm tracking-widest uppercase">
                        My Tech Stack
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Skills & Expertise
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                        Technologies, frameworks, and tools I use to build scalable web applications and intelligent AI systems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 shadow-lg group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl p-2.5 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-200">
                                    {category.icon}
                                </span>
                                <h3 className="text-lg font-bold text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Badges List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 bg-slate-800/80 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-300 border border-slate-700/60 hover:border-indigo-500/40 rounded-lg text-xs font-medium transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;