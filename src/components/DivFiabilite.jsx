import React from "react";

function DivFiabilite(props) {
  console.log("etatFiab:" + props.etatFiab);

  if (!props.etatFiab) {
    return null;
  } else {
    return (
      <div className="divDeroulante_masquable">
        {/* <p> */}
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
        {/* </p> */}
      </div>
    );
  }
}
export default DivFiabilite;
