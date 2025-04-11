// src/pages/Home.js

import NoResults from "../components/NoResults";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api";
import styles from "./Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState("titleAsc");

  useEffect(() => {
    fetchMovies()
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
        setLoading(false);
      });
  }, []);

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === "All" || movie.genre === selectedGenre) &&
    movie.rating >= minRating
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortOption) {
      case "titleAsc":
        return a.title.localeCompare(b.title);
      case "titleDesc":
        return b.title.localeCompare(a.title);
      case "ratingHigh":
        return b.rating - a.rating;
      case "ratingLow":
        return a.rating - b.rating;
      case "languageAsc":
        return a.language.localeCompare(b.language);
      default:
        return 0;
    }
  });

  return (
    <div className={styles.container}>
      <h1>🎞️ Film Library</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>

        <label>
          Min Rating: {minRating}
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
          />
        </label>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="titleAsc">Title A → Z</option>
          <option value="titleDesc">Title Z → A</option>
          <option value="ratingHigh">Rating: High to Low</option>
          <option value="ratingLow">Rating: Low to High</option>
          <option value="languageAsc">Language A → Z</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.moviesGrid}>
          {sortedMovies.length > 0 ? (
            sortedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                genre={movie.genre}
                language={movie.language}
                rating={movie.rating}
              />
            ))
          ) : (
            <NoResults />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
