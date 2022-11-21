import React from "react";
import { useState } from "react";
import "../styles/gallerie.scss";
function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="gallery">
      {props.images.length > 1 ? (
        <div className="btnContainer">
          <div
            className="btnContainer_btnPrev"
            onClick={() => {
              if (currentIndex === 0) {
                return setCurrentIndex(props.images.length - 1);
              }
              return setCurrentIndex(currentIndex - 1);
            }}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="btnContainer_btnNext"
            onClick={() => {
              if (currentIndex === props.images.length - 1) {
                return setCurrentIndex(0);
              }
              return setCurrentIndex(currentIndex + 1);
            }}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      ) : (
        <div className="btnContainer"></div>
      )}
      <img
        src={props.images[currentIndex]}
        alt="cover"
        className="gallery_image"
      />
      {props.images.length > 1 ? (
        <div className="affichIndex">
          {currentIndex + 1}/{props.images.length}
        </div>
      ) : (
        <div className="affichIndex"> </div>
      )}
    </div>
  );
}
export default Gallery;
