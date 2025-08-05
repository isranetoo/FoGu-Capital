export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Efeito de brilho */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 z-10">
        {/* Logo + Descrição */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/assets/logo.png" alt="FoGu Capital Logo" className="w-10 h-10 rounded-full shadow-lg border-2 border-green-500 bg-white" />
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              FoGu <span className="text-green-400">Capital</span>
            </h2>
          </div>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-xs">
            Global asset management and financial technology firm focused on <span className="text-green-400 font-semibold">sustainable investments</span> and <span className="text-green-400 font-semibold">innovative advisory</span> solutions.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-white font-bold mb-4 tracking-wide flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" /></svg>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400 transition font-medium">Home</a></li>
            <li><a href="/investment" className="hover:text-green-400 transition font-medium">Investment</a></li>
            <li><a href="/advisory" className="hover:text-green-400 transition font-medium">Advisory</a></li>
            <li><a href="/ai-solutions" className="hover:text-green-400 transition font-medium">AI Solutions</a></li>
            <li><a href="/focus" className="hover:text-green-400 transition font-medium">Focus Areas</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-bold mb-4 tracking-wide flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>Email: <a href="mailto:contato@fogucapital.com.br" className="hover:text-green-400 transition">contato@fogucapital.com.br</a></li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l1.4-7H6.6M7 13l-1.4 7h10.8L17 13M7 13V6a1 1 0 011-1h8a1 1 0 011 1v7" /></svg>Phone: <a href="tel:+5511999999999" className="hover:text-green-400 transition">+55 (11) 99999-9999</a></li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414z" /></svg>São Paulo - Brasil</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-4 tracking-wide flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
            Newsletter
          </h3>
          <p className="text-sm mb-4 text-gray-400">
            Subscribe to receive news and investment insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 flex-1 shadow"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold shadow transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social icons */}
      <div className="relative flex justify-center gap-6 mt-12 z-10">
        <a href="#" className="hover:text-green-400 transition" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
        <a href="#" className="hover:text-green-400 transition" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
        <a href="#" className="hover:text-green-400 transition" aria-label="Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></a>
      </div>

      {/* Linha inferior */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 z-10">
        © {new Date().getFullYear()} FoGu Capital. All rights reserved.
      </div>
    </footer>
  );
}
