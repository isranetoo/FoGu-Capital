export default function Contato() {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Entre em Contato</h1>
      <p className="text-gray-600 mb-8">
        Estamos à disposição para esclarecer dúvidas e apresentar nossas soluções de
        investimento. Preencha o formulário abaixo ou entre em contato diretamente.
      </p>

      <form className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Seu Nome" className="border p-3 rounded-lg w-full" />
        <input type="email" placeholder="Seu E-mail" className="border p-3 rounded-lg w-full" />
        <textarea placeholder="Sua Mensagem" rows="5" className="border p-3 rounded-lg w-full"></textarea>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
          Enviar Mensagem
        </button>
      </form>

      <div className="mt-8 text-gray-600">
        <p>Email: contato@FoGucapital.com.br</p>
        <p>Telefone: +55 (11) 99999-9999</p>
      </div>
    </div>
  );
}
