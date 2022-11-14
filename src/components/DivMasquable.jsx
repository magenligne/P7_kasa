import React from "react";

function DivMasquable(props) {
  console.log(props.etat);
  //   console.log(props.description);
  if (!props.etat) {
    return null;
  } else {
    return <div className="divDeroulante_masquable">{props.description}</div>;
  }
}
export default DivMasquable;
