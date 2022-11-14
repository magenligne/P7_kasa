import "./App.css";
// import Footer from "./components/Footer";
import Acceuil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur";
// import Card from "./components/Card";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route
          // path="/Logement/id=:idLogement"
          path="/Logement"
          element={<Logement />}
        />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* <Apropos/> */}
//     </div>
//   );
// }

// export default App;
