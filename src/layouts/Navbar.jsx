// ! *** IMPORTS & PACKAGES ***
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";

// ! *** DATAS ***
import navbarList from "../../data/navbarList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add("menu-open");
      document.querySelector(".navbar").classList.remove("closed"); // Retirer la classe closed
    } else {
      document.body.classList.remove("menu-open");
      document.querySelector(".navbar").classList.add("closed"); // Ajouter la classe closed
    }
  };
  
  // ! *** VARIABLES DES MEDIA QUERIES ***
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  
  useEffect(() => {
    // Ajouter la classe closed lors du montage du composant si le menu est fermé
    if (!showMenu) {
      document.querySelector(".navbar").classList.add("closed");
    }
  }, [showMenu]);


  return (
    <header>
      <nav className={`navbar ${showMenu ? "open" : "closed"}`}>
        <Link to="Accueil" smooth={true} duration={500}>
          <div className="navbar__titleContainer">
            <h4>PoleDanceAnglet</h4>
          </div>
        </Link>
        {isTabletOrMobile && (
          <div className="burger-menu" onClick={handleMenuToggle}>
            <Hamburger toggled={showMenu} toggle={setShowMenu} className="test"/>
          </div>
        )}

        {(isDesktop || showMenu) && (
          <ul className={`navbar__links ${showMenu ? "show" : ""}`}>
            {navbarList?.map(({ id, title }) => (
              <Link
                key={id}
                to={title}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShowMenu(false)} // Fermer le menu au clic sur un lien
              >
                <li>{title}</li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
