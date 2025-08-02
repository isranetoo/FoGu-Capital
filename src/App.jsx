import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Produtos from "./pages/Produtos";
import Equipe from "./pages/Equipe";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

// Componentes da Home
import Hero from "./components/Hero";
import Services from "./components/Services";
import InvestmentCards from "./components/InvestmentCards";
import StrategicAdvisory from "./components/StrategicAdvisory";
import AiSolutions from "./components/AiSolutions";
import FocusAreas from "./components/FocusAreas";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <InvestmentCards />
                <StrategicAdvisory />
                <AiSolutions />
                <FocusAreas />
              </>
            }
          />

          {/* Outras páginas */}
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
