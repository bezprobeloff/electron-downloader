import React, { useRef, useState } from 'react';

import './Downloader.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../utils/hooks/useForm';
import { INPUT_URL_FILE_ATTRIBUTES } from './constants';
import Files from '../Files/Files';

const Downloader: React.FC = () => {
  const formRef = useRef(null);
  const form = useForm(formRef);
  const [files, setFiles] = useState([]);
  const nameInputUrl = 'urlFile';

  const handleOpenFile = (pathFile: string) => {
    window.myAPI.open(pathFile);
  };

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const urlFile = form.values[nameInputUrl];
    const addFile = (savePath: string) => {
      const newListFiles = files.filter((file, index) => index < 4);
      setFiles([savePath, ...newListFiles]);
    };
    window.myAPI.save(urlFile, addFile);

    form.resetForm();
  };

  return (
    <main className="downloader">
      <div className="downloader__container">
        <form noValidate ref={formRef} className="downloader__form" onSubmit={handleSubmit}>
          <Input
            name={nameInputUrl}
            value={form.values[nameInputUrl] || ''}
            typeInput="url"
            placeholderText="Введите url файла..."
            errors={form.errors}
            onChange={form.handleChange}
            validateAttributes={INPUT_URL_FILE_ATTRIBUTES}
          />
          <Button name="buttonDownload" handleClick={handleSubmit} disabled={!form.isValid} />
        </form>
        <Files files={files} handleOpenFile={handleOpenFile} />
      </div>
    </main>
  );
};

export default Downloader;
