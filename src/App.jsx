import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import Contacto from "./components/Pages/Contacto";
import Servicios from "./components/Pages/Servicios";
import Nosotros from "./components/Pages/Nosotros";
import Blog from "./components/Pages/Blog";
import "./App.css";
import Planes from "./components/Pages/Planes";
import PlanDetail from "./components/Pages/PlanDetail";
import Checkout from "./components/Pages/Checkout";

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
            <Route path="Blog" element={<Blog />} />
            <Route path="Planes" element={<Planes />} />
            <Route path="/planes/:id" element={<PlanDetail />} />
            <Route path="/comprar/:id" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
