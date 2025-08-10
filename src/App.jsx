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
import BlogPost from "./components/Pages/BlogPost";
import Privacidad from "./components/Pages/PrivacyPolicy";
import LegalNotice from "./components/Pages/LegalNotice";
import CookiesPolicy from "./components/Pages/CookiesPolicy";
import ScrollToTop from "./components/ScrollToTop";
import CookiesConsent from "./components/CookiesConsent";
import ServicioDetalle from "./components/Pages/ServicioDetalle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Servicios" element={<Servicios />} />
            <Route path="/servicios/:id" element={<ServicioDetalle />} />
            <Route path="Nosotros" element={<Nosotros />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Planes" element={<Planes />} />
            <Route path="/planes/:id" element={<PlanDetail />} />
            <Route path="/comprar/:id" element={<Checkout />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/politica-privacidad" element={<Privacidad />} />
            <Route path="aviso-legal" element={<LegalNotice />} />
            <Route path="cookies" element={<CookiesPolicy />} />
          </Route>
        </Routes>
        <CookiesConsent />
      </BrowserRouter>
    </div>
  );
}

export default App;
