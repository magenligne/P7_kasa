import React from "react";

function DivMasquableEquip(props) {
  console.log(props.etatEquip);
  //   console.log(props.description);
  if (!props.etatEquip) {
    return null;
  } else {
    return <div className="divDeroulante_masquable">{props.equipements}</div>;
  }
}
export default DivMasquableEquip;
