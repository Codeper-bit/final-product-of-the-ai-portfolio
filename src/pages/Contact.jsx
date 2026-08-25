import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., EmailJS, Formspree, or custom API endpoint)
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="w-full bg-slate-950 py-20 px-6 border-t border-slate-800">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-3">
                    <span className="text-indigo-400 font-medium text-sm tracking-widest uppercase">
                        Let's Connect
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                        Have a project in mind, want to discuss AI integration, or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Direct Contact Info & Links */}
                    <div className="lg:col-span-5 space-y-6">

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 text-xl">
                                    📧
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400">Email</h4>
                                    <a href="mailto:olajidedaniel689@gmail.com" className="text-slate-200 hover:text-indigo-400 font-medium text-sm sm:text-base transition">
                                        olajidedaniel689@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 text-xl">
                                    💻
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400">GitHub</h4>
                                    <a href="https://github.com/codeper-bit" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-indigo-400 font-medium text-sm sm:text-base transition">
                                        github.com/codeper-bit
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 text-xl">
                                    💼
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/codeper-bit-8a8b3a410?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-indigo-400 font-medium text-sm sm:text-base transition">
                                        linkedin.com/in/codeper-bit
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp (Optional) */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 text-xl">
                                    💬
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400">WhatsApp</h4>
                                    <a href="https://wa.me/09139114254" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-indigo-400 font-medium text-sm sm:text-base transition">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* AI Assistant Quick Prompt */}
                        <div className="bg-gradient-to-r from-indigo-900/30 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 text-center space-y-3">
                            <span className="text-2xl"></span>
                            <h4 className="text-base font-bold text-white">Need an immediate answer?</h4>
                            <p className="text-slate-400 text-xs sm:text-sm">
                                Try asking my interactive AI assistant using the button at the bottom right corner!
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name Input */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-300">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition"
                                    />
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry / Job Opportunity"
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm transition resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;