import React from "react";

type ButtonProps = {
  label: string; // Use string type for better type safety
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  if (!label) {
    console.warn("Button label prop is required."); // Simple warning added for better error handling
  }

  return <button>{label || "Default Button"}</button>; // Provide default text if label is not provided
};

export default Button;