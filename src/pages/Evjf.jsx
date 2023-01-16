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
            <p className="evjf__text-container__presentation__txtBloc1">
              Parce que nous voulons toutes raconter de belles histoires, notre
              désir le plus cher est d’offrir à notre meilleure amie
              l’Enterrement de Vie de Jeune Fille de ses rêves. Trouver
              l’activité idyllique pour rendre l’enterrement de vie de jeune
              fille plus qu’unique n’est pas une mince affaire...
              <br />
              Dans cette optique, qui de mieux que de convaincre la future
              mariée de mettre son charme et sa souplesse à profit de sa journée
              en se laissant séduire par un cours de pôle dance !
            </p>
            <br />
            <p className="evjf__text-container__presentation__txtBloc2">
              Choisissez une <span> activité très en vogue pour un EVJF </span>
              sous 2 signes : <br />
              <span className="highlight">sensualité</span>&
              <span className="highlight">rires garantis</span>
              <br />
              <br />
              Pourquoi choisir cette activité ?
            </p>
            <br />
            <ul>
              <li>
                <span>
                  <u>Originalité</u>
                </span>
                ↪ Même s'il s'agit d'une activité de plus en plus demandée,
                beaucoup n'en ont jamais fait !
              </li>

              <li>
                <span>
                  <u>Sportivité</u>
                </span>
                ↪ On bouge, on élimine ... votre corps appréciera.
              </li>

              <li>
                <span>
                  <u>Sensualité</u>
                </span>
                ↪ Pensez au futur marié qui sera ravi de découvrir ce que sa
                dulciné a appris.
              </li>

              <li>
                <span>
                  <u>Fun</u>
                </span>
                ↪ Et bien sûr, le plus important seront les bons moments
                conviviaux passés entre vous !
              </li>
            </ul>
          </div>
          {/**** DEVIS ****/}
          <div className="evjf__button-container">
            <button class="pulse">Devis immédiat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evjf;
