import React from "react";
import styles from "./HorizontalLine.module.css";

const HorizontalLine = ({ children }) => {
  return (
    <span className={styles.center}>
      <h6 className={styles.hr}>
        <span>{children}</span>
      </h6>
    </span>
  );
};

export default HorizontalLine;
