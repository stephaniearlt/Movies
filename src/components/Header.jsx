import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "active" : ""}
            >
              Coups de coeur
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Movies</h1>
    </header>
  );
};

export default Header;
