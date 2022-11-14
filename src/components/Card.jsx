import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  // const detailsLogement = this.props.detailsLogement;
  // console.log(props.idLogement);

  return (
    <div>
      {/* ligne de dessous fonctione mais en attente de correction du path dans App.js: */}
      {/* <Link className="carteLogement" to={`/Logement/id=${props.idLogement}`}> */}
      <Link className="carteLogement" to="/Logement">
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
