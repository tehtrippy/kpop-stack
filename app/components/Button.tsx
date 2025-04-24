import React from "react";

type ButtonType = {
  label: any;
};

const Button: React.FC<ButtonType> = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
