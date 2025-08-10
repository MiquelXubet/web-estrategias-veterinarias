import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CookiesConsent.css";

export default function CookiesConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const decision = localStorage.getItem("cookiesConsent");
    if (!decision) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesConsent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookies-overlay">
      <div className="cookies-modal">
        <p className="cookies-text">
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
          <Link to="/cookies" className="cookies-link">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="cookies-buttons">
          <button onClick={handleAccept} className="cookies-button accept">
            Aceptar
          </button>
          <button onClick={handleReject} className="cookies-button reject">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
