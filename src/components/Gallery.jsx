import React from "react";
import { useState } from "react";
import "../styles/gallerie.scss";

// import data from "../data.json";

function Gallery(props) {
  // const lengthTabImages = props.images.length;
  const [currentIndex, setCurrentIndex] = useState(0); // console.log("props.images:", props.images);

  const tabImages = props.images.map((eachimg, keyImg) => (
    <img
      src={eachimg}
      alt={props.altImages}
      key={keyImg}
      className="gallery_image"
    />
  ));
  console.log(props.images);
  console.log("Keyobjet1:", tabImages[1].key);

  return (
    <div className="gallery">
      <div className="btnContainer">
        <div
          className="btnContainer_btnPrev"
          onClick={() => {
            if (currentIndex === 0) {
              return setCurrentIndex(tabImages.length - 1);
            }
            return setCurrentIndex(currentIndex - 1);
          }}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="btnContainer_btnNext"
          onClick={() => {
            if (currentIndex === tabImages.length - 1) {
              return setCurrentIndex(0);
            }
            return setCurrentIndex(currentIndex + 1);
          }}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <img
        src={props.images[currentIndex]}
        alt="cover"
        className="gallery_image"
      />
      <div className="affichIndex">
        {currentIndex + 1}/{tabImages.length}
      </div>
    </div>
  );
}
export default Gallery;
