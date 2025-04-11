import React from "react";
import styles from "./NoResults.module.css";

const NoResults = () => {
  return (
    <div className={styles.empty}>
      📭 Sorry, no movies found. Try adjusting filters.
    </div>
  );
};

export default NoResults;
