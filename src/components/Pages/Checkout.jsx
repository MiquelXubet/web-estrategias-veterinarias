// src/components/Checkout.jsx
import React from "react";
import { useParams } from "react-router-dom";
import planesData from "../../data/planesData";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const plan = planesData.find((p) => p.id === parseInt(id));

  if (!plan) return <div>Plan no encontrado</div>;

  return (
    <section className="checkout">
      <h2>Compra del Plan: {plan.name}</h2>
      <p>
        Estás a punto de comprar el plan por <strong>{plan.price} €</strong>.
      </p>
      <button
        className="confirm-button"
        onClick={() => alert("Simulando pago...")}
      >
        Confirmar pago
      </button>
    </section>
  );
};

export default Checkout;
