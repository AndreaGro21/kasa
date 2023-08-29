import React from "react";
import ImageForGallery from "./ImagesForGallery";

function Gallery({ Data }) {
  const arrayData = Data;
  return (
    <div className="gallery-container">
      {arrayData.map((image) => (
        <ImageForGallery key={image.id} actualArray={image} />
      ))}
    </div>
  );
}

export default Gallery;