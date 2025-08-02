export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-start px-6 md:px-20 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          FoGu Capital is a <span className="text-green-400">global asset</span> management and financial technology firm
        </h1>
        <p className="mt-6 text-lg text-gray-200">
          The future of sustainable finance.
        </p>
        <a
          href="/contato"
          className="mt-8 inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition"
        >
          Contact Us ↗
        </a>
      </div>
    </section>
  );
}
