// ! *** IMPORTS & PACKAGES ***
import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Link } from "react-scroll";
import { Button, Modal, Typography } from "@mui/material";

// ! --- DATAS ---
import priceList from "../../data/priceList";

// loadStripe.setLoadParameters({advancedFraudSignals: false});
// const stripePromise = await loadStripe(
//   "pk_test_51Ov0uq2NE01lOuIpR3sSqY3J74BpzUmeJkCGKqSORklBB3YZbPJboj44ye7odatcqRnhTK4qpCOQa5GqmTaJJr8f001urF155p"
// );

const Tarifs = () => {
  // const [openModal, setOpenModal] = useState(false);
  // const [selectedCardId, setSelectedCardId] = useState(null);

  // const handleOpenModal = (id) => {
  //   setSelectedCardId(id);
  //   setOpenModal(true);
  // };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  // const getTotalAmount = (selectedCardId) => {
  //   // Recherchez le montant correspondant à l'ID de la carte sélectionnée
  //   const selectedCard = priceList.find((card) => card.id === selectedCardId);
  //   if (selectedCard) {
  //     // Si la carte est trouvée, retournez le montant
  //     return (
  //       selectedCard.tarif_cours ||
  //       selectedCard.tarif_collectif ||
  //       selectedCard.tarif_stage ||
  //       0
  //     );
  //   } else {
  //     return 0;
  //   }
  // };

  return (
    <div name="Tarifs" className="tarif">
      {/* TITLE */}
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
              tarif_collectif_special,
              description_stage,
              tarif_stage,
              info,
              info2,
              lienPaiement,
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
                </div>
                <div className="buttonContainer">
                  {/* Bouton RESERVER */}
                  <a
                    href={lienPaiement}
                    target="_blank"
                    title="Réserver votre cours"
                  >
                    <div
                      className="button-57"
                      role="button"
                      // onClick={() => handleOpenModal(id)}
                    >
                      {info && <span className="text">{info}</span>}
                      <span>{info2}</span>
                    </div>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <div className="tarif__description">
        <p>
          La réservation correspond à un acompte de 15 euros, requis afin de
          sécuriser votre place.
        </p>
        <p>
          Cet acompte vous assure une réservation ferme et me permet de mieux
          organiser mes cours pour vous offrir la meilleure expérience possible.
        </p>
      </div>
    </div>
  );
};

export default Tarifs;

{
  /* Modal de paiement */
}
{
  /* <Modal
open={openModal}
onClose={handleCloseModal}
aria-labelledby="modal-title"
aria-describedby="modal-description"
className="custom-modal"
>
<div className="modal-content">
  <Typography variant="h4" id="modal-title">
    Réservation
  </Typography>
  <Typography variant="body1" id="modal-description">
    Remplissez le formulaire
  </Typography>
  {/* Intégration du composant CheckoutForm */
}
// <Elements stripe={stripePromise}>
//   {/* <CheckoutForm totalAmount={getTotalAmount(selectedCardId)} /> */}
//   <CheckoutForm totalAmount="15" />
// </Elements>
// </div>
// </Modal> */}
