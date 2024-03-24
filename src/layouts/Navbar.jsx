// ! *** IMPORTS & PACKAGES ***
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";

// ! *** DATAS ***
import navbarList from "../../data/navbarList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // ! *** VARIABLES DES MEDIA QUERIES ***
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header>
      <nav className={`navbar ${showMenu ? "open" : ""}`}>
        <div className="navbar__titleContainer">
          <h4>PoleDanceAnglet</h4>
        </div>

        {isMobile && (
          <div className="burger-menu" onClick={handleMenuToggle}>
            <Hamburger toggled={showMenu} toggle={setShowMenu} />
          </div>
        )}

        {isDesktop && (
          <ul className="navbar__links">
            {navbarList.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={title}
                  spy
                  smooth
                  isDynamic
                  offset={5}
                  duration={500}
                  onClick={() => setShowMenu(false)} // Fermer le menu après un clic sur un lien
                >
                  {title && title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
