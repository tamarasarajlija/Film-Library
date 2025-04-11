import React from "react";
import styles from "./RatingSlider.module.css";

const RatingSlider = ({ minRating, onChange }) => {
  return (
    <div className={styles.sliderWrapper}>
      <label>
        🎯 Show movies with rating <strong>{minRating}</strong> or higher
      </label>
      <div className={styles.sliders}>
        <input
          type="range"
          min="1"
          max="10"
          value={minRating}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default RatingSlider;
