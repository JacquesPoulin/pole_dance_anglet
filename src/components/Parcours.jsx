import React from "react";

import bioList from "../../data/bioList";

const Parcours = () => {
  return (
    <div className="parcours">
      <div className="parcours__text-containers">
        <button className="original-button" role="button">
          PARCOURS
        </button>
        <ul>
          {bioList?.map(({ id, description }) => (
            <li key={id}>{description && description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Parcours;
