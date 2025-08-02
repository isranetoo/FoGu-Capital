export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo à FoGu Capital
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Investindo com inteligência e segurança para transformar o seu futuro
            financeiro. Nossa experiência e compromisso são a base para decisões
            estratégicas que geram resultados sólidos e sustentáveis.
          </p>
          <a
            href="/produtos"
            className="mt-8 inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
          >
            Conheça nossos produtos
          </a>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-blue-900">+15 anos</h3>
            <p className="text-gray-600">De experiência no mercado financeiro</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900">Foco</h3>
            <p className="text-gray-600">Em resultados consistentes</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900">100%</h3>
            <p className="text-gray-600">Compromisso com nossos clientes</p>
          </div>
        </div>
      </section>
    </div>
  );
}
