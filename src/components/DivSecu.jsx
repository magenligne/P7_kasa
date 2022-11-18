import React from "react";

function DivSecu(props) {
  // console.log("etatFiab:" + props.etatFiab);

  if (!props.etatSecu) {
    return null;
  } else {
    return (
      <div className="divDeroulante_masquable">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.{" "}
        </p>
      </div>
    );
  }
}
export default DivSecu;
