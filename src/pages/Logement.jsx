import React from "react";
import data from "../data.json";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import RateAndProprio from "../components/RateAndProprio";
import DivMasquable from "../components/DivMasquable";

import "../styles/logement.scss";
import "../styles/tags.scss";
import "../styles/divDeroulante.scss";

import { useParams } from "react-router-dom";
import Erreur from "./Erreur";

export default function Logement() {
  const idLogement = useParams().id;
  let ceLogement = data.find((card) => card.id === idLogement);
  if (!ceLogement) {
    return <Erreur />;
  }
  const listpEquip = ceLogement.equipments.map((equip, index) => (
    <p key={index}>{equip}</p>
  ));

  return (
    <div className="logement">
      <Gallery images={ceLogement.pictures} altImages={ceLogement.title} />
      <div className="TitresTagsRateProprio">
        <div className="TitresTagsRateProprio_TitresTags">
          <div className="titres">
            <p className="titres_grosTitre">{ceLogement.title}</p>
            <p className="titres_petitTitre">{ceLogement.location}</p>
          </div>
          <Tags tags={ceLogement.tags} />
        </div>
        <RateAndProprio etoiles={ceLogement.rating} hote={ceLogement.host} />
      </div>
      <div className="DeroulanteContainer">
        <DivMasquable
          title="Description"
          render={() => <div>{ceLogement.description}</div>}
        />

        <DivMasquable
          title="Equipement"
          render={() => <div>{listpEquip}</div>}
        />
      </div>
    </div>
  );
}
