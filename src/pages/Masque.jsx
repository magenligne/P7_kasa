import "../styles/ligneDuHaut.scss";
import "../styles/masque.scss";
import "../styles/footer.scss";
import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LOGO from "../assets/LOGO.png";
export default class Masque extends React.Component {
  render() {
    return (
      <div>
        <div className="masque">
          <div className="ligneDuHaut">
            <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />

            <Nav />
          </div>

          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}
