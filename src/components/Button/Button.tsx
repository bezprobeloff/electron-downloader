import React, { MouseEventHandler } from 'react';
import './Button.css';

type PropTypes = {
  disabled: boolean;
  name: string;
  handleClick: MouseEventHandler;
};

const Button: React.FC<PropTypes> = ({ name, handleClick, disabled }) => {
  return (
    <button type="button" onClick={handleClick} id={name} className="button" disabled={disabled}>
      Скачать
    </button>
  );
};

export default Button;
