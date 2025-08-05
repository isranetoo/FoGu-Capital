export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-start px-6 md:px-20 text-white overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(120deg, rgba(34,197,94,0.25) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-black/60 to-black/80 animate-pulse-slow"></div>

      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-float"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          FoGu Capital is a <span className="text-green-400 bg-white/10 px-2 rounded-lg">global asset</span> management<br className="hidden md:block" />
          <span className="text-green-300">&amp; fintech</span> firm
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-gray-200/90 font-light drop-shadow">
          The future of <span className="text-green-400 font-semibold">sustainable finance</span> starts here.
        </p>
        <a
          href="/contato"
          className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        >
          Contact Us <span className="ml-2">↗</span>
        </a>
      </div>
      {/* Custom Animations */}
      <style>{`
        .animate-float-slow { animation: float 8s ease-in-out infinite alternate; }
        .animate-float { animation: float 5s ease-in-out infinite alternate; }
        .animate-fade-in-up { animation: fadeInUp 1.2s cubic-bezier(.39,.575,.565,1) both; }
        .animate-pulse-slow { animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite; }
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.08); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </section>
  );
}
