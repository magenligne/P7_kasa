import React from "react";
import { NavLink } from "react-router-dom";
function Card(props) {
  // const detailsLogement = this.props.detailsLogement;
  console.log(props.idLogement);

  return (
    <NavLink className="carteLogement">
      <p className="carteLogement_titre">{props.titreLogement}</p>

      <img
        src={props.coverLogement}
        alt="cover"
        className="carteLogement_image"
      />
    </NavLink>
  );
}

export default Card;
