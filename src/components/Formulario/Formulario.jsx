import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Formulario.css";

// Componente Formulario
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState({});

  // Función para validar campos
  const validarCampos = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{2,}$/.test(nombre)) {
      nuevosErrores.nombre =
        "El nombre debe tener al menos 2 letras y solo contener letras y espacios";
    }

    if (!email.trim()) {
      nuevosErrores.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nuevosErrores.email = "El email no tiene un formato válido";
    }

    if (!asunto.trim()) {
      nuevosErrores.asunto = "El asunto es obligatorio";
    } else if (asunto.trim().length < 3) {
      nuevosErrores.asunto = "El asunto debe tener al menos 3 caracteres";
    }

    if (!mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    } else if (mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validarCampos()) {
      return; // No se envía si hay errores
    }

    emailjs
      .sendForm(
        "service_isz2jvd",
        "template_ab816tj",
        event.target,
        "6Lg-f7Z8vNBqT6PyP"
      )
      .then(() => {
        setEnviado(true);
        setTimeout(() => setEnviado(false), 9000);
        setNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
        setErrores({});
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
      });
  };

  return (
    <section className="formulario-contacto-container">
      <h2 className="titulo-contacto">Contacta con nosotros</h2>
      <div className="contenido-contacto">
        <div className="informacion-contacto-container">
          <div className="info-telefono">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&" />
            <div>
              <h3>Llámanos</h3>
              <p>+34 123 456 789</p>
            </div>
          </div>
          <div className="info-email">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&" />
            <div>
              <h3>Escríbenos</h3>
              <p>contacto@estrategiasveterinarias.com</p>
            </div>
          </div>
        </div>

        <form className="formulario-contacto" onSubmit={handleSubmit}>
          {enviado && (
            <p className="mensaje-enviado">
              ¡Gracias! Tu mensaje ha sido enviado.
            </p>
          )}
          <h2 className="formulario-de-contacto">Formulario de Contacto</h2>
          <div className="formulario-campos">
            <div className="campo-nombre">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingresa tu nombre"
              />
              {errores.nombre && <p className="error">{errores.nombre}</p>}
            </div>

            <div className="campo-email">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email"
              />
              {errores.email && <p className="error">{errores.email}</p>}
            </div>

            <div className="campo-asunto">
              <label htmlFor="asunto">Asunto:</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                placeholder="Ingresa el asunto"
              />
              {errores.asunto && <p className="error">{errores.asunto}</p>}
            </div>

            <div className="campo-mensaje">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje"
              ></textarea>
              {errores.mensaje && <p className="error">{errores.mensaje}</p>}
            </div>

            <div className="campo-boton">
              <button type="submit" className="boton-enviar">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
