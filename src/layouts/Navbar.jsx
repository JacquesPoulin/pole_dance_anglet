// --- REACT ---
import React from "react";
import { NavLink } from "react-router-dom";

// --- DATAS ---
import navbarList from "../../data/navbarList";

const navbar = () => {
  // ! ***** RENDERING ******
  return (
    <header>
      <nav className="navbar">
        <ul>
          <NavLink to="/acceuil">
            <h4>PoleDanceAnglet</h4>
          </NavLink>
          {navbarList.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <li>{link.title}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
