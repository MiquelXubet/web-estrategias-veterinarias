// import React from "react";
// import "./Footer.css";
// import logo from "../../Images/logo.png";
// import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="caja-logo-redes">
//         <div className="footer-logo">
//           <img
//             src={logo}
//             alt="Estrategias Veterinarias"
//             className="footer-logo-img"
//           />
//         </div>
//         <div className="footer-redes">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>

//       <p className="footer-frase">
//         Cuidamos de tu clínica para que tú sigas cuidando de quienes más
//         importan.
//       </p>

//       <div className="footer-menu">
//         <a href="#servicios">Servicios</a>
//         <a href="#nosotros">Nosotros</a>
//         <a href="#contacto">Contacto</a>
//         <a href="#blog">Blog</a>
//       </div>

//       <div className="footer-contacto">
//         <a
//           href="https://wa.me/34633979272"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn-whatsapp"
//         >
//           Escríbenos por WhatsApp
//         </a>
//       </div>

//       <p className="footer-copy">
//         © {new Date().getFullYear()} Estrategias Veterinarias. Todos los
//         derechos reservados.
//       </p>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="caja-logo-redes">
          <div className="footer-logo">
            <a href="/" aria-label="Estrategias Veterinarias - Inicio">
              <img
                src={logo}
                alt="Logo Estrategias Veterinarias"
                className="footer-logo-img"
              />
            </a>
          </div>
          <nav className="footer-redes" aria-label="Redes sociales">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>

        <p className="footer-frase">
          Cuidamos de tu clínica para que tú sigas cuidando de quienes más
          importan.
        </p>
      </div>

      <nav className="footer-menu" aria-label="Menú de navegación footer">
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
        <a href="#blog">Blog</a>
        <a href="/politica-privacidad">Política de Privacidad</a>
        <a href="/aviso-legal">Aviso Legal</a>
        <a href="/cookies">Política de Cookies</a>
      </nav>

      <div className="footer-contacto">
        <a
          href="https://wa.me/34633979272"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          aria-label="Escríbenos por WhatsApp"
        >
          Escríbenos por WhatsApp
        </a>
      </div>

      <p className="footer-copy" role="note">
        © {new Date().getFullYear()} Estrategias Veterinarias. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
