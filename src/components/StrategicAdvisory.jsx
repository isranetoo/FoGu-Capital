export default function StrategicAdvisory() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl opacity-60 animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl opacity-60 animate-pulse z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center z-10">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6">
          <span className="bg-green-200/60 text-green-900 text-xs font-bold px-4 py-1 rounded-full tracking-widest shadow-md animate-pulse w-fit">
            STRATEGIC ADVISORY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 drop-shadow-lg">
            Transforming <span className="text-green-500 underline decoration-green-400/60">visions</span> into <span className="text-green-500">impact</span>
          </h2>
          <p className="mt-2 text-lg text-gray-700 max-w-xl">
            Unlock growth, mitigate risks and accelerate your journey with our <span className="font-semibold text-green-700">data-driven</span> and <span className="font-semibold text-green-700">global advisory</span> expertise. We connect you to proven solutions and trusted partners worldwide.
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-gray-800 text-base">
            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Strategic Growth &amp; Expansion</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Risk Mitigation &amp; Compliance</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Global Partnerships</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Sustainable Solutions</li>
          </ul>
        </div>

        {/* Coluna Direita - Visual Impact */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-100 bg-gradient-to-br from-green-100/60 via-white/80 to-green-100/60 flex items-center justify-center animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
              alt="Strategic Advisory"
              className="object-cover w-full h-full opacity-90 scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-100/60 via-transparent to-green-100/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
