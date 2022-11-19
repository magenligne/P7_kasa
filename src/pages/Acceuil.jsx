// import React from 'react'
import data from "../data.json";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Footer from "../components/Footer";

import LOGO from "../assets/LOGO.png";
import COTE from "../assets/COTE.png";

import "../styles/acceuil.scss";
import "../styles/ligneDuHaut.scss";
import "../styles/cote.scss";
import "../styles/card.scss";
import "../styles/footer.scss";
import React from "react";

// console.log(data);
// const IDtCards = data.map((eachcard) => eachcard.id);
// console.log("liste id:", IDtCards);

// const Acceuil = () => {
class Acceuil extends React.Component {
  state = { data };
  render() {
    return (
      <div className="acceuil">
        <div className="ligneDuHaut">
          <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />

          <Nav />
        </div>
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
        <Footer />
      </div>
    );
  }
}

export default Acceuil;
