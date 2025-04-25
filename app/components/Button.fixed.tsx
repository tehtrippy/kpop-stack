import React from "react";

type ButtonProps = {
  label: string; // Changed to string
  value?: string | null; // Made optional and defined as string or null
};

const Button: React.FC<ButtonProps> = ({ label, value }) => {
  return <button value={value || undefined}>{label}</button>; // Ensured only string or undefined is passed to button value
};

export default Button;