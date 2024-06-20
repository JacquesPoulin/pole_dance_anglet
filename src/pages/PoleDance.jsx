import React from "react";

// ! ----- Packages  -----
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PoleDance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Pour déclencher l'animation une seule fois
    threshold: 0.1, // Le pourcentage de visibilité pour déclencher l'animation
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        ref={ref}
      >
        <h1 name="Pole Dance" className="poleDance-title">
          Pole Dance
        </h1>
      </motion.div>

      <div className="poleDance">
        <motion.div
          className="marketing"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="gallery">
            <img src="/images/bar/IMG-20221124-WA0002.jpg" alt="Pole Dance" />
          </div>
        </motion.div>
        <motion.div
          className="marketing"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3>Pourquoi choisir la Pole Dance ?</h3>
          <p>
            La Pole Dance est bien plus qu'un simple sport. C'est une forme
            d'expression artistique qui renforce le corps et l'esprit. En plus
            d'améliorer la force, la flexibilité et la coordination, elle booste
            également la confiance en soi et favorise le bien-être mental. Que
            vous soyez débutant ou expérimenté, la Pole Dance offre une
            expérience unique et gratifiante.
          </p>
          <p>
            Découvrez dès maintenant les bienfaits de la Pole Dance et plongez
            dans un monde de grâce, de puissance et d'épanouissement personnel !
          </p>
          <div className="tarif-button">
            <Link
              activeClass="active"
              to="Tarifs"
              spy
              smooth
              isDynamic
              duration={500}
            >
              <button>Voir les tarifs</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PoleDance;
