import React, { useState, useRef, useEffect } from "react";

export default function Xion() {
    const [askxion, setAskxion] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const promptSuggestions = [
        "What are Codeper-bit's key technical skills?",
        "Tell me about the AI & Fullstack projects built.",
        "Is Codeper-bit available for hire or contract work?",
        "How many years of experience does Codeper-bit have?",
    ];

    // Core function: Sends user query to FastAPI backend
    const handleSendMessage = async (textToSend) => {
        const query = textToSend || askxion;
        if (!query.trim() || isLoading) return;

        // 1. Add User Message to UI
        const userMsg = { id: Date.now(), sender: "user", text: query };
        setMessages((prev) => [...prev, userMsg]);
        setAskxion("");
        setIsLoading(true);

        try {
            // 2. Post to FastAPI backend
            const response = await fetch("http://localhost:8000/ask_xion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_message: query  // Must match 'user_message' in PortfolioQuery!
                }),
            });

            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }

            const result = await response.json();

            // 3. Extract 'reply' key matching the FastAPI response
            const aiReplyText = result.reply || result.error || "No reply returned from server.";

            const aiMsg = {
                id: Date.now() + 1,
                sender: "ai",
                text: aiReplyText,
            };
            setMessages((prev) => [...prev, aiMsg]);

        } catch (error) {
            console.error("Error communicating with backend:", error);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: "⚠️ Connection error. Make sure FastAPI server is running on port 8000.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage();
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans">
            {/* HEADER */}
            <header className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="font-bold text-white text-base leading-none">Xion AI</h1>
                        <span className="text-xs text-slate-400">Portfolio & Career Assistant</span>
                    </div>
                </div>
                <button
                    onClick={() => setMessages([])}
                    className="text-xs px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition"
                >
                    Clear Chat
                </button>
            </header>

            {/* MAIN CONTAINER */}
            <main className="flex-1 flex flex-col justify-center items-center px-4 py-8 max-w-4xl w-full mx-auto">
                {/* EMPTY STATE */}
                {messages.length === 0 ? (
                    <div className="w-full max-w-2xl text-center space-y-8 my-auto py-12">
                        <div className="space-y-3">

                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                What would you like to know?
                            </h2>
                            <p className="text-slate-400 text-sm max-w-md mx-auto">
                                Ask anything about Codeper-bit's technical background, projects, or employment history.
                            </p>
                        </div>

                        {/* SUGGESTION TILES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                            {promptSuggestions.map((prompt, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSendMessage(prompt)}
                                    className="p-4 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 rounded-xl text-xs text-slate-300 hover:text-white transition group flex flex-col justify-between gap-2 shadow-sm"
                                >
                                    <span>{prompt}</span>
                                    <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition text-[10px] font-semibold">
                                        Ask question →
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* CENTERED INPUT FORM */}
                        <form onSubmit={handleSubmit} className="w-full relative pt-4">
                            <div className="relative flex items-center bg-slate-900 border border-slate-800 focus-within:border-indigo-500/80 rounded-2xl p-2 shadow-2xl transition">
                                <input
                                    type="text"
                                    value={askxion}
                                    onChange={(e) => setAskxion(e.target.value)}
                                    placeholder="Message Xion AI..."
                                    className="w-full bg-transparent px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!askxion.trim() || isLoading}
                                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-medium rounded-xl text-xs transition shadow-md"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* ACTIVE CHAT FEED */
                    <div className="w-full flex-1 flex flex-col justify-between max-w-3xl">
                        <div className="space-y-6 pb-6">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {msg.sender === "ai"}

                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-indigo-600 text-white rounded-br-sm"
                                            : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-sm whitespace-pre-wrap"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {msg.sender === "user"}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-4 justify-start items-center">
                                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-bl-sm text-xs text-slate-400 flex items-center gap-2">
                                        <span className="animate-pulse">Xion is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* INPUT FORM FOR CONTINUOUS CHAT */}
                        <form onSubmit={handleSubmit} className="w-full sticky bottom-6 pt-2">
                            <div className="relative flex items-center bg-slate-900/90 backdrop-blur-md border border-slate-800 focus-within:border-indigo-500/80 rounded-2xl p-2 shadow-2xl transition">
                                <input
                                    type="text"
                                    value={askxion}
                                    onChange={(e) => setAskxion(e.target.value)}
                                    placeholder="Ask a follow-up question..."
                                    className="w-full bg-transparent px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!askxion.trim() || isLoading}
                                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-medium rounded-xl text-xs transition shadow-md"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}