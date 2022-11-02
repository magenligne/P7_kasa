import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/">
        Acceuil
      </NavLink>
      <a href="/">Acceuil2</a>
      <NavLink exact to="/Apropos">
        A propos
      </NavLink>
    </div>
  );
};

export default Nav;
