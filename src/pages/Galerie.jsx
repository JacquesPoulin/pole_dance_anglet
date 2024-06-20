import React, { useState } from "react";

// ! --- PACKAGES ---
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ! --- DATAS ---
import galleryList from "../../data/galleryList";

const Galerie = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Pour déclencher l'animation une seule fois
    threshold: 0.1, // Le pourcentage de visibilité pour déclencher l'animation
  });
  // ? État pour gérer la visibilité des photos
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // ? Fonction pour basculer l'état de visibilité
  const toggleShowPhotos = () => {
    setShowAllPhotos(!showAllPhotos);
  };

  // ? Déterminer l'index à partir duquel les photos seront cachées/affichées
  const halfLength = Math.ceil(galleryList.length / 2.5);

  return (
    <div name="Galerie" ref={ref}>
      <div>
        <motion.div
          className="arrowUp"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            activeClass="active"
            to="Accueil"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            <img
              src="/images/svg/arrow-up-circle-svgrepo-com.svg"
              alt="Flèche pour revenir à l'accueil"
              title="Revenir à l'accueil"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="gallerie__title">Galerie</h1>
        </motion.div>
      </div>

      {/*** MAIN GALLERY BLOC ***/}

      <motion.div
        className="gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/*** GALLERY COLUMNS ***/}
        {galleryList
          .slice(0, showAllPhotos ? galleryList.length : halfLength)
          .map(({ id, imgSource, alt, galleyStyle }) => (
            <div className="gallery__column" key={id}>
              <div className="gallery__link">
                {/*** PICTURES ***/}
                <figure className="gallery__thumb">
                  <img src={imgSource} alt={alt} className={galleyStyle} />
                </figure>
              </div>
            </div>
          ))}
      </motion.div>

      {/* BOUTON POUR BASCULER L'AFFICHAGE */}
      <motion.div
        className="buttonContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <button className="toggleButton" onClick={toggleShowPhotos}>
          {showAllPhotos ? "Voir moins" : "Voir plus"}
        </button>
      </motion.div>
    </div>
  );
};

export default Galerie;
