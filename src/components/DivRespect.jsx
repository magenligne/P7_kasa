import React from "react";

function DivRespect(props) {
  // console.log("etatFiab:" + props.etatFiab);

  if (!props.etatRespect) {
    return null;
  } else {
    return (
      <div className="divDeroulante_masquable">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
    );
  }
}
export default DivRespect;
