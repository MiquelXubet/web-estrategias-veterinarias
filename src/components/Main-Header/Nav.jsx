import React from "react";
import { Link } from "react-router-dom";

function Nav({ isOpen, toggleMenu }) {
  // Cierra menú al hacer click en un enlace (solo si está abierto)
  const closeMenu = () => {
    if (isOpen) toggleMenu();
  };

  return (
    <nav>
      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/servicios" onClick={closeMenu}>
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/planes" onClick={closeMenu}>
            Planes
          </Link>
        </li>
        <li>
          <Link to="/nosotros" onClick={closeMenu}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
