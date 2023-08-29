import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import Error from "../pages/Error";

function getAccommodationById(data, id) {
  return data.find(item => item.id === id);
}
function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { logementId } = useParams();
  const selectedData = getAccommodationById(data, logementId);
  const currentImage = selectedData?.pictures[currentIndex];
  const slideLeft = () => {
    setCurrentIndex(currentIndex === 0 ? selectedData.pictures.length - 1 : currentIndex - 1);
  };
  const slideRight = () => {
    setCurrentIndex(currentIndex === selectedData.pictures.length - 1 ? 0 : currentIndex + 1);
  };

  if (!selectedData) {
    return <Error />
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
