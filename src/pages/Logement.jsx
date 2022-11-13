import React from "react";
import data from "../data.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LOGO from "../assets/LOGO.png";
import Tags from "../components/Tags";
import RateAndProprio from "../components/RateAndProprio";

import "../styles/logement.scss";

import "../styles/ligneDuHaut.scss";

import "../styles/footer.scss";
// import DivDeroulante from "../components/DivDeroulante";

export default function Logement() {
  const ceLogement = data.find((card) => card.id === "46d188c5");
  console.log(ceLogement);
  return (
    <div className="logement">
      <div className="ligneDuHaut">
        <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />

        <Nav />
      </div>

      <Gallery images={ceLogement.pictures} altImages={ceLogement.title} />

      <div className="titres">
        <p className="titres_grosTitre">{ceLogement.title}</p>
        <p className="titres_petitTitre">{ceLogement.location}</p>
      </div>
      {/* <div className="tags">Tags</div> */}
      <Tags tags={ceLogement.tags} />
      <RateAndProprio etoiles={ceLogement.rating} hote={ceLogement.host} />
      {/* <DivDeroulante
        description={ceLogement.description}
        equipement={ceLogement.equipments}
      /> */}

      <div className="divDeroulante">
        <div className="divDeroulante_bandeau">
          <p>Description</p>
          <i class="fa-solid fa-chevron-up"></i>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="divDeroulante_masquable">{ceLogement.description}</div>
      </div>

      <div className="divDeroulante">
        <div className="divDeroulante_bandeau">
          <p>Equipements</p>
          <div className="divDeroulante_bandeau_up">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
          <div className="divDeroulante_bandeau_down">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="divDeroulante_masquable">{ceLogement.equipments}</div>
      </div>

      <Footer />
    </div>
  );
}
