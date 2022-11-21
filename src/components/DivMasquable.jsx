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
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i class="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      {showDivMasquable ? (
        <div className="divDeroulante_masquable">{props.render()}</div>
      ) : null}
    </div>
  );
}

export default DivMasquable;
