import React from "react";
import { useState, useEffect } from "react";

function Card() {


  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="main-container">
      
        {data.map((arrayData) => (
          <div key={`${arrayData.id}`} className="main-container_details"> 
            <img key={`${arrayData}`} src={arrayData.cover} alt={`${arrayData.title}`} className="image-card"/>
            <p key={`${arrayData.title}`}>{arrayData.title}</p>
          </div>
        )
        )
        }
    </div>
  );
}

export default Card

/* RECUPERARE L'ARRAY E CREARE UN MODO PER STOCCARE I VALORI DA INSEIRE POI NELLE CARTE? */
/* O INSERIRE E CREARE LE CARTE DIRETTAMENTE */