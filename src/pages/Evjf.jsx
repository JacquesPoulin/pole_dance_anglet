import React from "react";
import { Link } from "react-scroll";

const Evjf = () => {
  return (
    <div name="EVJF" className="evjf">
      <div id="opacity-effet">
        <h1>EVJF</h1>
        <div className="evjf__text-container">
          <div className="evjf__text-container__presentation">
            {/**** PRESENTATION ****/}
            <p className="evjf__text-container__presentation__leftText">
              Parce que nous voulons toutes raconter de belles histoires, notre
              désir le plus cher est d’offrir à notre meilleure amie
              l’Enterrement de Vie de Jeune Fille de ses rêves. Trouver
              l’activité idyllique pour rendre l’enterrement de vie de jeune
              fille plus qu’unique n’est pas une mince affaire. Dans cette
              optique, qui de mieux que de convaincre la future mariée de mettre
              son charme et sa souplesse à profit de sa journée en se laissant
              séduire par un cours de pôle dance !
            </p>
            <br />
            <p className="evjf__text-container__presentation__rightText">
              Choisissez une <span> activité très en vogue pour un EVJF </span>
              sous les signes de : la <u>sensualité</u> et des{" "}
              <u>rires garantis</u>.
              <br />
              Les principaux objectifs sont :
            </p>
            <br />
            <ul>
              <li>
                <span>Originalité</span> ↪️ même si de plus en plus demandé,
                beaucoup n'en ont jamais fait.
              </li>

              <li>
                <span>Sportivité</span> ↪️ on bouge, on élimine ... votre corps
                appréciera.
              </li>

              <li>
                <span>Sensualité</span> ↪️ le futur marié sera ravi de découvrir
                ce que sa dulciné a appris.
              </li>

              <li>
                <span>Fun</span> ↪️ le plus important seront les bons moments
                conviviaux passés entre vous !
              </li>
            </ul>
          </div>
          {/**** DEVIS ****/}
          <div className="evjf__button-container">
            <button class="pulse">Devis immédiat</button>
          </div>
        </div>

        {/****ARROW DOWN ****/}
        <Link
          activeClass="active"
          to="Pole Dance"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          <div className="evjf__arrow-container">
            <img
              src="../../public/images/png/kisspng-arrow-computer-icons-logo-white-down-arrow-png-5ab1bd5cde13f0.7986932615215977889096.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Evjf;
