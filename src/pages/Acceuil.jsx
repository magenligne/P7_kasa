import data from "../data.json";
import Card from "../components/Card";

import COTE from "../assets/COTE.png";

import "../styles/acceuil.scss";
import "../styles/cote.scss";
import "../styles/card.scss";
import React from "react";

class Acceuil extends React.Component {
  render() {
    return (
      <div className="acceuil">
        <div className="cote">
          <img src={COTE} alt="cote" className="cote_image" />
          <p className="cote_texte"> Chez vous, partout et ailleurs</p>
        </div>

        <div className="espaceCartes">
          {/* creation des cards à partir du json */}
          {data.map((eachcard) => (
            <Card
              idLogement={eachcard.id}
              titreLogement={eachcard.title}
              coverLogement={eachcard.cover}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Acceuil;
