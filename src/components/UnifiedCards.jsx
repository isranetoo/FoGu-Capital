
import { FaChartLine, FaHandsHelping, FaRobot, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";


export default function UnifiedCards() {
  // Cards minimalistas, só ícones e cor
  const cards = [
    {
      title: "Investment",
      desc: "Private Equity, Sustainable Finance, Real Assets, Evergreen Fund",
      icon: <FaChartLine size={40} className="text-green-500 drop-shadow-xl" />,
      link: "/investment",
      color: "from-green-100 via-green-50 to-white",
    },
    {
      title: "Advisory",
      desc: "Business Development, Strategic Advisory, Sustainability Solutions",
      icon: <FaHandsHelping size={40} className="text-green-500 drop-shadow-xl" />,
      link: "/advisory",
      color: "from-green-50 via-white to-green-100",
    },
    {
      title: "AI Solutions",
      desc: "IMPACT Synergy, IMPACT Investment, IMPACT Connect, IMPACT IQ",
      icon: <FaRobot size={40} className="text-green-500 drop-shadow-xl" />,
      link: "/ai-solutions",
      color: "from-white via-green-50 to-green-100",
    },
    {
      title: "Focus",
      desc: "Sustainable Energy, Infrastructure, Real Estate, Innovative Technology",
      icon: <FaLightbulb size={40} className="text-green-500 drop-shadow-xl" />,
      link: "/focus",
      color: "from-green-100 via-white to-green-50",
    },
  ];

  return (
    <section className="relative py-24 px-2  bg-gray-900 overflow-hidden">
      {/* Efeito de fundo animado */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <motion.a
            key={card.title}
            href={card.link}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.07, rotate: -1 }}
            className={`group bg-gradient-to-br ${card.color} border border-green-100/60 rounded-3xl p-8 flex flex-col items-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-h-[260px]`}
          >
            <span className="bg-white/60 p-4 rounded-full shadow-lg mb-2 group-hover:bg-green-100/80 transition-all">
              {card.icon}
            </span>
            <h3 className="text-xl font-extrabold text-green-700 group-hover:text-green-500 drop-shadow-lg transition-colors tracking-tight text-center">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium group-hover:text-green-900/80 transition-colors text-center">
              {card.desc}
            </p>
            <span className="absolute top-5 right-5 text-gray-200 group-hover:text-green-400 transition-transform group-hover:translate-x-1 text-lg">
              ↗
            </span>
            {/* Detalhe animado */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-400/10 rounded-full blur-2xl group-hover:scale-110 transition-transform"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            ></motion.div>
          </motion.a>
        ))}
      </div>

      {/* Frase de impacto */}
      <div className="relative z-10 mt-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2 tracking-tight drop-shadow-lg">Transformando o futuro com estratégia, inovação e impacto real.</h2>
        <p className="text-white text-lg text-center max-w-2xl">Soluções integradas para impulsionar negócios, investimentos e tecnologia sustentável.</p>
      </div>
    </section>
  );
}
