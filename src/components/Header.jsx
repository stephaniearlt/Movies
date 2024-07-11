import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Movies</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "active" : ""}
              aria-current={
                location.pathname === "/favorites" ? "page" : undefined
              }
            >
              Favoris 
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
