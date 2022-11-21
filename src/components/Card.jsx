import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div>
      <Link className="carteLogement" to={`/Logement/${props.idLogement}`}>
        <p className="carteLogement_titre">{props.titreLogement}</p>
        <img
          src={props.coverLogement}
          alt="cover"
          className="carteLogement_image"
        />
      </Link>
    </div>
  );
}
export default Card;
