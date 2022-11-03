// import React from 'react'

import Nav from "../components/Nav";
import LOGO from '../assets/LOGO.png';
import '../styles/ligneDuHaut.scss';

const Acceuil = () => {
  return (
    <div className="acceuil">
      <div className="ligneDuHaut">
        
        <img src={LOGO} alt='Logo Kasa' className='logo' />
        

        <Nav />
      </div>
    </div>
  );
};

export default Acceuil;
