
export default function FocusAreas() {
  const focusAreas = [
    {
      title: "Energy Efficiency",
      img: "https://images.unsplash.com/photo-1606788075761-9b24e77a2ec6",
      desc: "Innovative solutions for reducing energy consumption.",
      color: "from-green-400/80 to-green-700/80",
    },
    {
      title: "Recycling",
      img: "https://images.unsplash.com/photo-1581579185169-8dbf2a1f1a4a",
      desc: "Transforming waste into valuable resources.",
      color: "from-yellow-300/80 to-green-400/80",
    },
    {
      title: "Smart Cities",
      img: "https://images.unsplash.com/photo-1581093588401-22f636c57c1d",
      desc: "Urban innovation for a connected, sustainable future.",
      color: "from-blue-400/80 to-green-400/80",
    },
    {
      title: "Renewable Energy",
      img: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
      desc: "Clean power sources driving tomorrow.",
      color: "from-green-500/80 to-emerald-400/80",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-gray-900 to-black text-white py-24 px-2 md:px-0 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div className="flex flex-col items-center text-center">
          <span className="bg-green-200/20 text-green-400 text-xs font-bold px-4 py-1 rounded-full tracking-widest shadow-md animate-pulse">
            FOCUS AREAS
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Key areas shaping the <span className="text-green-400 underline decoration-green-500/60">future</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the main sectors where innovation and sustainability are transforming the world. Explore our focus areas below:
          </p>
        </div>

        {/* Cards com destaque visual */}
        <div className="mt-14">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className={`w-72 h-56 rounded-3xl overflow-hidden relative group shadow-xl bg-gradient-to-br ${area.color} hover:scale-105 transition-transform duration-300`}
              >
                {/* Imagem */}
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-110"
                />

                {/* Overlay animado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-green-900/80 group-hover:via-green-700/30 group-hover:to-transparent transition-all duration-500"></div>

                {/* Texto */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col gap-1">
                  <h3 className="font-bold text-xl text-green-100 drop-shadow-md group-hover:text-white transition">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-200 group-hover:text-green-100 transition drop-shadow">
                    {area.desc}
                  </p>
                </div>

                {/* Efeito de destaque */}
                <div className="absolute -inset-1 rounded-3xl border-2 border-green-400/30 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
