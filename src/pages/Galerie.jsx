import React, { useState } from "react";
import { Link } from "react-scroll";

// --- DATAS ---
import galleryList from "../../data/galleryList";

const Galerie = () => {
  // État pour gérer la visibilité des photos
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Fonction pour basculer l'état de visibilité
  const toggleShowPhotos = () => {
    setShowAllPhotos(!showAllPhotos);
  };

  // Déterminer l'index à partir duquel les photos seront cachées/affichées
  const halfLength = Math.ceil(galleryList.length / 2.5);

  return (
    <div name="Galerie" className="gallerie">
      <div>
        <div className="arrowUp">
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
        </div>
        <h1 className="gallerie__title">Galerie</h1>
      </div>

      {/*** MAIN GALLERY BLOC ***/}
      <div className="gallery">
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
      </div>

      {/* BOUTON POUR BASCULER L'AFFICHAGE */}
      <div className="buttonContainer">
        <button className="toggleButton" onClick={toggleShowPhotos}>
          {showAllPhotos ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </div>
  );
};

export default Galerie;
