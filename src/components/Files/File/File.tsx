import React from 'react';
import './File.css';

type PropTypes = {
  fileName: string;
  handleOpenFile: (fileName: string) => void;
};

const File: React.FC<PropTypes> = ({ fileName, handleOpenFile }) => {
  const handleClick = () => {
    handleOpenFile(fileName);
  };
  return (
    <li onClick={handleClick} className="file">
      {fileName}
    </li>
  );
};

export default File;
