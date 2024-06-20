import React from "react";

// ! ----- Packages  -----
import { Link } from "react-scroll";
import Parcours from "../components/Parcours";
import Methode from "../components/Methode";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@mui/material/Button";

const Biographie = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Pour déclencher l'animation une seule fois
    threshold: 0.1, // Le pourcentage de visibilité pour déclencher l'animation
  });

  return (
    <div name="Biographie" className="biographie parallax" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Biographie</h1>
      </motion.div>

      <div className="containers">
        <motion.div
          className="biographie__container-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Parcours />
        </motion.div>
        <motion.div
          className="biographie__container-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Methode />
        </motion.div>
      </div>

      <motion.div
        className="biographie__cta-button-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Biographie;
