import React from "react";

type ButtonType = {
  title: any;
};

const Button: React.FC<ButtonType> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;
