import React from "react";

import bioList from "../../data/bioList";

const Parcours = () => {
  return (
    <div className="parcours">
      <div className="parcours__text-container">
        <div className="parcours__text-container__text">
          <ul>
            {bioList?.map(({ id, description }) => (
              <li key={id}>{description && description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Parcours;
