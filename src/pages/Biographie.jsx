import React from "react";
import { Link } from "react-scroll";

import Parcours from "../components/Parcours";
import Methode from "../components/Methode";

const Biographie = () => {
  return (
    <div name="Biographie" className="bio parallax">
      <div className="bio__buttons-container">
        <button className="button" role="button">
          PARCOURS
        </button>

        <button className="button" role="button">
          METHODE
        </button>  
        <div className="bio__components">
          <Parcours />
          <div>
            <Methode />
          </div>
        </div>
      </div>

      {/* ***ARROW DOWN *** */}
      <Link activeClass="active" to="EVJF" spy smooth isDynamic duration={1000}>
        <div className="bio__arrow-container">
          <img
            src="../../public/images/png/kisspng-arrow-computer-icons-logo-white-down-arrow-png-5ab1bd5cde13f0.7986932615215977889096.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Biographie;
