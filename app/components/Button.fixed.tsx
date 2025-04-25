import React from "react";

type ButtonType = {
  label: string; // Changed from any to string for better type safety
  onClick: () => void;
};

// Optionally include optional props for aria-label with a default value
const Button: React.FC<ButtonType> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
};

export default Button;