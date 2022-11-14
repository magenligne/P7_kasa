import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

import "../styles/ligneDuHaut.scss";
import "../styles/footer.scss";
import "../styles/erreur.scss";

export default function Erreur() {
  return (
    <div className="erreur">
      <div className="ligneDuHaut">
        <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />
        <Nav />
      </div>
      <div className="texte">
        <h1> 404 </h1>
        <p>
          Oups! La page que <br />
          vous demandez n'existe pas.
        </p>
      </div>

      <NavLink className="lien" exact to="/">
        Retourner sur la page d'acceuil
      </NavLink>

      <Footer />
    </div>
  );
}
