import React from 'react';
import './Button.css';

type PropTypes = {
  disabled: boolean;
};
const Button: React.FC<PropTypes> = ({ disabled }) => {
  return (
    <button type="button" className="button" disabled={disabled}>
      Скачать
    </button>
  );
};

export default Button;
