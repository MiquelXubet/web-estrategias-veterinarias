import React from "react";
import { useParams } from "react-router-dom";
import planesData from "../../data/planesData";
import "./PlanDetail.css";
import BuyButton from "../Buttons/BuyButton";

const PlanDetail = () => {
  const { id } = useParams();
  const plan = planesData.find((p) => p.id === parseInt(id));

  if (!plan) return <div>Plan no encontrado</div>;

  return (
    <section className="plan-detail">
      <h2>{plan.nombre}</h2>
      <p className="description">{plan.descripcionCorta}</p>
      <p>{plan.descripcionDetallada}</p>
      <ul>
        {plan.ServiciosIncluidos.map((servicio, idx) => (
          <li key={idx}>{servicio}.</li>
        ))}
      </ul>
      <p className="price">Precio: {plan.precio} </p>
      <BuyButton className="boton" />
    </section>
  );
};

export default PlanDetail;
