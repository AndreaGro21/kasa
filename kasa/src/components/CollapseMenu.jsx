import React, { useState } from "react";

function CollapseMenu() {
  const nameCollaps = [
    {   
      id:0,
      name: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {   
      id:1,
      name:"Respect",
      text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id:2,
      name:  "Service",
      text: "Chez Kasa, le service est au cœur de notre métier. Nous nous assurons que chaque voyageur passe un moment d'exception, du début à la fin de leur séjour."
    },
    {
      id:3,
      name:"Sécurité",
      text:`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."`
    }
  ];

  const [isOpenArr, setIsOpenArr] = useState(new Array(nameCollaps.length).fill(false));
  const [showText, setShowText] = useState(new Array(nameCollaps.length).fill(0));

  const handleToggle = (index) => {
    setIsOpenArr((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setShowText((prevState) => {
      const newState = [...prevState];
      newState[index] = newState[index] === 0 ? 1 : 0; 
      return newState;
    });
  };

  const handleAnimationEnd = (index) => {
    setShowText((prevState) => {
      const newState = [...prevState];
      newState[index] = 0;
      return newState;
    });
  };

  return (
    <ul className="apropos-list">
      {nameCollaps.map((collapse, index) => (
        <li key={collapse.id}>
          <button
            className="collapse-handler"
            onClick={() => handleToggle(index)}
          >
            {collapse.name}
            <i className={`fa-solid fa-chevron-${isOpenArr[index] ? 'down' : 'up'}`}></i>
          </button>
          <p
            className={`collapse-text ${showText[index] ? 'visible' : ''}`}
            onAnimationEnd={() => handleAnimationEnd(index)}
          >
            {collapse.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default CollapseMenu;