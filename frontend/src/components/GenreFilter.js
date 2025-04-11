import React from "react";
import styles from "./GenreFilter.module.css";

const GenreFilter = ({ genres, selectedGenre, onChange }) => {
  return (
    <div className={styles.filterWrapper}>
      <select
        className={styles.select}
        value={selectedGenre}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">🎭 Select genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
