import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

function getAccommodationById(Data, id) {
  return Data.find(item => item.id === id);
}
function Slider({ Data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { logementId } = useParams();
  const fetchedData = Data;
  const selectedData = getAccommodationById(fetchedData, logementId);
  const currentImage = selectedData?.pictures[currentIndex];
  const slideLeft = () => {
    setCurrentIndex(currentIndex === 0 ? selectedData.pictures.length - 1 : currentIndex - 1);
  };
  const slideRight = () => {
    setCurrentIndex(currentIndex === selectedData.pictures.length - 1 ? 0 : currentIndex + 1);
  };

  if (!selectedData) {
    return <div>No data found for the provided logementId</div>;
  }
  return (
    <div className="sliderImg">
      <img
        src={currentImage}
        alt={currentImage.title}
        className="imgAccommodation"
      />
      {selectedData.pictures.length > 1 && (
        <div className="arrows">
          <img
            onClick={slideLeft}
            src={arrowLeft}
            alt="Previous"
          />

          <img
            onClick={slideRight}
            src={arrowRight}
            alt="Next"
          />
          <p className="numberImg">
            {currentIndex + 1}/{selectedData.pictures.length}
          </p>
        </div>

      )}
    </div>
  );
}
export default Slider;
