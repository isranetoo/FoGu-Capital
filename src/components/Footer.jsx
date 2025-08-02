export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Logo + Descrição */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            FoGu <span className="text-green-500">Capital</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Global asset management and financial technology firm focused on 
            sustainable investments and innovative advisory solutions.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/investment" className="hover:text-green-400 transition">Investment</a></li>
            <li><a href="/advisory" className="hover:text-green-400 transition">Advisory</a></li>
            <li><a href="/ai-solutions" className="hover:text-green-400 transition">AI Solutions</a></li>
            <li><a href="/focus" className="hover:text-green-400 transition">Focus Areas</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contato@fogucapital.com.br</li>
            <li>Phone: +55 (11) 99999-9999</li>
            <li>São Paulo - Brasil</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4 text-gray-400">
            Subscribe to receive news and investment insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} FoGu Capital. All rights reserved.
      </div>
    </footer>
  );
}
