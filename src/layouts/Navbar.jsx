// --- REACT ---
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Sling as Hamburger } from "hamburger-react";

// --- DATAS ---
import navbarList from "../../data/navbarList";

const navbar = () => {
  // ! ***** STATES ******
  // > Handle the navbar background-color on scroll
  const [isColor, setIsColor] = useState(false);

  // ! ***** FUNCTIONS ******
  // > Change the navbar background-color when scrolling
  const changeColor = () => {
    if (isOpened === false && window.scrollY >= 15) {
      setIsColor(true);
    } else {
      setIsColor(false);
    }
  };

  // > To listen the navbar scrolling event
  window.addEventListener("scroll", changeColor);

  // ! ***** RENDERING ******
  return (
    <header>
      <nav className="navbar">
        <ul>
          <h4>PoleDanceAnglet</h4>
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
