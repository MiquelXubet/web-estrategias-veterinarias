import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonStyles.css";

const InfoButton = ({ planId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/planes/${planId}`);
  };

  return (
    <button className="info-btn" onClick={handleClick}>
      Más información
    </button>
  );
};

export default InfoButton;
