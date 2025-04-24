import React from "react";

type ButtonProps = {
  title: string; // Specifying title as a string for better type safety
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  if (typeof title !== "string") {
    console.warn("Button title must be a string."); // Simple console warning for prop validation
  }

  return <button>{title}</button>;
};

export default Button;