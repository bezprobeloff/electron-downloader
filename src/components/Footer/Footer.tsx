import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__description">Разработал Белов Михаил</p>
      <p className="footer__description">
        <a
          className="footer__link"
          href="https://github.com/bezprobeloff/electron-downloader"
          target="_blank"
          rel="noreferrer"
        >
          Исходник на GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
