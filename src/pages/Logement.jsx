import React from "react";
import data from "../data.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LOGO from "../assets/LOGO.png";
import Tags from "../components/Tags";
import RateAndProprio from "../components/RateAndProprio";
import DivMasquable from "../components/DivMasquable";
import DivMasquableEquip from "../components/DivMasquableEquip";

import "../styles/logement.scss";

import "../styles/ligneDuHaut.scss";

import "../styles/footer.scss";
// import DivDeroulante from "../components/DivDeroulante";

class Logement extends React.Component {
  // state ici si besoin
  constructor(props) {
    super(props);
    this.state = [
      { showDivMasquable: false },
      { showDivMasquableEquip: false },
    ];
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleToggleClickEquip = this.handleToggleClickEquip.bind(this);
  }
  handleToggleClick() {
    this.setState((state) => ({
      showDivMasquable: !state.showDivMasquable,
    }));
  }
  handleToggleClickEquip() {
    this.setState((state) => ({
      showDivMasquableEquip: !state.showDivMasquableEquip,
    }));
  }

  //********************* */ Traitement de l'url pour récupérer l'id du logement cliqué en page d'acceuil
  //---------------------------------------------------RECUPERATION DE L'ID DANS L'URL-------------------------------------------------------------------
  // window.addEventListener("load", () => {
  //   // alert("Page chargée"); //test chargement ok
  //   console.log(window.location); //test:affiche l'url de la page

  //   //Nous allons créer un object de type URLSearchParams qui permet de récupérer des paramètres d'URL et lui passer en argument la chaine à droite du ?:
  //   let searchId = new URLSearchParams(window.location.search); //URL.search correspond à la chaine de caractère de l'url à droite du ?

  //   if (searchId.has("id")) {
  //     let idLogement = searchId.get("id");
  //     //La méthode get("txt") appliquée à un objet de type URLSearchParam renvoie la valeur à droite du = dans une chaine de type txt=valeur.
  //     console.log(idLogement); //ok

  //**************************************************************************************** */
  render() {
    const ceLogement = data.find((card) => card.id === "d60ca600");
    console.log(ceLogement);
    return (
      <div className="logement">
        <div className="ligneDuHaut">
          <img src={LOGO} alt="Logo Kasa" className="ligneDuHaut_logo" />

          <Nav />
        </div>

        <Gallery images={ceLogement.pictures} altImages={ceLogement.title} />
        <div className="TitresTagsRateProprio">
          <div className="TitresTagsRateProprio_TitresTags">
            <div className="titres">
              <p className="titres_grosTitre">{ceLogement.title}</p>
              <p className="titres_petitTitre">{ceLogement.location}</p>
            </div>
            {/* <div className="tags">Tags</div> */}
            <Tags tags={ceLogement.tags} />
          </div>
          <RateAndProprio etoiles={ceLogement.rating} hote={ceLogement.host} />
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Description</p>

            <div
              className="divDeroulante_bandeau_down"
              onClick={this.handleToggleClick}
            >
              {this.state.showDivMasquable ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          <DivMasquable
            etat={this.state.showDivMasquable}
            description={ceLogement.description}
          />
          {/* <div className="divDeroulante_masquable">
            {ceLogement.description}
          </div> */}
        </div>

        <div className="divDeroulante">
          <div className="divDeroulante_bandeau">
            <p>Equipements</p>

            <div
              className="divDeroulante_bandeau_down"
              onClick={this.handleToggleClickEquip}
            >
              {this.state.showDivMasquableEquip ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </div>
          </div>
          {/* <div className="divDeroulante_masquable">{ceLogement.equipments}</div> */}
          <DivMasquableEquip
            etatEquip={this.state.showDivMasquableEquip}
            equipements={ceLogement.equipments}
          />
        </div>

        <Footer />
      </div>
    );
  }
}
//   });
// }
export default Logement;
