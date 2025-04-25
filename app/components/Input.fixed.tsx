import React from "react";

type InputType = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Added event handler for input
};

const Input: React.FC<InputType> = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>  {/* Use label element correctly */}
      <input type="text" value={value} onChange={onChange} /> {/* Added onChange to handle input changes */}
    </div>
  );
};

export default Input;