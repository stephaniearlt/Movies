import React, { useState, useEffect } from "react";

const Search = ({ handleGenreSearch, handleTopFilter, handleFlopFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = "ed82f4c18f2964e75117c2dc65e2161d";
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
        );
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des genres");
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Erreur lors du chargement des genres :", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleGenreSubmit = (event) => {
    event.preventDefault();
    if (selectedGenre !== "") {
      handleGenreSearch(selectedGenre);
    }
  };

  return (
    <form className="search-form" onSubmit={handleGenreSubmit}>
      <div className="genre-select">
        <label htmlFor="genre-select" className="sr-only">Sélectionner un genre</label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Sélectionner un genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button type="submit">Rechercher</button>
      </div>
      <div className="filter-buttons">
        <button
          className="button-top"
          type="button"
          onClick={handleTopFilter}
          aria-label="Filtrer les films les mieux notés"
        >
          Top <img src="/img/arrow-up.svg" alt="Top" className="filter-icon" />
        </button>
        <button
          className="button-flop"
          type="button"
          onClick={handleFlopFilter}
          aria-label="Filtrer les films les moins bien notés"
        >
          <img src="/img/arrow-down.svg" alt="Flop" className="filter-icon" />
          Flop
        </button>
      </div>
      <p className="tmdb-credit">Données fournies par The Movie Database</p>
    </form>
  );
};

export default Search;
