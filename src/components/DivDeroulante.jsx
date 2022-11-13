import React from "react";

function DivDeroulante(props) {
  console.log(props.description);
  console.log(props.equipements);

  return (
    <div className="divDeroulante">
      <div className="divDeroulante_bandeau">
        <p>Description</p>
        <i class="fa-solid fa-chevron-up"></i>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div className="divDeroulante_masquable">{props.description}</div>
    </div>
  );
}

export default DivDeroulante;
