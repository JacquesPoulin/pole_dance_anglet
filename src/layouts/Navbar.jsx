// --- REACT ---
import React from "react";
import { Link } from "react-scroll";

// --- DATAS ---
import navbarList from "../../data/navbarList";

const navbar = () => {
  // ! ***** RENDERING ******
  return (
    <header>
      <nav className="navbar">
        <ul>
          <Link to="Accueil">
            <h4>PoleDanceAnglet</h4>
          </Link>
          {navbarList?.map(({ id, title }) => (
            <Link
              key={id}
              to={title}
              spy
              smooth
              isDynamic
              offset={5}
              duration={1000}
            >
              <li>{title && title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
