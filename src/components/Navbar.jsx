import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-green-600 text-xl font-bold">FoGu</span>
          <span className="text-gray-900 font-medium">Capital</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <Link to="/">Investment</Link>
          <Link to="/advisory">Advisory</Link>
          <Link to="/ai-solutions">AI Solutions</Link>
          <Link to="/focus">Focus</Link>
          <Link to="/company">Company</Link>
          <Link to="/news">News</Link>
        </div>

        {/* Botão de Contato */}
        <a
          href="/contato"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
        >
          Contact Us ↗
        </a>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg px-4 py-4 flex flex-col gap-3 text-gray-800">
          <Link to="/">Investment</Link>
          <Link to="/advisory">Advisory</Link>
          <Link to="/ai-solutions">AI Solutions</Link>
          <Link to="/focus">Focus</Link>
          <Link to="/company">Company</Link>
          <Link to="/news">News</Link>
          <a
            href="/contato"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
          >
            Contact Us ↗
          </a>
        </div>
      )}
    </nav>
  );
}
