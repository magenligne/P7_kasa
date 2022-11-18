import React from "react";
import Footer from "../components/Footer";
import LOGO from "../assets/LOGO.png";
import Nav from "../components/Nav";
import AproposMobile from "../assets/AproposMobile.png";
// import AproposDesktop from "../assets/AproposDesktop.png";

import { useState } from "react";

import DivFiabilite from "../components/DivFiabilite";
import DivRespect from "../components/DivRespect";
import DivService from "../components/DivService";
import DivSecu from "../components/DivSecu";
import "../styles/aPropos.scss";
import "../styles/ligneDuHaut.scss";

import "../styles/footer.scss";

const Apropos = () => {
  const [showDivFiab, setShowDivFiab] = useState(false);
  const [showDivRespect, setShowDivRespect] = useState(false);
  const [showDivService, setShowDivService] = useState(false);
  const [showDivSecu, setShowDivSecu] = useState(false);

  return (
    <div className="aPropos">
      <div className="ligneDuHaut">
        <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />
        <Nav />
      </div>

      <div className="imageApropos">
        <img
          src={AproposMobile}
          alt="cote"
          className="imageApropos_imgMobile"
        />
      </div>

      <div className="ContainerDivApropos">
        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Fiabilite</p>

            <div
              className="divDeroulante_bandeau_down"
              onClick={() => setShowDivFiab((showDivFiab) => !showDivFiab)}
            >
              {/* {setShowDivMasquable(!showDivMasquable)} */}
              {showDivFiab ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivFiabilite etatFiab={showDivFiab} />
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Respect</p>
            <div
              className="divDeroulante_bandeau_down"
              onClick={() =>
                setShowDivRespect((showDivRespect) => !showDivRespect)
              }
            >
              {showDivRespect ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivRespect etatRespect={showDivRespect} />
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Service</p>
            <div
              className="divDeroulante_bandeau_down"
              onClick={() =>
                setShowDivService((showDivService) => !showDivService)
              }
            >
              {showDivService ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivService etatService={showDivService} />
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Sécurité</p>
            <div
              className="divDeroulante_bandeau_down"
              onClick={() => setShowDivSecu((showDivSecu) => !showDivSecu)}
            >
              {showDivSecu ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivSecu etatSecu={showDivSecu} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apropos;
