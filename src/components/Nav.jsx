import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <NavLink
        className="lien"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "" : "none" };
        }}
        to="/"
      >
        Acceuil
      </NavLink>
      <NavLink
        className="lien"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "" : "none" };
        }}
        to="/Apropos"
      >
        A propos
      </NavLink>
    </div>
  );
};

export default Nav;
