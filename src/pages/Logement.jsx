import React, { useState } from "react";
import data from "../data.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LOGO from "../assets/LOGO.png";
import Tags from "../components/Tags";
import RateAndProprio from "../components/RateAndProprio";
import DivMasquable from "../components/DivMasquable";
import DivMasquableEquip from "../components/DivMasquableEquip";

import "../styles/logement.scss";

import "../styles/ligneDuHaut.scss";

import "../styles/footer.scss";
import { useParams } from "react-router-dom";
// import DivDeroulante from "../components/DivDeroulante";

export default function Logement() {
  const [showDivMasquable, setShowDivMasquable] = useState(false);
  const [showDivEquip, setShowDivEquip] = useState(false);

  const idLogement = useParams().id;

  const ceLogement = data.find((card) => card.id === idLogement);
  // console.log(showDivMasquable);

  return (
    <div className="logement">
      <div className="ligneDuHaut">
        <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />

        <Nav />
      </div>

      <Gallery images={ceLogement.pictures} altImages={ceLogement.title} />
      <div className="TitresTagsRateProprio">
        <div className="TitresTagsRateProprio_TitresTags">
          <div className="titres">
            <p className="titres_grosTitre">{ceLogement.title}</p>
            <p className="titres_petitTitre">{ceLogement.location}</p>
          </div>
          {/* <div className="tags">Tags</div> */}
          <Tags tags={ceLogement.tags} />
        </div>
        <RateAndProprio etoiles={ceLogement.rating} hote={ceLogement.host} />
      </div>
      <div className="DeroulanteContainer">
        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Description</p>

            <div
              className="divDeroulante_bandeau_down"
              onClick={() =>
                setShowDivMasquable((showDivMasquable) => !showDivMasquable)
              }
            >
              {/* {setShowDivMasquable(!showDivMasquable)} */}
              {showDivMasquable ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivMasquable
            etat={showDivMasquable}
            description={ceLogement.description}
          />
          {/* <div className="divDeroulante_masquable">
            {ceLogement.description}
          </div> */}
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Equipements</p>

            <div
              className="divDeroulante_bandeau_down"
              onClick={() => setShowDivEquip((showDivEquip) => !showDivEquip)}
              // {setShowDivEquip(!showDivEquip)}
            >
              {showDivEquip ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          {/* <div className="divDeroulante_masquable">{ceLogement.equipments}</div> */}
          <DivMasquableEquip
            etatEquip={showDivEquip}
            equipements={ceLogement.equipments}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
