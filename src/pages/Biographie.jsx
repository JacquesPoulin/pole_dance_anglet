import React from "react";

// ! --- Imports divers ---
import { Link } from "react-scroll";
import Parcours from "../components/Parcours";
import Methode from "../components/Methode";
import Fade from "react-reveal/Fade";

// ! --- MUI PACKAGES ---
import Button from "@mui/material/Button";

const Biographie = () => {
  return (
    <div name="Biographie" className="biographie parallax">
      <Fade bottom>
        <h1>Biographie</h1>
      </Fade>
      <div className="containers">
        <div className="biographie__container-left">
          <Fade left>
            <Parcours />
          </Fade>
        </div>
        <div className="biographie__container-right">
          <Fade right>
            <Methode />
          </Fade>
        </div>
      </div>
      <Fade bottom>
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
            <Button
              id="button"
              color="secondary"
              variant="contained"
              type="submit"
            >
              Me contacter
            </Button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Biographie;
