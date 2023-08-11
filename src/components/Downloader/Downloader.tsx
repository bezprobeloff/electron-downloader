import React, { useRef } from 'react';

import './Downloader.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useForm from '../../utils/hooks/useForm';
import { INPUT_URL_FILE_ATTRIBUTES } from './constants';

const Downloader: React.FC = () => {
  const formRef = useRef(null);
  const form = useForm(formRef);
  const nameInputUrl = 'urlFile';

  /*
  async function saveFile(content: any) {
    console.log('start');

    //console.log(window.myAPI.ipcRenderer);
    const savepath = await window.myAPI.ipcRenderer.send('download', {
      url: content
    });
    console.log(savepath);

    await window.myAPI.ipcRenderer.once('download complete', (event, file) => {
      console.log(file); // Full file path
    });
  }


   */
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const urlFile = form.values[nameInputUrl];
    const options = {
      urlFile: form.values[nameInputUrl]
    };
    window.myAPI.save(urlFile);
    // saveFile(urlFile);
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
      </div>
    </main>
  );
};

export default Downloader;
