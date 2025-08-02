export default function Equipe() {
  const equipe = [
    {
      nome: "Carlos Menezes",
      cargo: "CEO & Gestor-Chefe",
      desc: "Mais de 20 anos de experiência no mercado financeiro, liderando estratégias de alto desempenho.",
    },
    {
      nome: "Mariana Lopes",
      cargo: "Diretora de Investimentos",
      desc: "Especialista em renda variável e alocação de portfólio, com histórico comprovado de sucesso.",
    },
    {
      nome: "Felipe Andrade",
      cargo: "Economista-Chefe",
      desc: "Analista econômico com foco em cenários macroeconômicos e estratégias de hedge.",
    },
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Nossa Equipe</h1>
      <p className="text-gray-600 mb-8">
        Contamos com profissionais experientes e comprometidos em oferecer as melhores
        soluções de investimento para nossos clientes.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {equipe.map((p, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h2 className="text-lg font-bold text-green-600">{p.nome}</h2>
            <p className="text-sm text-gray-500">{p.cargo}</p>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
