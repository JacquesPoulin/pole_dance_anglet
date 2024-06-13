// ! *** IMPORTS & PACKAGES ***
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

// ! --- DATAS ---
import priceList from "../../data/priceList";

const Tarifs = () => {
  return (
    <div name="Tarifs" className="tarif">
      {/* TITLE */}
      <Fade bottom>
        <div className="tarif__title">
          <h1>TARIFS</h1>
        </div>
      </Fade>

      <section className="hero-section">
        <Fade bottom>
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
                tarif_collectif_special,
                description_stage,
                tarif_stage,
                description_trimestre,
                tarif_trimestre,
                info,
                info2,
                // lienPaiement,
              }) => (
                <div key={id} className="card" href="#">
                  <div
                    className="card__background"
                    style={imgSource}
                    alt={alt}
                  ></div>
                  <div className="card__content">
                    {/* Categorie */}
                    {title && <h4 className="card__category">{title}</h4>}

                    <div className="tarifs">
                      {/* Cours individuel */}
                      {description_cours && (
                        <p className="card__heading">{description_cours}</p>
                      )}
                      {tarif_cours && <p>{tarif_cours}</p>}
                    </div>

                    {/* Cours collectif */}
                    <div className="tarifs">
                      {description_collectif && (
                        <p className="card__heading">{description_collectif}</p>
                      )}
                      {tarif_collectif && id != 3 ? (
                        <p>{tarif_collectif}</p>
                      ) : (
                        <p>{tarif_collectif_special}</p>
                      )}
                    </div>

                    {/* Stage */}
                    <div className="tarifs">
                      {description_stage && (
                        <p className="card__heading">{description_stage}</p>
                      )}
                      {tarif_stage && <p>{tarif_stage}</p>}
                    </div>
                    <div className="tarifs">
                      {description_trimestre && (
                        <p className="card__heading" title="Soit 16€/cours">
                          {description_trimestre}
                        </p>
                      )}
                      {tarif_trimestre && <p>{tarif_trimestre}</p>}
                    </div>
                  </div>
                  <div className="buttonContainer">
                    {/* Bouton CONTACT */}
                    <Link
                      activeClass="active"
                      to="Contact"
                      spy
                      smooth
                      isDynamic
                      duration={500}
                    >
                      <div className="button-57" role="button">
                        {info && <span className="text">{info}</span>}
                        <span>{info2}</span>
                      </div>
                    </Link>
                    {/* <a
                    href={lienPaiement}
                    target="_blank"
                    title="N'hésitez pas à me contacter"
                  >
                  </a> */}
                  </div>
                </div>
              )
            )}
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Tarifs;
