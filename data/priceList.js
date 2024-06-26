// >> LISTES DES TARIFS

const styleYoga = {
  backgroundImage: "url(/images/danse/IMG-20221124-WA0001.jpg)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  borderRadius: "10px",
  backgroundPosition: "center",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  whiteFont: false,
};

const stylePole = {
  backgroundImage: "url(/images/bar/IMG-20221124-WA0010.jpg)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 0px )",
  borderRadius: "10px",
  backgroundPosition: "center",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  whiteFont: false,
};

const styleEVJF = {
  backgroundImage: "url(/images/bar/IMG-20230102-WA0034.jpg)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  whiteFont: true,
  backdropFilter: "blur( 0px )",
  borderRadius: "10px",
  backgroundPosition: "center",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const stylePilates = {
  backgroundImage: "url(/images/danse/IMG-20221124-WA0008.jpg)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 0px )",
  borderRadius: "10px",
  backgroundPosition: "center",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  whiteFont: true,
};

const priceList = [
  // ! YOGA
  {
    id: 1,

    title: "YOGA",

    // ** image + alt **
    imgSource: styleYoga,
    alt: "Liste des tarifs",

    //  ** Carte pour 10 cours **
    description_cours: "Cours privé",
    tarif_cours: "Me contacter",

    //  ** Carte de 10 Cours / personne **
    description_collectif: "",
    tarif_collectif: "",

    //  ** stage **
    description_stage: "",
    tarif_stage: "",

    // ** lien pour en savoir plus **
    info: "ME CONTACTER",
    info2: "Zen & Harmonie",
    // lienPaiement: "https://book.stripe.com/fZeaGN9yC2tZfPa144",
  },
  {
    id: 2,

    title: "POLE DANCE",

    // ** image + alt **
    imgSource: stylePole,
    alt: "Liste des tarifs",

    //  ** Cours particuliers **
    description_cours: "Cours particuliers",
    tarif_cours: "40€/personne",

    //  ** Cours pour 2 personnes **
    description_collectif: "Cours pour 2 personnes",
    tarif_collectif: "25€/personne",

    //  ** stage **
    description_stage: "Stage de pole dance",
    tarif_stage: "25€/personne",

    // ** trimestre **
    description_trimestre: "Abonnement",
    tarif_trimestre: "225€/trimestre (14 cours)",

    // ** lien pour en savoir plus **
    info: "ME CONTACTER",
    info2: "Grâce & souplesse",
  },
  {
    id: 3,

    title: "EVJF",

    // ** image + alt **
    imgSource: styleEVJF,
    alt: "Liste des tarifs",

    //  ** Le moment **
    description_cours: "Tout inclus",
    tarif_cours: "25€/personne",

    //  ** Cours pour 2 personnes **
    description_collectif: "OFFERT pour la mariée --->",
    tarif_collectif_special: "...Dès 6 personnes",

    //  ** stage **
    description_stage: "Stage de pole dance",
    tarif_stage: "25€/personne",

    // ** lien pour en savoir plus **
    info: "ME CONTACTER",
    info2: "Moments inoubliables",
  },
  {
    id: 4,

    title: "PILATES",

    // ** image + alt **
    imgSource: stylePilates,
    alt: "Liste des tarifs",

    //  ** Carte pour 10 cours **
    description_cours: "Cours privé",
    tarif_cours: "Me contacter",

    //  ** Carte de 10 Cours / personne **
    description_collectif: "",
    tarif_collectif: "",

    //  ** stage **
    description_stage: "",
    tarif_stage: "",

    // ** lien pour en savoir plus **
    info: "ME CONTACTER",
    info2: "Renforcement musculaire",
  },
];

export default priceList;
