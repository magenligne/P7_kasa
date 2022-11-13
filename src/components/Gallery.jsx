import React from "react";

// import data from "../data.json";

function Gallery(props) {
  const lengthTabImages = props.images.length;
  let index = 0;
  return (
    <div className="gallery">
      <div className="boutons">
        <a href="#" className="prevNext">
          <i class="fa-solid fa-chevron-left"></i>
        </a>
        <a href="#" className="prevNext">
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      </div>
      <img src={props.images[index]} alt="cover" className="gallery_image" />
      {/* {props.images.map((eachimg) => (
        <img src={eachimg} alt={props.altImages} className="gallery_image" />
      ))} */}
    </div>
  );
}
export default Gallery;
