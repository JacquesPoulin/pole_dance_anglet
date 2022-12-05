// --- REACT ---
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

// --- DATAS ---
import navbarList from "../../data/navbarList";

const navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>NAVBAR</h1>
        {/* <NavLink to="/acceuil">
          <img
            src="../../public/images/logo/LOGO.png"
            alt="Logo du site"
            title="Acceuil"
          />
        </NavLink>

        <ul>
          {navbarList.map((link) => (
            <NavLink key={link.id} to={link.path}>
              <li>{link.title}</li>
            </NavLink>
          ))}
        </ul> */}
      </nav>
    </header>
  );
};

export default navbar;
