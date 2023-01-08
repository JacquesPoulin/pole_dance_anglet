import React from "react";

// --- DATAS ---
import galleryList from "../../data/galleryList";

const Galerie = () => {
  return (
    <div name="Galerie" className="gallerie">
      <div>
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
