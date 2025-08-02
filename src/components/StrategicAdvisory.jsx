export default function StrategicAdvisory() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Coluna Esquerda */}
        <div>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            STRATEGIC ADVISORY
          </span>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Comprehensive banking and data driven advisory services to help organizations
            boost growth, mitigate risk, identify proven solutions and connect with trusted
            global partners.
          </p>
        </div>

        {/* Coluna Direita */}
        <div className="text-3xl md:text-4xl font-light leading-snug">
          Innovative <span className="font-semibold">advisory services</span> and 
          <span className="font-semibold"> data driven solutions</span> for 
          <span className="text-green-600 font-semibold"> corporate</span>, 
          <span className="text-green-600 font-semibold"> government</span> and 
          institutional clients
        </div>
      </div>
    </section>
  );
}
