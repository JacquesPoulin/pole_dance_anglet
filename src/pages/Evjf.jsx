// ! *** IMPORTS & PACKAGES ***
import React, { useState, useEffect } from "react";
import Alert, { Flip } from "../utils/Alert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

// ! --- MUI PACKAGES ---
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const Evjf = () => {
  // ! *** STATES ***
  const [isFormVisible, setIsFormVisible] = useState(false); // État pour contrôler la visibilité du formulaire
  const [isInputFocused, setIsInputFocused] = useState(false); // État pour vérifier si un input a le focus
  const [isBrideNameClicked, setIsBrideNameClicked] = useState(false); // État pour indiquer si le champ brideName a été cliqué
  const [isParticipantCountClicked, setIsParticipantCountClicked] =
    useState(false); // État pour indiquer si le champ participantCount a été cliqué
  const [iscontactMailClicked, setIscontactMailClicked] = useState(false); // État pour indiquer si le champ participantCount a été cliqué
  const [formData, setFormData] = useState({
    // État pour stocker les données du formulaire
    brideName: "",
    participantCount: "",
    contactMail: "",
    specialRequests: "",
  });

  // ! *** FONCTIONS ***
  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // ? Vérifie si le champ est "participantCount" et si la valeur est négative
    if (name === "participantCount" && parseInt(value) < 2) {
      // ? Si c'est le cas, ignore la mise à jour de l'état
      return;
    }
    // ? Met à jour l'état avec la nouvelle valeur du champ
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success("Demande de devis envoyée !", {
      position: "top-center",
      className: "toast-message",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Flip,
    });
    
    setFormData({
      brideName: "",
      participantCount: "",
      contactMail: "",
      specialRequests: "",
    });
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputClick = (inputName) => {
    if (inputName === "brideName") {
      setIsBrideNameClicked(true);
      setIsParticipantCountClicked(false);
      setIscontactMailClicked(false);
    } else if (inputName === "participantCount") {
      setIsParticipantCountClicked(true);
      setIsBrideNameClicked(false);
      setIscontactMailClicked(false);
    } else if (inputName === "contactMail") {
      setIsParticipantCountClicked(false);
      setIsBrideNameClicked(false);
      setIscontactMailClicked(true);
    }
  };

  const handleOutsideClick = (event) => {
    // ? Vérifie si l'élément cliqué n'est pas un input (ou un de ses enfants), si c'est le cas on ajuste les states à false
    if (!event.target.closest("input")) {
      setIsBrideNameClicked(false);
      setIsParticipantCountClicked(false);
      setIscontactMailClicked(false);
    }
  };

  // ! *** HOOKS ***
  // ? >>> Permet de gérer les clics en dehors du formulaire <<<
  useEffect(() => {
    if (isFormVisible) {
      // ? Si le formulaire est visible, ajoute un écouteur d'événements pour les clics en dehors du formulaire
      document.addEventListener("click", handleOutsideClick);
    } else {
      // ? Si le formulaire n'est pas visible, supprime l'écouteur d'événements pour les clics en dehors du formulaire
      document.removeEventListener("click", handleOutsideClick);
    }
    // ? Nettoie l'écouteur d'événements lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isFormVisible]);

  // ! *** RENDERING ***
  return (
    <div name="EVJF" className="evjf">
      <div id="opacity-effet">
        <h1>EVJF</h1>
        <div className="evjf__text-container">
          <div className="evjf__text-container__presentation">
            {/**** PRESENTATION ****/}
            <p className="evjf__text-container__presentation__txtBloc1">
              Parce que nous aspirons toutes à des moments inoubliables, votre
              mission est de réaliser le rêve d'EVJF parfait pour votre
              meilleure amie. Trouver l'activité idéale pour rendre cet
              événement unique n'est pas chose aisée...
              <br />
              C'est pourquoi je vous propose de plonger dans une expérience à la
              fois sensuelle, amusante et pleine de surprises : un cours de pole
              dance !
            </p>
            <br />
            <p className="evjf__text-container__presentation__txtBloc2">
              Choisissez une <span> activité tendance pour votre EVJF :</span>
              <br />
              <br />
              <span className="highlight">Sensualité</span>&
              <span className="highlight">Rires garantis</span>
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              Pourquoi choisir cette activité ?
            </p>
            <ul>
              <li>
                <span>
                  <u>Originalité</u>
                </span>
                ↪ Offrez à la mariée et à vos amies une expérience unique dont
                elles se souviendront longtemps !
              </li>

              <li>
                <span>
                  <u>Sportivité</u>
                </span>
                ↪ Sculptez votre corps tout en vous amusant : chaque mouvement
                de pole dance tonifie et renforce vos muscles en profondeur.
              </li>

              <li>
                <span>
                  <u>Sensualité</u>
                </span>
                ↪ Impressionnez le futur marié en dévoilant votre nouvelle
                confiance en vous et votre élégance, acquises lors de ce cours.
              </li>

              <li>
                <span>
                  <u>Plaisir</u>
                </span>
                ↪ Créez des souvenirs inoubliables et partagez des moments de
                complicité et de joie avec vos amies lors de cette activité
                ludique et originale !
              </li>
            </ul>
          </div>

          {/**** BOUTON DEVIS ****/}
          <div className="evjf__button-container">
            {isFormVisible ? (
              <button onClick={handleToggleForm}>Masquer le devis</button>
            ) : (
              <button onClick={handleToggleForm}>Devis immédiat</button>
            )}
          </div>
        </div>

        {/**** Formulaire ****/}
        {isFormVisible && (
          <div className="evjf__form-container">
            <h3>Demande de devis</h3>
            <form
              method="POST"
              action="https://getform.io/f/efe185bd-ad41-4c2c-90f2-8afb415dcc17"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <label>
                Nom complet de la mariée :
                <input
                  type="text"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  onClick={() => handleInputClick("brideName")}
                  className={isBrideNameClicked ? "clicked" : ""}
                  placeholder="Prénom et Nom"
                  required
                />
              </label>

              <label>
                Nombre de participants :
                <input
                  type="number"
                  name="participantCount"
                  value={formData.participantCount}
                  onChange={handleInputChange}
                  onClick={() => handleInputClick("participantCount")}
                  className={isParticipantCountClicked ? "clicked" : ""}
                  placeholder="Insérez un nombre"
                  min="2"
                  required
                />
              </label>

              <label>
                Mail de contact :
                <input
                  type="mail"
                  name="contactMail"
                  value={formData.contactMail}
                  onChange={handleInputChange}
                  onClick={() => handleInputClick("contactMail")}
                  className={iscontactMailClicked ? "clicked" : ""}
                  placeholder="Insérez votre mail"
                  required
                />
              </label>

              <label>
                Message :
                <textarea
                  rows={10}
                  name="specialRequests"
                  value={formData.specialRequests}
                  placeholder={
                    isInputFocused
                      ? ""
                      : "Que souhaitez vous ?"
                  }
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </label>
              <button type="submit" style={{ marginTop: "0" }}>
                Envoyer
              </button>
            </form>
          </div>
        )}
      </div>
      {/**** Message Toastify ****/}
      <Alert />
    </div>
  );
};

export default Evjf;
