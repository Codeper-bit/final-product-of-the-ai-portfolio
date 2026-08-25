import { Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <h1 className="text-5xl font-bold text-center text-blue-500"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">Codeper-bit</span></h1>

            <nav className="flex justify-center items-center px-8 py-5 shadow-md bg-slate-900 text-white">

                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-600">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="cursor-pointer hover:text-blue-600">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="cursor-pointer hover:text-blue-600">
                        <Link to="/projects">Project</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        <Link to="/skills">Skill</Link>
                    </li>

                    <li className="cursor-pointer hover:text-blue-600">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <button className="flex bg-blue-600 text-white m-4 px-5 py-2 rounded-lg hover:bg-blue-700">
                    <Link to="/xion">Chat with AI</Link>
                </button>
            </nav>
        </>
    )
} export default Navbar;