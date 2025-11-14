import React from "react";
import MovieCard from "../Components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(" ");
  const movies = [
    {
      id: 1,
      title: "Sujal Thapa",
      release_date: "2000",
    },
    {
      id: 2,
      title: "Sabina Thapa",
      release_date: "2000",
    },
    {
      id: 3,
      title: "Suju Thapa",
      release_date: "2000",
    },
    {
      id: 4,
      title: "Sam Thapa",
      release_date: "2000",
    },
    {
      id: 5,
      title: "Sujal Thapa",
      release_date: "2000",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
