import React from "react";

type InputType = {
  label: any;
  value: any;
};

const Input: React.FC<InputType> = ({ label, value }) => {
  return <input value={value}>{label}</input>;
};

export default Input;
