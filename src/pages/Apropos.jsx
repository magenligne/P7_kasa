import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Apropos = () => {
  return (
    <div>
      <Logo />

      <Nav/>
      <h1>A propos de Kasa</h1>
      <p>N°1 des locations immobilières en France</p>
      <Footer/>
    </div>
  );
};

export default Apropos;
