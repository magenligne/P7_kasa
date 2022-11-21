import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/erreur.scss";

export default function Erreur() {
  return (
    <div className="erreur">
      <div className="texte">
        <h1> 404 </h1>
        <div className="texte_p">
          <p>Oups! La page que </p>
          <p>vous demandez n'existe pas.</p>
        </div>
      </div>

      <NavLink className="lien" to="/">
        Retourner sur la page d'acceuil
      </NavLink>
    </div>
  );
}
