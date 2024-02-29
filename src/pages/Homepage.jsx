import React, { useState } from "react";

// ----- Packages  -----
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Homepage = () => {
  // ! ***** RENDERING ******
  return (
    <div name="Accueil" className="homepage">
      <video id="background-video" autoPlay loop muted playsInline>
        <source src="/videos/sonia_pole_landing.mp4" type="video/mp4" />
      </video>

      <div className="homepage__presentation">
        <h2>Sonia KERKENI</h2>
        <br />
        <h5>
          <Typewriter
            words={[
              "PROFESSEUR DE POLE DANCE",
              "PROFESSEUR DE PILATES",
              "PROFESSEUR DE YOGA",
              "Enterrement de vie de jeune fille",
              "COURS PARTICULIERS",
            ]}
            loop={0}
            typeSpeed={50}
            deleteSpeed={5}
            delaySpeed={2000}
          />
        </h5>
      </div>

      {/* ***ARROW DOWN *** */}
      <Link
        activeClass="active"
        to="Biographie"
        spy
        smooth
        isDynamic
        duration={1000}
      >
        <div className="homepage__arrow-container">
          <img
            src="/images/png/kisspng-arrow-computer-icons-logo-white-down-arrow-png-5ab1bd5cde13f0.7986932615215977889096.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
