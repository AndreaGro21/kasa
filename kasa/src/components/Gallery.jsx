import React from "react";
import Data from "./Data";

function Gallery() {
  const fetchedData = Data();

  return (
    <div className="main-container">

      {fetchedData.map((arrayData) => (
        <div key={`${arrayData.id}`} className="main-container_details" >
          <img key={`${arrayData}`} src={arrayData.cover} alt={`${arrayData.title}`} className="image-card" />
          <p key={`${arrayData.title}`}>{arrayData.title}</p>
        </div>
      )
      )
      }
    </div>
  );
}

export default Gallery;

/* RECUPERARE L'ARRAY E CREARE UN MODO PER STOCCARE I VALORI DA INSEIRE POI NELLE CARTE? */
/* O INSERIRE E CREARE LE CARTE DIRETTAMENTE */