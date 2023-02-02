import React from "react";
import { Link } from "react-scroll";

import Parcours from "../components/Parcours";
import Methode from "../components/Methode";

const Biographie = () => {
  return (
    <div name="Biographie" className="bio parallax">
      <h1>Biographie</h1>
      <div className="bio__buttons-container">
        <button className="button" role="button" id="parcours">
          PARCOURS
        </button>

        <button className="button" role="button" id="method">
          METHODE
        </button>
        <div className="bio__components">
          <Parcours />
          <div>
            <Methode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biographie;
