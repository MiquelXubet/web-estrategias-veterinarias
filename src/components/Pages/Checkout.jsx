// src/components/Checkout.jsx
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
        "service_isz2jvd", // Tu Service ID
        "template_ab816tj", // Tu Template ID
        templateParams, // Datos que enviamos
        "6Lg-f7Z8vNBqT6PyP" // Tu Public Key
      )
      .then(
        () => {
          alert("Compra realizada con éxito");
          setFormData({
            nombre: "",
            apellidos: "",
            direccion: "",
            ciudad: "",
            cp: "",
            provincia: "",
            tarjeta: "",
            caducidad: "",
            cvv: "",
          });
        },
        (error) => {
          alert("Error al realizar la compra: " + error.text);
        }
      );
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
