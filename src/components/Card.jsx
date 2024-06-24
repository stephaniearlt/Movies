import React from "react";

const Card = ({ movie, addToFavorites, getGenreNames }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    genre_ids,
  } = movie;

  // Pour formater la date en français
  const formattedDate = new Date(release_date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  // Pour arrondir la note
  const roundedVoteAverage = Math.round(vote_average);

  // Pour obtenir les noms des genres
  const genreNames = getGenreNames(genre_ids);

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <h2 className="movie-title">{title}</h2>
      <h3 className="movie-release-date">Sorti le : {formattedDate}</h3>
      <h4 className="movie-vote-average">
        {roundedVoteAverage}/10
        <img src="/img/star.svg" alt="Star" className="star-icon" />
      </h4>
      <ul className="movie-genres">
        {genreNames.map((name, index) => (
          <li key={index} className="genre">
            {name}
          </li>
        ))}
      </ul>
      <p className="movie-overview">{overview}</p>
      <div className="btn" onClick={() => addToFavorites(movie)}>
        Ajouter aux coups de coeur
      </div>
    </div>
  );
};

export default Card;
