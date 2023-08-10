import React from 'react';
import './Button.css';

type PropTypes = {
  disabled: boolean;
  name: string;
};
const Button: React.FC<PropTypes> = ({ name, disabled }) => {
  const handleSaveFile = () => {
    window.myAPI.save("dfdff");
  };
  return (
    <button type="button" onClick={handleSaveFile} id={name} className="button" disabled={disabled}>
      Скачать
    </button>
  );
};

export default Button;
