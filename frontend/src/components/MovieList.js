import React, { useEffect, useState } from "react";
import GenreFilter from "./GenreFilter";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import NoResults from "./NoResults";
import RatingSlider from "./RatingSlider";
import SortDropdown from "./SortDropdown";
import styles from "./MovieList.module.css";
import "../styles/App.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [minRating, setMinRating] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching movies");
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
        const uniqueGenres = [...new Set(data.map((movie) => movie.genre.name))];
        setGenres(uniqueGenres);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load movies.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) => movie.genre.name === selectedGenre);
    }

    if (searchQuery) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.filter((movie) => movie.rating >= minRating);

    switch (sortOption) {
      case "title-asc":
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "genre-asc":
        filtered = [...filtered].sort((a, b) => a.genre.name.localeCompare(b.genre.name));
        break;
      case "rating-asc":
        filtered = [...filtered].sort((a, b) => a.rating - b.rating);
        break;
      case "rating-desc":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredMovies(filtered);
  }, [selectedGenre, searchQuery, minRating, sortOption, movies]);

  const handleRatingChange = (value) => {
    setMinRating(value);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedGenre("");
    setMinRating(1);
    setSortOption("");
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading movies...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.filtersWrapper}>
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onChange={setSelectedGenre} />
        <RatingSlider minRating={minRating} onChange={handleRatingChange} />
        <SortDropdown sortBy={sortOption} onChange={setSortOption} />
        <button onClick={handleResetFilters} className={styles.styledButton}>
          Reset filters
        </button>
      </div>

      {filteredMovies.length === 0 ? (
        <NoResults />
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
