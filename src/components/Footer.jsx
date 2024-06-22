import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo-link">
        <img
          src="/img/logo-movies.svg"
          alt="Movies Logo"
          className="logo-footer"
        />
      </Link>
      <p>
        &copy; 2024 Movies. Créatrice Stéphanie Arlt -{" "}
        <a href="https://stephaniearlt.fr" target="blank">
          Découvrez tous ses projets.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
