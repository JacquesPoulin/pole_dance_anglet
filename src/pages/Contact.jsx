// ! *** IMPORTS & PACKAGES ***
import React, { useState } from "react";

// ! --- MUI PACKAGES ---
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// ! ------ Pattern for the email input ------
const EMAIL_REGEX = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// ! ----- react-toastify Components  -----
import "react-toastify/dist/ReactToastify.css";
import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";

const Contact = () => {
  // ! *** STATES ***
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // ! *** FONCTIONS ***
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Afficher la pop-up après l'envoi réussi
    setShowPopup(true);

    // ? Réinitialiser les champs après l'envoi
    setName("");
    setFirstName("");
    setMail("");
    setMessage("");
  };

  // ! >> RENDERING
  return (
    <div name="Contact" className="contact">
      <h1>Contact</h1>

      <div className="contact__googleMap">
        {/* GOOGLE MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.6809506112354!2d-1.4916217235531457!3d43.48812827111045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5140642e919c97%3A0x6377a6d7fdaf08a1!2s44%20Rue%20de%20Masure%2C%2064100%20Bayonne!5e0!3m2!1sfr!2sfr!4v1707588270971!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form
          method="POST"
          action="https://getform.io/f/efe185bd-ad41-4c2c-90f2-8afb415dcc17"
          target="_blank"
          className="contact__form"
          onSubmit={handleSubmit}
        >
          {/* NOM */}
          <TextField
            required
            id="nom"
            label="Nom"
            value={name}
            name="nom"
            type="text"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleName}
          />

          {/* PRENOM */}
          <TextField
            required
            id="prénom"
            label="Prénom"
            value={firstname}
            name="prénom"
            type="text"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleFirstName}
            onSubmit={handleSubmit}
          />

          {/* MAIL */}
          <TextField
            required
            id="email"
            label="Email"
            value={mail}
            name="mail"
            type="email"
            placeholder="exemple@gmail.com"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleMail}
            onSubmit={handleSubmit}
          />

          {/* MESSAGE */}
          <TextField
            required
            id="message"
            label="Message"
            value={message}
            name="message"
            type="text"
            autoComplete="off"
            multiline
            rows={5}
            variant="standard"
            color="secondary"
            onChange={handleMessage}
            onSubmit={handleSubmit}
          />

          {/* BOUTON ENVOYER */}
          <Button
            id="button"
            color="secondary"
            variant="none"
            endIcon={<SendIcon />}
            type="submit"
            onSubmit={handleSubmit}
          >
            Envoyer
          </Button>
        </form>
        {/* Pop-up de confirmation */}
        <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
          <DialogTitle>Message envoyé !</DialogTitle>
          <DialogContent>
            Votre message est bien reçu et je vous en suis très reconnaissante.
            Je prendrai le temps de vous répondre dès que possible.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setShowPopup(false)}
              color="primary"
              autoFocus
            >
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Contact;
