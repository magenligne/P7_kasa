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
          render={() => (
            <p className="pLogement">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          )}
        />
        <DivMasquable
          title="Respect"
          render={() => (
            <p className="pLogement">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          )}
        />
        <DivMasquable
          title="Service"
          render={() => (
            <p className="pLogement">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          )}
        />
        <DivMasquable
          title="Sécurité"
          render={() => (
            <p className="pLogement">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default Apropos;
