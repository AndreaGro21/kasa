import React from "react";
import { Link } from 'react-router-dom';

function ImageForGallery({ actualArray }) {
  return (
    <Link
      to={`/logements/${actualArray.id}`}
      key={actualArray.id}
      className="main-container_details"
    >
      <img
        src={actualArray.cover}
        alt={actualArray.title}
        className="image-card"
      />
      <p>{actualArray.title}</p>
    </Link>
  );
}

export default ImageForGallery;
