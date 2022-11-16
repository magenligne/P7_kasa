import React from "react";

function DivMasquableEquip(props) {
  console.log("etatEquip:" + props.etatEquip);
  console.log("props.equipements:" + props.equipements);
  const equipements = props.equipements;
  console.log("props.equipements.length:" + equipements.length);
  const equipementsColonne = [];
  for (let i = 0; i < equipements.length; i++) {
    equipementsColonne.push(<p>{equipements[i]}</p>);
  }
  console.log(equipementsColonne);

  if (!props.etatEquip) {
    return null;
  } else {
    return <div className="divDeroulante_masquable">{equipementsColonne}</div>;
  }
}
export default DivMasquableEquip;
