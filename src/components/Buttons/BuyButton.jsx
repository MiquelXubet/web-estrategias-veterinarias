import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonStyles.css";

const BuyButton = ({ planId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comprar/${planId}`);
  };

  return (
    <button className="buy-btn" onClick={handleClick}>
      Comprar plan
    </button>
  );
};

export default BuyButton;
