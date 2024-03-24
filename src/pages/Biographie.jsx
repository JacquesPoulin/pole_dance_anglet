import React from "react";

// ! --- Imports divers ---
import { Link } from "react-scroll";
import Parcours from "../components/Parcours";
import Methode from "../components/Methode";

// ! --- MUI PACKAGES ---
import Button from "@mui/material/Button";

const Biographie = () => {
  return (
    <div name="Biographie" className="biographie parallax">
      <h1>Biographie</h1>
      <div className="containers">
        <div className="biographie__container-left">
          <Parcours />
        </div>
        <div className="biographie__container-right">
          <Methode />
        </div>
      </div>
      <div className="biographie__cta-button-container">
        {/* BOUTON ENVOYER */}
        <Link
          activeClass="active"
          to="Contact"
          spy
          smooth
          isDynamic
          duration={500}
        >
          <Button id="button" color="secondary" variant="contained" type="submit">
            Me contacter
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Biographie;
