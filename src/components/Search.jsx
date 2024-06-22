import React, { useState } from "react";

const Search = ({ handleSearch, handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  const handleTopFilter = () => {
    handleFilter("top");
  };

  const handleFlopFilter = () => {
    handleFilter("flop");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input">
        <input
          type="text"
          placeholder="Rechercher des films..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Rechercher</button>
      <div className="filter-buttons">
        <button className="button-top" type="button" onClick={handleTopFilter}>
          Top <img src="/img/arrow-up.svg" alt="Top" className="filter-icon" />
        </button>
        <button
          className="button-flop"
          type="button"
          onClick={handleFlopFilter}
        >
          <img src="/img/arrow-down.svg" alt="Flop" className="filter-icon" />
          Flop
        </button>
      </div>
    </form>
  );
};

export default Search;
