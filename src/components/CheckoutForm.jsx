// ! *** IMPORTS & PACKAGES ***
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Validation des données du formulaire
    const cardElement = elements.getElement(CardElement);
    console.log(cardElement);
    if (!cardElement || !cardElement.complete) {
      setErrorMessage("Veuillez fournir les informations de carte valides.");
      return;
    }

    // Créer un paiement avec Stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    // Gérer les résultats de la création du paiement
    if (error) {
      if (error.code === "card_declined") {
        setErrorMessage(
          "La carte a été refusée. Veuillez vérifier les détails et réessayer."
        );
      } else if (error.code === "expired_card") {
        setErrorMessage(
          "La carte a expiré. Veuillez utiliser une carte valide."
        );
      } else {
        setErrorMessage(
          "Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer plus tard."
        );
      }
    }
  };

  const handleCloseSnackbar = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="cardNumberForm">
      <CardElement />
      <p>Montant total : {totalAmount} €</p>
      <Button
        id="button"
        color="secondary"
        variant="none"
        endIcon={<SendIcon />}
        type="submit"
      >
        Envoyer
      </Button>
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        severity="error"
      />
      <Snackbar
        open={Boolean(successMessage)}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={successMessage}
        severity="success"
      />
    </form>
  );
};

export default CheckoutForm;
