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
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    form.resetForm();
  };

  return (
    <main className="downloader">
      <div className="downloader__container">
        <form noValidate ref={formRef} className="downloader__form" onSubmit={handleSubmit}>
          <Input
            name={nameInputUrl}
            value={form.values[nameInputUrl]}
            typeInput="url"
            placeholderText="Введите url файла..."
            errors={form.errors}
            onChange={form.handleChange}
            validateAttributes={INPUT_URL_FILE_ATTRIBUTES}
          />
          <Button disabled={!form.isValid} />
        </form>
      </div>
    </main>
  );
};

export default Downloader;
