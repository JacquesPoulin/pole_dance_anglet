// --- REACT ---
import React from "react";

// ----- react-icons Components  -----
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const footer = () => {
  return (
    <div className="footer">
      {/* ligne de démarquation */}
      <div className="footer__line"></div>

      {/* Réseaux sociaux & Contacts*/}
      <div className="footer__contacts">
        <a
          href="mailto: soniadancer0@gmail.com"
          target="_blank"
          title="Envoyer un mail"
        >
          soniadancer0@gmail.com
        </a>
        <a href="https://fr-fr.facebook.com/poledanceanglet" target="_blank">
          <FaFacebook id="socials" title="Voir mon Facebook" />
        </a>
        <a
          href="https://www.instagram.com/soniakerdanse/?hl=fr"
          target="_blank"
        >
          <FaInstagram id="socials" title="Voir mon Insta" />
        </a>
        <a href="https://www.youtube.com/@soniakdancer355" target="_blank">
          <TfiYoutube id="socials" title="Ma chaine youTube" />
        </a>
        <a
          href="https://wa.me/33663467186?text=Bonjour"
          target="_blank"
          title="Envoyer un WhatsApp"
        >
          06 63 46 71 86
        </a>
      </div>
      <p>Copyright © {new Date().getFullYear()} PoleDanceAnglet</p>
    </div>
  );
};

export default footer;
