// ! *** IMPORTS & PACKAGES ***
import React, { useState, useEffect } from "react";
import Alert, { Flip } from "../utils/Alert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import configDevis from "../utils/configDevis.js"; // ? variables d'environnement
import emailjs from "emailjs-com";

// ! --- MUI PACKAGES ---
// import SendIcon from "@mui/icons-material/Send";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";

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

  // ! *** VARIABLES ***
  const { serviceId, templateId, userId } = configDevis;

  // ! *** FONCTIONS ***
  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // ? Met à jour l'état avec la nouvelle valeur du champ
    setFormData({ ...formData, [name]: value });
  };

  // ? Soumission du formulaire
  const handleSubmitFormEvjf = (event) => {
    event.preventDefault();
    console.log(userId, serviceId, templateId);
    const { brideName, participantCount, contactMail, specialRequests } =
      formData;

    const templateParams = {
      to_name: "soniadancer0@gmail.com",
      from_name: brideName,
      reply_to: contactMail,
      message: `
          Nom de la mariée : ${brideName}\n
          Nombre de participant : ${participantCount}\n
          Email de contact : ${contactMail}\n
          Demande particulière :\n\n${specialRequests}\n
        `,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log(response);
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
        // Masquer le formulaire après l'envoi réussi
        setIsFormVisible(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email");
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

              {/* <li>
                <span>
                  <u>Sensualité</u>
                </span>
                ↪ Impressionnez le futur marié en dévoilant votre nouvelle
                confiance en vous et votre élégance, acquises lors de ce cours.
              </li> */}

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
              <button onClick={handleToggleForm}>DEVIS</button>
            )}
          </div>
        </div>

        {/**** Formulaire ****/}
        {isFormVisible && (
          <div className="evjf__form-container">
            <h3>Demande de devis</h3>
            <p>- SHOOTING PHOTO POSSIBLE- </p>
            <form method="POST" onSubmit={handleSubmitFormEvjf}>
              <label>
                Nom complet de la mariée :
                <input
                  type="text"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  onClick={() => handleInputClick("brideName")}
                  className={isBrideNameClicked ? "clicked" : ""}
                  placeholder="Prénom & Nom"
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
                  required
                />
              </label>

              <label>
                Mail de contact :
                <input
                  type="email"
                  name="contactMail"
                  value={formData.contactMail}
                  onChange={handleInputChange}
                  onClick={() => handleInputClick("contactMail")}
                  className={iscontactMailClicked ? "clicked" : ""}
                  placeholder="exemple@gmail.com"
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
                      : "Une demande particulère ? (Shooting photo,...)"
                  }
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </label>
              <button type="submit" style={{ marginTop: "1rem" }}>
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
