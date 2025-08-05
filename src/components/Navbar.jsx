
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Investment" },
    { to: "/advisory", label: "Advisory" },
    { to: "/ai-solutions", label: "AI Solutions" },
    { to: "/focus", label: "Focus" },
    { to: "/company", label: "Company" },
    { to: "/news", label: "News" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-green-600 text-2xl font-extrabold tracking-tight group-hover:scale-110 transition-transform">FoGu</span>
          <span className="text-gray-900 font-semibold tracking-wide group-hover:text-green-600 transition-colors">Capital</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-2 py-1 transition-colors duration-200 ${location.pathname === link.to ? "text-green-600 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-green-400 after:rounded-full" : "hover:text-green-500"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão de Contato */}
        <a
          href="/contato"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-5 py-2 rounded-full font-bold shadow-md transition-transform hover:scale-105"
        >
          Contact Us <span className="ml-1">↗</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-green-100/60 transition relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-0.5 bg-green-600 mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-green-600 mb-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-green-600 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-4 py-6 flex flex-col gap-4 text-gray-800 animate-fade-in-down shadow-lg border-b border-green-100">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-2 py-2 rounded-lg font-semibold transition-colors ${location.pathname === link.to ? "text-green-600 bg-green-100/60" : "hover:text-green-600 hover:bg-green-50/60"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contato"
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-5 py-2 rounded-full font-bold shadow-md transition-transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Contact Us <span className="ml-1">↗</span>
          </a>
        </div>
      )}
      {/* Custom Animation */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.5s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
