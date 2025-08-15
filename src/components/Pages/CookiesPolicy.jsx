import React from "react";
import "./CookiesPolicy.css";

const CookiesPolicy = () => {
  return (
    <section className="cookies-policy">
      <h1>Política de Cookies</h1>

      <p>
        Nuestra página web utiliza cookies para mejorar la experiencia del
        usuario, analizar el tráfico y personalizar contenidos y anuncios.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan
        en su navegador para recordar información sobre su visita.
      </p>

      <h2>Tipos de cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> necesarias para el funcionamiento
          básico del sitio.
        </li>
        <li>
          <strong>Cookies de análisis:</strong> nos ayudan a entender cómo usan
          los visitantes nuestra web.
        </li>
        <li>
          <strong>Cookies de publicidad:</strong> para mostrar anuncios
          personalizados según tus intereses.
        </li>
      </ul>

      <h2>Cómo controlar o desactivar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies. Sin
        embargo, esto puede afectar la funcionalidad del sitio.
      </p>

      <h2>Más información</h2>
      <p>
        Para más detalles, visita la página oficial de la Agencia Española de
        Protección de Datos: www.aepd.es
      </p>
    </section>
  );
};

export default CookiesPolicy;
