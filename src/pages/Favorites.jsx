import React, { useEffect } from "react";
import Card from "../components/Card";

const Favorites = ({ favorites, setFavorites }) => {
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container">
      <h2>Mes coups de coeur <span>💖</span></h2>
      {favorites.length === 0 ? (
        <div className="centered-text">
          <p>Aucun film ajouté aux coups de coeur.</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              removeFromFavorites={removeFromFavorites}
              isFavorite
              aria-label={`Film favori : ${movie.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
