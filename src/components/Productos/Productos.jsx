// import React from "react";
// import servicios from "../../data/ProductosData";
// import "./Productos.css";

// function Productos() {
//   return (
//     <section className="servicios">
//       <h2>Nuestros Servicios</h2>
//       <div className="servicios-grid">
//         {servicios.map((servicio, index) => (
//           <div className="servicio-card" key={index}>
//             <div className="servicio-imagen">
//               <img src={servicio.imagen} alt={servicio.titulo} />
//             </div>
//             <h3>{servicio.titulo}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Productos;

import React from "react";
import { Link } from "react-router-dom";
import servicios from "../../data/serviciosData";
import "./Productos.css";

function Productos() {
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <Link
            to={`/servicios/${servicio.id}`}
            key={servicio.id}
            className="servicio-card"
          >
            <div className="servicio-imagen">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <h3>{servicio.titulo}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Productos;
