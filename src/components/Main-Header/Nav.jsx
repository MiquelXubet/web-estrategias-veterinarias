import React from "react";
import { Link } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <nav>
      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/planes">Planes</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
