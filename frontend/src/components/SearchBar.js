import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ query, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="🔍 Search movies..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
