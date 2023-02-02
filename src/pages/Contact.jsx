import React, { useState, useEffect } from "react";

// --- MUI PACKAGES ---
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

// ------ Pattern for the email input ------
const EMAIL_REGEX = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// ----- react-toastify Components  -----
import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
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
    // e.preventDefault()
    setName(useState(""));
    setFirstName(useState(""));
    setMail(useState(""));
    setMessage(useState(""));
  };

  // >> RENDERING
  return (
    <div name="Contact" className="contact">
      <h1>Contact</h1>

      <div className="contact__googleMap">
        {/* GOOGLE MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.413576912788!2d-1.4768835842164345!3d43.49370717074691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5140f2d5acba4d%3A0x5c6af516d129ded9!2sMairie%20de%20Bayonne!5e0!3m2!1sfr!2sfr!4v1673988938710!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* NOM */}
        <form
          // method="POST"
          // action="https://getform.io/f/efe185bd-ad41-4c2c-90f2-8afb415dcc17"
          // target="_blank"
          className="contact__form"
          onSubmit={handleSubmit}
        >
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
            rows={4}
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
      </div>
    </div>
  );
};

export default Contact;
