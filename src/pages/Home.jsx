import React, { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <Search handleSearch={handleSearch} handleFilter={handleFilter} />

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="search-results">
          <ul>
            {filteredResults.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
