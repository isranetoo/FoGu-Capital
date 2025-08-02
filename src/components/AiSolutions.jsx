export default function AiSolutions() {
  const solutions = [
    {
      title: "IMPACT Synergy",
      description: "Integrating data-driven strategies for impactful investments.",
    },
    {
      title: "IMPACT Connect",
      description: "Linking global partners for sustainable development.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Imagem */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI Solutions"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Conteúdo */}
        <div>
          {/* Tag */}
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            AI SOLUTIONS
          </span>

          {/* Título */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
            Driving the <span className="text-green-400">future</span> of 
            <span className="text-green-400"> sustainable finance</span> with AI-powered solutions
          </h2>

          {/* Descrição */}
          <p className="mt-4 text-gray-300">
            Our proprietary AI tools empower investors, corporations, and governments to make
            smarter, more impactful decisions in the sustainable finance sector.
          </p>

          {/* Lista de soluções */}
          <div className="mt-6 grid gap-4">
            {solutions.map((sol, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex justify-between items-start hover:bg-white/20 transition"
              >
                <div>
                  <h3 className="font-semibold">{sol.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{sol.description}</p>
                </div>
                <span className="text-gray-300 hover:text-green-400 transition">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
