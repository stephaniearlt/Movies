import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const apiKey = "ed82f4c18f2964e75117c2dc65e2161d";
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    try {
      const apiKey = "ed82f4c18f2964e75117c2dc65e2161d";
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=fr-FR`
      );
      const data = await response.json();
      setSearchResults(data.results);
      setFilteredResults(data.results);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
    setIsLoading(false);
  };

  const handleFilter = (filterType) => {
    let filteredResults = [...searchResults];

    if (filterType === "top") {
      filteredResults = searchResults.filter(
        (movie) => movie.vote_average >= 5
      );
    } else if (filterType === "flop") {
      filteredResults = searchResults.filter((movie) => movie.vote_average < 5);
    }

    setFilteredResults(filteredResults);
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "Inconnu";
    });
  };

  return (
    <div>
      <Search handleSearch={handleSearch} handleFilter={handleFilter} />

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="search-results">
          {filteredResults.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              addToFavorites={addToFavorites}
              getGenreNames={getGenreNames}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
