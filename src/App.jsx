// MAIN STYLE
import "./sass/main.scss";

// REACT
import { HashRouter, Route, Routes } from "react-router-dom";

// ALL APP COMPONENTS
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import Biographie from "./pages/Biographie";
import Evjf from "./pages/Evjf";
import Galerie from "./pages/Galerie";
import Pilates from "./pages/Pilates";
import PoleDance from "./pages/PoleDance";
import Tarifs from "./pages/Tarifs";
import Yoga from "./pages/Yoga";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/acceuil" element={<Homepage />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/evjf" element={<Evjf />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/poledance" element={<PoleDance />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
