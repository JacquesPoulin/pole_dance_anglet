import React from "react";

// ----- Packages  -----
import { Link } from "react-scroll";

const Yoga = () => {
  return (
    <>
      <h1 name="Yoga" className="yoga-title">Yoga</h1>
      <div className="yoga">
        <div className="gallery">
          {/* Insère ici ta galerie d'images */}
          <img src="/images/danse/IMG-20221124-WA0001.jpg" alt="Yoga" />
        </div>
        <div className="marketing-text">
          <h3>Pourquoi choisir le Yoga ?</h3>
          <p>
            Le Yoga est bien plus qu'une simple pratique physique. C'est un
            chemin vers l'harmonie du corps, de l'esprit et de l'âme. En
            combinant postures, respirations et méditations, le Yoga favorise
            l'équilibre, la flexibilité et la paix intérieure. Que vous
            recherchiez la détente, la force physique ou la clarté mentale, le
            Yoga offre une multitude de bienfaits pour votre bien-être global.
          </p>
          <p>
            Découvrez dès maintenant les merveilles du Yoga et laissez-vous
            emporter dans un voyage de transformation et de découverte de soi.
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
        </div>
      </div>
    </>
  );
};

export default Yoga;
