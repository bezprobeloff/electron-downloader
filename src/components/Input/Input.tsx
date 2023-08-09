import React from 'react';
import './Input.css';

type PropTypes = {
  name: string;
  typeInput: string;
  placeholderText: string;
  value: string;
  errors: { [index: string]: string };
  validateAttributes: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
};

const Input: React.FC<PropTypes> = ({
  name,
  typeInput,
  placeholderText,
  value,
  errors,
  validateAttributes,
  onChange
}) => {
  return (
    <label htmlFor={name} className="input">
      <input
        id={name}
        className="input__element"
        value={value}
        name={name}
        type={typeInput}
        placeholder={placeholderText}
        onChange={onChange}
        {...validateAttributes}
      />
      <span className="input__error">{errors[name]}</span>
    </label>
  );
};

export default Input;
