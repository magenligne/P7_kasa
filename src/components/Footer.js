import React from "react";
import LOGO from "../assets/LOGOfooter.png";

function Footer() {
  return (
    <div className="footer">
      <img src={LOGO} alt="Logo Kasa" className="footer_logo" />
      <p className="footer_p">2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
