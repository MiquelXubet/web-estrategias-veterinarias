import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="caja-logo-redes">
          <div className="footer-logo">
            <Link to="/" aria-label="Estrategias Veterinarias - Inicio">
              <img
                src={logo}
                alt="Logo Estrategias Veterinarias"
                className="footer-logo-img"
              />
            </Link>
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
        <Link to="/servicios">Servicios</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/planes">Planes</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/politica-privacidad">Política de Privacidad</Link>
        <Link to="/aviso-legal">Aviso Legal</Link>
        <Link to="/cookies">Política de Cookies</Link>
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
