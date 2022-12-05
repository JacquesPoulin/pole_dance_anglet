import React, { useState } from "react";

// ----- Packages  -----
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  // ! ***** RENDERING ******
  return (
    <div className="homepage">
      <video id="background-video" autoPlay loop muted playsInline>
        <source
          src="../../public/videos/VID-20221124-WA0029.mp4"
          type="video/mp4"
        />
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
    </div>
  );
};

export default Homepage;
