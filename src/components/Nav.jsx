import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <NavLink classname= "lien" 
      style={({isActive})=>{return{textDecoration:isActive?"":"none"}}} 
      exact to="/">
        Acceuil
      </NavLink>
      <NavLink classname= "lien" 
            style={({isActive})=>{return{textDecoration:isActive?"":"none"}}} 

      exact to="/Apropos">
        A propos
      </NavLink>
    </div>
  );
};

export default Nav;
