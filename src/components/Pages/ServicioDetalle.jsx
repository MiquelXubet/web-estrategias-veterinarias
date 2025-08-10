import React from "react";
import { useParams } from "react-router-dom";
import serviciosData from "../../data/serviciosData";
import "./ServicioDetalle.css";

const ServicioDetalle = () => {
  const { id } = useParams();

  const servicio = serviciosData.find((s) => s.id === id);

  if (!servicio) {
    return <p>Servicio no encontrado.</p>;
  }

  return (
    <main className="servicio-detalle">
      <h1 className="servicio-titulo">{servicio.titulo}</h1>

      <div className="servicio-imagen">
        <img src={servicio.imagen} alt={servicio.titulo} />
      </div>

      <p className="servicio-descripcion-corta">{servicio.descripcionCorta}</p>

      <section className="servicio-seccion">
        <h2>Descripción</h2>
        <div
          className="servicio-contenido"
          dangerouslySetInnerHTML={{ __html: servicio.contenido }}
        />
      </section>

      <section className="servicio-seccion">
        <h2>Beneficios</h2>
        <ul>
          {servicio.beneficios.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="servicio-seccion">
        <h2>¿Qué incluye?</h2>
        <ul>
          {servicio.incluye.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="servicio-seccion">
        <h2>Pasos</h2>
        <ol>
          {servicio.pasos.map((paso, i) => (
            <li key={i}>{paso}</li>
          ))}
        </ol>
      </section>

      <section className="servicio-seccion">
        <h2>Duración</h2>
        <p>{servicio.duracion}</p>
      </section>

      <section className="servicio-seccion">
        <h2>Resultados</h2>
        <ul>
          {servicio.resultados.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </section>

      <section className="servicio-seccion">
        <h2>Preguntas frecuentes</h2>
        {servicio.faq.map((f, i) => (
          <div key={i} className="faq-item">
            <strong>Q: {f.pregunta}</strong>
            <p>A: {f.respuesta}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServicioDetalle;
