// MAIN STYLE
import "./sass/main.scss";

// REACT
import React from "react";
import { useRoutes } from "react-router-dom";

// ALL APP COMPONENTS
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

// APP ROUTES
import routesConfig from "./routes";

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <div>
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
