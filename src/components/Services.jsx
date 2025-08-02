import { FaChartLine, FaHandsHelping, FaRobot, FaLightbulb } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Investment",
      description: "Private Equity, Sustainable Finance, Real Assets, Evergreen Fund",
      icon: <FaChartLine size={30} className="text-green-400" />,
      link: "/investment",
    },
    {
      title: "Advisory",
      description: "Business Development, Strategic Advisory, Sustainability Solutions",
      icon: <FaHandsHelping size={30} className="text-green-400" />,
      link: "/advisory",
    },
    {
      title: "AI Solutions",
      description: "IMPACT Synergy, IMPACT Investment, IMPACT Connect, IMPACT IQ",
      icon: <FaRobot size={30} className="text-green-400" />,
      link: "/ai-solutions",
    },
    {
      title: "Focus",
      description: "Sustainable Energy, Infrastructure, Real Estate, Innovative Technology",
      icon: <FaLightbulb size={30} className="text-green-400" />,
      link: "/focus",
    },
  ];

  return (
    <section className="py-16 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="group bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/30 transition"
          >
            <div className="flex justify-between items-start">
              {service.icon}
              <span className="text-gray-300 group-hover:text-green-400 transition">
                ↗
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {service.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
