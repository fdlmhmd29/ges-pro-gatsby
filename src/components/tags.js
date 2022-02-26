import React from "react";

// Css
import * as styles from "../styles/tags.module.css";

const Tags = ({ categories }) =>
  categories?.length > 0 && (
    <small className={styles.tags}>
      {categories.map(tag => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  );

export default Tags;
