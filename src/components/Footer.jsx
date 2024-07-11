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
        &copy; 2024 Movies. Développé par Stéphanie Arlt -{" "}
        <a
          href="https://stephaniearlt.fr/realisations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Découvrez toutes mes créations.
        </a>
      </p>
    </footer>
  );
};

export default Footer;