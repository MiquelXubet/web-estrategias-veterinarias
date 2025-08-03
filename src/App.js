import React from "react";
import "./App.css";
import Topheader from "./components/Top-header/Header";
import Mainheader from "./components/Main-Header/Main-Header";
import Hero from "./components/Banner/Hero";
import Servicios from "./components/Servicios/Servicios";
import ComoAyudamos from "./components/Ayuda/ComoAyudamos";
import Testimonios from "./components/Testimonios/Testimonios";
import Formulario from "./components/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Mainheader />
      <Hero />
      <ComoAyudamos />
      <Servicios />
      <Testimonios />
      <Formulario />
    </div>
  );
}

export default App;
