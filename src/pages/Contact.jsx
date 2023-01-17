import React, { useState, useEffect } from "react";

// --- MUI PACKAGES ---
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Contact = () => {
  // ! STATES
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("Message");

  // -- NOM --
  useEffect(() => {
    console.log("Nom : ", name);
  }, [name]);

  // -- PRENOM --
  useEffect(() => {
    console.log("Prénom: ", firstname);
  }, [firstname]);

  // -- MAIL --
  useEffect(() => {
    console.log("Mail: ", mail);
  }, [mail]);

  // -- MESSAGE --
  useEffect(() => {
    console.log("Message: ", message);
  }, [message]);

  // >> RENDERING
  return (
    <div name="Contact" className="contact">
      <h1>Contact</h1>
      <div className="contact__googleMap">
        {/* GOOGLE MAP */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.413576912788!2d-1.4768835842164345!3d43.49370717074691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5140f2d5acba4d%3A0x5c6af516d129ded9!2sMairie%20de%20Bayonne!5e0!3m2!1sfr!2sfr!4v1673988938710!5m2!1sfr!2sfr"
          width="1000"
          height="650"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* NOM */}
        <div className="contact__form">
          <TextField
            required
            id="name"
            placeholder="Nom"
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            color="secondary"
          />

          {/* PRENOM */}
          <TextField
            required
            id="firstname"
            placeholder="Prénom"
            onChange={(e) => setFirstname(e.target.value)}
            variant="standard"
            color="secondary"
          />

          {/* MAIL */}
          <TextField
            required
            id="name"
            placeholder="Mail"
            onChange={(e) => setMail(e.target.value)}
            variant="standard"
            color="secondary"
          />

          {/* MESSAGE */}
          <TextField
            required
            id="multiline"
            placeholder="Message"
            multiline
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            variant="standard"
            color="secondary"
          />

          {/* BOUTON ENVOYER */}
          <Button
            id="button"
            color="secondary"
            variant="none"
            endIcon={<SendIcon />}
          >
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
