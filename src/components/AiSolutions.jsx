export default function AiSolutions() {
  const solutions = [
    {
      title: "IMPACT Synergy",
      description: "AI-driven strategies for exponential investment results.",
      color: "from-green-400/80 to-green-600/80",
    },
    {
      title: "IMPACT Connect",
      description: "Connecting global partners for sustainable transformation.",
      color: "from-blue-400/80 to-green-400/80",
    },
    {
      title: "IMPACT IQ",
      description: "Real-time insights for smarter, faster decisions.",
      color: "from-yellow-300/80 to-green-400/80",
    },
    {
      title: "IMPACT Investment",
      description: "Personalized AI portfolios for maximum impact.",
      color: "from-green-500/80 to-emerald-400/80",
    },
  ];

  return (
    <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 z-10">
        {/* Imagem */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-900 bg-gradient-to-br from-green-900/60 via-black/80 to-green-800/60 flex items-center justify-center animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              alt="AI Solutions"
              className="object-cover w-full h-full opacity-90 scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-green-400/20"></div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-6">
          <span className="bg-green-200/60 text-green-900 text-xs font-bold px-4 py-1 rounded-full tracking-widest shadow-md animate-pulse w-fit">
            AI SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            The <span className="text-green-400 underline decoration-green-500/60">future</span> of finance is <span className="text-blue-300">intelligent</span>
          </h2>
          <p className="mt-2 text-lg text-gray-200 max-w-xl">
            Our proprietary AI tools empower investors, corporations and governments to make <span className="font-semibold text-green-300">smarter</span>, more <span className="font-semibold text-blue-200">impactful</span> decisions for a sustainable world.
          </p>
          {/* Lista de soluções */}
          <div className="mt-6 grid gap-4">
            {solutions.map((sol, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${sol.color} p-4 rounded-xl flex justify-between items-start shadow-lg hover:scale-105 transition-transform duration-300 group`}
              >
                <div>
                  <h3 className="font-bold text-lg text-white drop-shadow group-hover:text-green-900 transition">{sol.title}</h3>
                  <p className="text-sm text-white/90 mt-1 group-hover:text-green-100 transition">{sol.description}</p>
                </div>
                <span className="text-white/80 group-hover:text-green-900 text-xl transition">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
