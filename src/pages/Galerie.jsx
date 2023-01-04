import React from "react";

// --- DATAS ---
import galleryList from "../../data/galleryList";

const Galerie = () => {
  return (
    <div name="Galerie" className="gallerie">
      <h1>Galerie</h1>

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
