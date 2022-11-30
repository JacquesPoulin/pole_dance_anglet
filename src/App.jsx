// MAIN STYLE
import "./sass/main.scss";

// REACT
import { HashRouter, Route, Routes } from "react-router-dom";

// ALL APP COMPONENTS
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
