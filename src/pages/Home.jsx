import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = ({ favorites, setFavorites }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = "ed82f4c18f2964e75117c2dc65e2161d";
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Erreur lors du chargement des genres :", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreSearch = async (genreId) => {
    setIsLoading(true);
    try {
      const apiKey = "ed82f4c18f2964e75117c2dc65e2161d";
      const response = await fetch(
       `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=fr-FR`
      );
      const data = await response.json();
      setSearchResults(data.results);
      setFilteredResults(data.results);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
    setIsLoading(false);
  };

  const handleTopFilter = () => {
    let filteredResults = searchResults.filter(
      (movie) => movie.vote_average >= 5
    );
    setFilteredResults(filteredResults);
  };

  const handleFlopFilter = () => {
    let filteredResults = searchResults.filter(
      (movie) => movie.vote_average < 5
    );
    setFilteredResults(filteredResults);
  };

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "Inconnu";
    });
  };

  return (
    <div className="container">
      <Search
        handleGenreSearch={handleGenreSearch} 
        handleTopFilter={handleTopFilter} 
        handleFlopFilter={handleFlopFilter} 
      />

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="search-results">
          {filteredResults.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={favorites.some((fav) => fav.id === movie.id)}
              getGenreNames={getGenreNames} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
