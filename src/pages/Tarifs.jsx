import React from "react";

// --- PACKAGES ---
import { Link } from "react-scroll";

// --- DATAS ---
import priceList from "../../data/priceList";

const Tarifs = () => {
  return (
    <div name="Tarifs" className="tarif">
      // {/* TITLE */}
      <div className="tarif__title">
        <h1>TARIFS</h1>
      </div>
      <section className="hero-section">
        <div className="card-grid">
          {priceList?.map(
            ({
              id,
              title,
              imgSource,
              alt,
              description_cours,
              tarif_cours,
              description_collectif,
              tarif_collectif,
              description_stage,
              tarif_stage,
              info,
            }) => (
              <div key={id} className="card" href="#">
                <div
                  className="card__background"
                  style={imgSource}
                  alt={alt}
                ></div>
                <div className="card__content">
                  {/**** Categorie ****/}
                  {title && <h4 className="card__category">{title}</h4>}

                  <div className="tarifs">
                    {/**** Cours individuel ****/}
                    {description_cours && (
                      <p className="card__heading">{description_cours}</p>
                    )}
                    {tarif_cours && <p>{tarif_cours}</p>}
                  </div>

                  {/**** Cours collectif ****/}
                  <div className="tarifs">
                    {description_collectif && (
                      <p className="card__heading">{description_collectif}</p>
                    )}
                    {tarif_collectif && <p>{tarif_collectif}</p>}
                  </div>

                  {/**** Stage ****/}
                  <div className="tarifs">
                    {description_stage && (
                      <p className="card__heading">{description_stage}</p>
                    )}
                    {tarif_stage && <p>{tarif_stage}</p>}
                  </div>
                </div>

                {/* <button>{info && info}</button> */}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Tarifs;

// style =
//   "background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)";

//  <Link to="Reserver">
//    <button>Réserver</button>
//  </Link>;
