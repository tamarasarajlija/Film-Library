import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const renderStars = (rating) => {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(10 - rounded);
  };

  return (
    <div className={styles.card}>
      <h3>🎬 {movie.title}</h3>
      <span className={styles.genre}>🎭 {movie.genre.name}</span>
      <span className={styles.language}>🌍 {movie.language.name}</span>
      <span className={styles.author}>📝 {movie.author.name}</span>
      <p>⭐ {movie.rating} ({renderStars(movie.rating)})</p>
    </div>
  );
};

export default MovieCard;
