import React from "react";

type ButtonProps = {
  label: string;  // More specific type for the label
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
};

export default Button;