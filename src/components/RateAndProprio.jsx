import React from "react";

function RateAndProprio(props) {
  console.log(props.etoiles);
  console.log(props.hote);
  const wordsHote = props.hote.name.split(" ");
  const firstWord = wordsHote[0];
  const lastWord = wordsHote[1];

  const etoilesGrises = 5 - props.etoiles;
  const etoiles = [];
  for (let i = 0; i < props.etoiles; i++) {
    etoiles.push(
      <div className="etoileOrange">
        <i className="etoileOrange fa-solid fa-star"></i>
      </div>
    );
  }
  for (let i = 0; i < etoilesGrises; i++) {
    etoiles.push(
      <div className="etoileGrise">
        <i className="etoileGrise fa-solid fa-star"></i>
      </div>
    );
  }
  return (
    <div className="TitresTagsRateProprio_rateAndProprio">
      <div className="TitresTagsRateProprio_rateAndProprio_rate">
        {etoiles}
        {/* <i className="etoile fa-solid fa-star"></i>

        <i className="etoile fa-solid fa-star"></i>
        <i className="etoile fa-solid fa-star"></i>
        <i className="etoile fa-solid fa-star"></i>
        <i className="etoile fa-solid fa-star"></i> */}
      </div>
      <div className="TitresTagsRateProprio_rateAndProprio_hote">
        <div className="TitresTagsRateProprio_rateAndProprio_hote_name">
          <p>{firstWord}</p>
          <p>{lastWord}</p>
        </div>
        <div className="TitresTagsRateProprio_rateAndProprio_hote_imgHote">
          <img src={props.hote.picture} alt={props.hote.name} />
        </div>
      </div>
    </div>
  );
}

export default RateAndProprio;
