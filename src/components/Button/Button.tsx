import React from 'react';
import './Button.css';


type PropTypes = {
  disabled: boolean;
  name: string;
};
const Button: React.FC<PropTypes> = ({ name, disabled }) => {
  return (
    <button type="button" id={name} className="button" disabled={disabled}>
      Скачать
    </button>
  );
};

export default Button;
