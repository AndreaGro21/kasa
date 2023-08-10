import React from "react";
import ImageForGallery from "./ImagesForGallery";

function Gallery({ Data }) {
  const arrayData = Data;
  console.log(arrayData)
  return (
    <div className="main-container">
      {arrayData.map((image) => (
        <ImageForGallery key={image.id} actualArray={image} />
      ))}
    </div>
  );
}

export default Gallery;