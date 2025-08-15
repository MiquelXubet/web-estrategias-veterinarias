import React, { useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import planesData from "../../data/planesData";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const plan = planesData.find((p) => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    direccion: "",
    ciudad: "",
    cp: "",
    provincia: "",
    tarjeta: "",
    caducidad: "",
    cvv: "",
  });

  if (!plan) return <div>Plan no encontrado</div>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      email: formData.email,
      direccion: formData.direccion,
      ciudad: formData.ciudad,
      cp: formData.cp,
      provincia: formData.provincia,
      tarjeta: formData.tarjeta,
      caducidad: formData.caducidad,
      cvv: formData.cvv,
      pack: plan.nombre,
      precio: plan.precio,
    };

    emailjs
      .send(
        "service_isz2jvd", // Service ID
        "template_786yprp", // Template ID
        templateParams, // Datos a enviar
        "6Lg-f7Z8vNBqT6PyP" // Public Key
      )
      .then(() => {
        alert("Compra realizada con éxito");
        // Resetear el formulario
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          direccion: "",
          ciudad: "",
          cp: "",
          provincia: "",
          tarjeta: "",
          caducidad: "",
          cvv: "",
        });
      })
      .catch(() => {
        alert("Error al realizar la compra");
      });
  };

  return (
    <section className="checkout-section">
      <h1 className="checkout-title">Finalizar compra</h1>

      <div className="checkout-summary">
        <h2>Tu pedido</h2>
        <p>
          <strong>Pack seleccionado:</strong> {plan.nombre}
        </p>
        <p>
          <strong>Precio:</strong> {plan.precio} €
        </p>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Datos personales</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cp">Código Postal</label>
            <input
              type="text"
              id="cp"
              value={formData.cp}
              onChange={handleChange}
              required
              pattern="\d{5}"
              title="El código postal debe tener 5 dígitos"
            />
          </div>

          <div className="form-group">
            <label htmlFor="provincia">Provincia</label>
            <input
              type="text"
              id="provincia"
              value={formData.provincia}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h2>Datos de pago</h2>
        <div className="form-group">
          <label htmlFor="tarjeta">Número de tarjeta</label>
          <input
            type="text"
            id="tarjeta"
            value={formData.tarjeta}
            onChange={handleChange}
            required
            pattern="\d{20}"
            title="La tarjeta debe tener 20 dígitos"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="caducidad">Caducidad</label>
            <input
              type="text"
              id="caducidad"
              value={formData.caducidad}
              onChange={handleChange}
              required
              pattern="\d{2}/\d{2}"
              title="Formato MM/AA"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              pattern="\d{3}"
              title="El CVV debe tener 3 dígitos"
            />
          </div>
        </div>

        <button type="submit" className="checkout-btn">
          Finalizar compra
        </button>
      </form>
    </section>
  );
};

export default Checkout;
