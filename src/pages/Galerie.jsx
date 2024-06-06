import React from "react";
import { Link } from "react-scroll";

// --- DATAS ---
import galleryList from "../../data/galleryList";

const Galerie = () => {
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
        {galleryList?.map(({ id, imgSource, alt, galleyStyle }) => (
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
    </div>
  );
};

export default Galerie;
