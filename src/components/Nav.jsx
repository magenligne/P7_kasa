import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/">
        Acceuil
      </NavLink>
      <NavLink exact to="/Apropos">
        A propos
      </NavLink>
    </div>
  );
};

export default Nav;
