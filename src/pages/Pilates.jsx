import React from "react";

// ----- Packages  -----
import { Link } from "react-scroll";

const Pilates = () => {
  return (
    <>
      <h1 name="Pilates" className="pilates-title">
        Pilates
      </h1>
      <div className="pilates">
        <div className="gallery">
          {/* Insère ici ta galerie d'images */}
          <img src="/images/danse/IMG-20221124-WA0008.jpg" alt="Pilates" />
        </div>
        <div className="marketing">
          <h3>Pourquoi choisir le Pilates ?</h3>
          <p>
            Le Pilates est une méthode d'exercice qui vise à renforcer le corps
            dans sa globalité, en se concentrant principalement sur les muscles
            profonds, la posture et la respiration. En pratiquant le Pilates, on
            améliore la force, la flexibilité et la stabilité, tout en réduisant
            les risques de blessures et en favorisant une meilleure
            coordination. Que vous souhaitiez améliorer votre condition
            physique, soulager des douleurs chroniques ou simplement vous
            détendre, le Pilates offre une approche holistique pour prendre soin
            de votre corps et de votre esprit.
          </p>
          <p>
            Découvrez dès maintenant les nombreux bienfaits du Pilates et
            laissez-vous guider vers une vie plus saine, plus équilibrée et plus
            dynamique.
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

export default Pilates;
