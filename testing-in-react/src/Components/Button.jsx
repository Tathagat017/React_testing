import React from "react";
import styles from "./button.module.css";
const Button = ({ children, color, size, handleAdd }) => {
  return (
    <>
      <button
        data-testid="custom-button"
        className={`${styles[color]} ${styles[size]}`}
        onClick={() => handleAdd()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
