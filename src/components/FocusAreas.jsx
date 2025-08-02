export default function FocusAreas() {
  const focusAreas = [
    {
      title: "Energy Efficiency",
      img: "https://images.unsplash.com/photo-1606788075761-9b24e77a2ec6",
    },
    {
      title: "Recycling",
      img: "https://images.unsplash.com/photo-1581579185169-8dbf2a1f1a4a",
    },
    {
      title: "Smart Cities",
      img: "https://images.unsplash.com/photo-1581093588401-22f636c57c1d",
    },
    {
      title: "Renewable Energy",
      img: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
    },
    {
      title: "Green Transport",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          FOCUS AREAS
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Key areas shaping the <span className="text-green-400">future</span>
        </h2>

        {/* Carrossel */}
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden relative group"
              >
                {/* Imagem */}
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                {/* Texto */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="font-semibold">{area.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
