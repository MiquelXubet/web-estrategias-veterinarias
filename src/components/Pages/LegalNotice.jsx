// src/components/Pages/LegalNotice.jsx
import React from "react";
import "./LegalNotice.css";

const LegalNotice = () => {
  return (
    <section className="legal-notice">
      <h1>Aviso Legal</h1>

      <h2>1. Información General</h2>
      <p>
        En cumplimiento con el artículo 10 de la Ley 34/2002 de Servicios de la
        Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa
        que esta página web es propiedad de:
      </p>
      <p>
        <strong>Nombre:</strong> Estrategias Veterinarias
        <br />
        <strong>Domicilio:</strong> Carrer Can Sajart, 4 - 08293 - Collbató -
        Barcelona
        <br />
        <strong>Correo electrónico:</strong>
        contacto@estrategiasveterinarias.com
        <br />
        <strong>Teléfono:</strong> +34 633979272
        <br />
        <strong>NIF/CIF:</strong> 36521588H
      </p>

      <h2>2. Condiciones de Uso</h2>
      <p>
        El acceso y/o uso de esta web atribuye la condición de usuario, que
        acepta, desde dicho acceso y/o uso, las presentes condiciones generales.
      </p>

      <h2>3. Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los contenidos de esta web, incluyendo textos, imágenes, diseños,
        logotipos, archivos descargables y software, son propiedad de
        Estrategias Veterinarias o de terceros que han autorizado su uso.
      </p>
      <p>
        Queda prohibida la reproducción, distribución, comunicación pública y
        transformación de los contenidos sin autorización expresa.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        Estrategias Veterinarias no se hace responsable de los daños o
        perjuicios que puedan derivarse del uso de la información contenida en
        esta web.
      </p>

      <h2>5. Protección de Datos</h2>
      <p>
        Para información detallada sobre la protección de datos personales,
        consulte nuestra Política de Privacidad.
      </p>

      <h2>6. Legislación Aplicable y Jurisdicción</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para la
        resolución de conflictos, se someten a los juzgados y tribunales del
        domicilio del usuario.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        Estrategias Veterinarias se reserva el derecho a modificar las presentes
        condiciones en cualquier momento.
      </p>
    </section>
  );
};

export default LegalNotice;
