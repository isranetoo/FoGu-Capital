export default function Produtos() {
  const produtos = [
    {
      nome: "Fundo Renda Fixa Premium",
      descricao: "Foco em títulos públicos e privados de baixo risco, ideal para quem busca segurança e liquidez.",
    },
    {
      nome: "Fundo Multimercado Estratégico",
      descricao: "Diversificação em diferentes classes de ativos para maximizar o retorno ajustado ao risco.",
    },
    {
      nome: "Fundo de Ações Vision",
      descricao: "Carteira de ações selecionadas com base em análise fundamentalista e visão de longo prazo.",
    },
    {
      nome: "Carteiras Personalizadas",
      descricao: "Portfólios sob medida para atender às metas e perfil de risco de cada cliente.",
    },
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Nossos Produtos</h1>
      <p className="text-gray-600 mb-8">
        Oferecemos soluções de investimento adaptadas às necessidades de nossos clientes,
        unindo análise de mercado, gestão profissional e visão estratégica.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {produtos.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-green-600">{p.nome}</h2>
            <p className="text-gray-600 mt-2">{p.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
