import React from "react";

const Card = ({ movie, addToFavorites, removeFromFavorites, isFavorite }) => {
  const { id, title, release_date, vote_average, overview, poster_path } = movie;

  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/img/poster.jpg";
  const formattedDate = new Date(release_date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const roundedVoteAverage = Math.round(vote_average);

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <h3 className="movie-release-date">Sorti le : {formattedDate}</h3>
      <h4 className="movie-vote-average">
        {roundedVoteAverage}/10
        <img src="/img/star.svg" alt="Star" className="star-icon" />
      </h4>
      <p className="movie-overview">{overview}</p>
      {isFavorite ? (
        <button className="btn btn-remove" onClick={handleRemoveFromFavorites} tabIndex="0">
          <span role="img" aria-label="Supprimer des favoris">💔</span>
        </button>
      ) : (
        <button className="btn" onClick={handleAddToFavorites} tabIndex="0">
          <span role="img" aria-label="Ajouter aux favoris">💖</span>
        </button>
      )}
    </div>
  );
};

export default Card;
