import React from "react";

type ButtonType = {
  label: any;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
