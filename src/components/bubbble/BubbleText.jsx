import React from "react";
import styles from "./bubble.module.css";

const BubbleText = ({text}) => {
  return (
    <p className="text-4xl font-medium leading-tight">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </p>
  );
};

export default BubbleText;