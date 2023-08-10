import React from "react";
import Data from "./Data";
import { Link } from 'react-router-dom'

function Gallery() {
  const fetchedData = Data();
  return (
    <div className="main-container">
      {fetchedData.map((arrayData) => (
        <Link
          to={`/logements/${arrayData.id}`}
          key={`${arrayData.id}`}
          className="main-container_details"
        >
          <img
            key={`${arrayData}`}
            src={arrayData.cover}
            alt={`${arrayData.title}`}
            className="image-card" />
          <p
            key={`${arrayData.title}`}>
            {arrayData.title}
          </p>
        </Link>
      )
      )
      }
    </div>
  );
}

export default Gallery;
