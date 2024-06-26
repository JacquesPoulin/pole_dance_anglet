// ! *** IMPORTS & PACKAGES ***
import React, { useState } from "react";
import emailjs from "emailjs-com";
import configContact from "../utils/configContact.js"; // ? variables d'environnement
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useMediaQuery } from "react-responsive";

// ! --- MUI PACKAGES ---
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// ! --- FONTAWESOME PACKAGES ---
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ! *** VARIABLES DES MEDIA QUERIES ***
// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1px)" });

// ! ----- react-toastify Components  -----
import "react-toastify/dist/ReactToastify.css";
// import {
//   Bounce,
//   Flip,
//   Slide,
//   toast,
//   ToastContainer,
//   Zoom,
// } from "react-toastify";

const Contact = () => {
  // ! *** STATES ***
  const [showPopup, setShowPopup] = useState(false);

  const [formDataContact, setFormDataContact] = useState({
    // État pour stocker les données du formulaire
    name: "",
    firstname: "",
    mail: "",
    message: "",
  });

  // ! *** VARIABLES ***
  const { serviceId, templateId, userId } = configContact;

  // ! *** FONCTIONS ***
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // ? Met à jour l'état avec la nouvelle valeur du champ
    setFormDataContact({ ...formDataContact, [name]: value });
  };

  // ? Soumission du formulaire
  const handleSubmitFormContact = (event) => {
    event.preventDefault();
    console.log(userId, serviceId, templateId);
    const { name, firstname, mail, message } = formDataContact;

    const templateParams = {
      to_name: "soniadancer0@gmail.com",
      from_name: `${firstname} ${name}`,
      reply_to: mail,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log(response);
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email");
      });

    setFormDataContact({
      name: "",
      firstname: "",
      mail: "",
      message: "",
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Pour déclencher l'animation une seule fois
    threshold: 0.1, // Le pourcentage de visibilité pour déclencher l'animation
  });
  // ! *** RENDERING ***
  return (
    <div name="Contact" className="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact</h1>

        <p>
          N'hésitez pas à me contacter pour de plus amples informations (tarifs,
          lieu, horaires...)
        </p>
      </motion.div>

      <motion.div
        className="contact__form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <form
          method="POST"
          className="contact__form"
          onSubmit={handleSubmitFormContact}
        >
          {/* NOM */}
          <TextField
            required
            id="nom"
            label="Nom"
            value={formDataContact.name}
            name="name"
            type="text"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleInputChange}
          />

          {/* PRENOM */}
          <TextField
            id="prénom"
            label="Prénom"
            value={formDataContact.firstname}
            name="firstname"
            type="text"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleInputChange}
          />

          {/* MAIL */}
          <TextField
            required
            id="email"
            label="Email"
            value={formDataContact.mail}
            name="mail"
            type="email"
            placeholder="exemple@gmail.com"
            autoComplete="off"
            variant="standard"
            color="secondary"
            onChange={handleInputChange}
          />

          {/* MESSAGE */}
          <TextField
            required
            id="message"
            label="Message"
            value={formDataContact.message}
            name="message"
            type="text"
            autoComplete="off"
            multiline
            rows={5}
            variant="standard"
            color="secondary"
            onChange={handleInputChange}
          />

          {/* BOUTON ENVOYER */}
          <Button
            id="button"
            color="secondary"
            variant="none"
            endIcon={<SendIcon />}
            type="submit"
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
      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Contact;
