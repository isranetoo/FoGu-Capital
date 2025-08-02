export default function InvestmentCards() {
  const investments = [
    {
      id: "01",
      title: "Private Equity",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      link: "/private-equity",
    },
    {
      id: "02",
      title: "Sustainable Finance",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      link: "/sustainable-finance",
    },
    {
      id: "03",
      title: "Real Assets",
      img: "https://images.unsplash.com/photo-1520962918287-7448c2878f65",
      link: "/real-assets",
    },
    {
      id: "04",
      title: "Evergreen Fund",
      img: "https://images.unsplash.com/photo-1549887534-4d8a9c9d9d1e",
      link: "/evergreen-fund",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">
        {investments.map((inv) => (
          <a
            key={inv.id}
            href={inv.link}
            className="group relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Imagem */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${inv.img})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Conteúdo */}
            <div className="relative z-10 p-4 flex flex-col h-full justify-end text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm opacity-80">{inv.id}</span>
                <span className="opacity-80 group-hover:text-green-400 transition">
                  ↗
                </span>
              </div>
              <h3 className="text-lg font-semibold">{inv.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
