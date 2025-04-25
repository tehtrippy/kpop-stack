import React from "react";

type ButtonType = {
  label: boolean;
  value: null;
};

const Button: React.FC<ButtonType> = ({ label, value }) => {
  return <button value={value}>{label}</button>;
};

export default Button;
