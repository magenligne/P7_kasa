import React from "react";
import { useState } from "react";

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
  console.log(tabImages);
  console.log("objet1:", tabImages[1]);
  console.log("Keyobjet1:", tabImages[1].key);

  return (
    <div className="gallery">
      <div
        className="boutonNext"
        onClick={() => {
          if (currentIndex === tabImages.length - 1) {
            return setCurrentIndex(0);
          }
          return setCurrentIndex(currentIndex + 1);
        }}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div
        className="boutonPrev"
        onClick={() => {
          if (currentIndex === 0) {
            return setCurrentIndex(tabImages.length - 1);
          }
          return setCurrentIndex(currentIndex - 1);
        }}
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>

      <img
        src={props.images[currentIndex]}
        alt="cover"
        className="gallery_image"
      />
    </div>
  );
}
export default Gallery;
