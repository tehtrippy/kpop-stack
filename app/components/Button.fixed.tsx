import React from "react";

type ButtonProps = {
  label: string | React.ReactNode; // Defining 'label' to accept string or any renderable element
  onClick?: () => void; // Adding optional onClick handler
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} aria-label={typeof label === "string" ? label : undefined}>
      {label}
    </button>
  );
};

export default Button;