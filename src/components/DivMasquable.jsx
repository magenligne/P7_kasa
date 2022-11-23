import React, { useState } from "react";

function DivMasquable(props) {
  const [showDivMasquable, setShowDivMasquable] = useState(false);
  return (
    <div className="divDeroulante">
      <div
        className="divDeroulante_bandeau"
        onClick={() =>
          setShowDivMasquable((showDivMasquable) => !showDivMasquable)
        }
      >
        <p>{props.title}</p>

        <div className="divDeroulante_bandeau_down">
          {showDivMasquable ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      <div
        className={`divDeroulante_masquable ${
          showDivMasquable
            ? "divDeroulante_masquable--visible"
            : "divDeroulante_masquable--hidden"
        }`}
      >
        {props.render()}
      </div>
    </div>
  );
}

export default DivMasquable;
