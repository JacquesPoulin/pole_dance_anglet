import React from "react";

// --- COMPONENTS ---
import Homepage from "./pages/Homepage";
import Biographie from "./pages/Biographie";
import Evjf from "./pages/Evjf";
import PoleDance from "./pages/PoleDance";
import Private from "./components/Private";
import Stage from "./components/Stage";
import Pilates from "./pages/Pilates";
import Yoga from "./pages/Yoga";
import Tarifs from "./pages/Tarifs";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";

// ! --- ROUTES CONFIG ---
const routesConfig = [
  {
    // >> Route : HOMEPAGE
    path: "*",
    element: <Homepage />,
  },

  {
    // >> Route : HOMEPAGE
    path: "/",
    element: <Homepage />,
  },

  {
    // >> Route : HOMEPAGE
    path: "/accueil",
    element: <Homepage />,
  },

  {
    // >> Route : BIOGRAPHIE
    path: "/biographie",
    element: <Biographie />,
  },

  {
    // >> Route : EVJF
    path: "/evjf",
    element: <Evjf />,
  },

  {
    // >> Routes : POLE DANCE
    path: "/poledance",
    element: <PoleDance />,
    //  * Sous-Route : POLE DANCE *
    children: [
      {
        path: "coursparticuliers",
        element: <Private />,
      },
      {
        path: "stages",
        element: <Stage />,
      },
    ],
  },

  {
    // >> Route : PILATES
    path: "/pilates",
    element: <Pilates />,
  },

  {
    // >> Route : YOGA
    path: "/yoga",
    element: <Yoga />,
  },

  {
    // >> Route : TARIFS
    path: "/tarifs",
    element: <Tarifs />,
  },

  {
    // >> Route : GALERIE
    path: "/galerie",
    element: <Galerie />,
  },

  {
    // >> Route : CONTACT
    path: "/contact",
    element: <Contact />,
  },
];

export default routesConfig;
