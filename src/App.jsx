import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import Contacto from "./components/Pages/Contacto";
import Servicios from "./components/Pages/Servicios";
import Nosotros from "./components/Pages/Nosotros";
import "./App.css"; // Import your main CSS file

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Servicios" element={<Servicios />} />
            <Route path="Nosotros" element={<Nosotros />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
