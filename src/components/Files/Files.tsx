import React from 'react';
import './Files.css';
import File from './File/File';

type PropTypes = {
  files: string[];
  handleOpenFile: (arg0: string) => void;
};

const Files: React.FC<PropTypes> = ({ files, handleOpenFile }) => {
  const renderFiles = files.map((number) => (
    <File key={number} fileName={number} handleOpenFile={handleOpenFile} />
  ));

  return <ul className="files">{renderFiles}</ul>;
};

export default Files;
