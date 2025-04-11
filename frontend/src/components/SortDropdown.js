import React from "react";
import styles from "./SortDropdown.module.css";

const SortDropdown = ({ sortBy, onChange }) => {
  return (
    <div className={styles.sortWrapper}>
      <select value={sortBy} onChange={(e) => onChange(e.target.value)} className={styles.select}>
        <option value="">🔀 Sort by...</option>
        <option value="title-asc">Title (A–Z)</option>
        <option value="genre-asc">Genre (A–Z)</option>
        <option value="rating-asc">Rating (Ascending)</option>
        <option value="rating-desc">Rating (Descending)</option>
      </select>
    </div>
  );
};

export default SortDropdown;
