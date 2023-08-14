import React from 'react';
import './File.css';
import { REGEX_PATH_FILE } from '../../../utils/constants';

type PropTypes = {
  pathFile: string;
  handleOpenFile: (fileName: string) => void;
};

const File: React.FC<PropTypes> = ({ pathFile, handleOpenFile }) => {
  const fileName = pathFile.match(REGEX_PATH_FILE)?.[3];

  const handleClick = () => {
    handleOpenFile(pathFile);
  };
  return (
    <li onClick={handleClick} title={pathFile} className="file">
      {fileName}
    </li>
  );
};

export default File;
