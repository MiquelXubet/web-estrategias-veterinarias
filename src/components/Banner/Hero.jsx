import React from "react";
import "./Hero.css";
import heroImage from "../../Images/banner.png"; // Usa tu imagen aquí
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Marketing veterinario" />
      </div>
      <div className="hero-content">
        <h1>Transforma tu clínica veterinaria</h1>
        <p>Marketing digital especializado para el sector veterinario.</p>
        <Link to="/contacto">
          <button className="hero-btn">Solicita una demo</button>
        </Link>
        {/* <p>
          Aumenta tu visibilidad, atrae más clientes y mejora la comunicación
          con tus pacientes.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
