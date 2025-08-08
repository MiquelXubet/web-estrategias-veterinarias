import React, { useState } from "react";
import planesData from "../../data/planesData";
import "./Planes.css";
import InfoButton from "../Buttons/InfoButton";
import BuyButton from "../Buttons/BuyButton";

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="planes-section">
      <h1 className="planes-title">Nuestros Planes</h1>
      <div className="planes-container">
        {planesData.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${
              selectedPlan === plan.id ? "destacado" : ""
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h2>{plan.nombre}</h2>
            <p className="price">{plan.precio}</p>
            <ul>
              {plan.beneficios.map((beneficio, idx) => (
                <li key={idx}>{beneficio}</li>
              ))}
            </ul>
            <div className="plan-buttons">
              <InfoButton planId={plan.id} />
              <BuyButton planId={plan.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planes;
