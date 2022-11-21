import React from "react";
import AproposMobile from "../assets/AproposMobile.png";
import AproposDesktop from "../assets/AproposDesktop.png";

// import { useState } from "react";
import DivMasquable from "../components/DivMasquable";

// import DivFiabilite from "../components/DivFiabilite";
// import DivRespect from "../components/DivRespect";
// import DivService from "../components/DivService";
// import DivSecu from "../components/DivSecu";
import "../styles/aPropos.scss";

const Apropos = () => {
  return (
    <div className="aPropos">
      <div className="imageApropos">
        <img
          src={AproposMobile}
          alt="cote"
          className="imageApropos_imgMobile"
        />
        <img
          src={AproposDesktop}
          alt="cote"
          className="imageApropos_imgDesktop"
        />
      </div>

      <div className="ContainerDivApropos">
        <DivMasquable
          title="Fiabilité"
          render={() =>
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <DivMasquable
          title="Respect"
          render={() =>
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <DivMasquable
          title="Service"
          render={() =>
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <DivMasquable
          title="Sécurité"
          render={() =>
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
};

export default Apropos;
