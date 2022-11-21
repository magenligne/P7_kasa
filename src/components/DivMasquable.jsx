import React, { useState } from "react";

function DivMasquable(props) {
  const [showDivMasquable, setShowDivMasquable] = useState(false);
  //   console.log(props.description);

  return (
    <div className="divDeroulante">
      <div className="divDeroulante_bandeau">
        <p>{props.title}</p>

        <div
          className="divDeroulante_bandeau_down"
          onClick={() =>
            setShowDivMasquable((showDivMasquable) => !showDivMasquable)
          }
        >
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
