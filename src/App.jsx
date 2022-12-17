// >> MAIN SCSS STYLE
import "./sass/main.scss";

// >> ----- COMPONENTS -----
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
    <div>
      <Navbar />
      <Homepage />
      <Biographie />
      <Evjf />
      <Galerie />
      <Pilates />
      <PoleDance />
      <Yoga />
      <Tarifs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
