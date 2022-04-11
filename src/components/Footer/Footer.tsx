import React from 'react';
import github from 'assets/github.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__source">
        <h3 className="footer__title">PROJECT SOURCE:</h3>
        <a
          href="https://github.com/Korpaxdev/marvel-app-react"
          target="_blank"
          rel="noreferrer"
          className="footer__github-link"
        >
          <img src={github} alt="github source" />
        </a>
      </div>
      <div className="footer__api">
        <h3 className="footer__title">API:</h3>
        <a
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__marvel-link"
        >
          developer.marvel.com
        </a>
      </div>
      <h3 className="footer__title">
        Developed by <a href="mailto:korpaxdev@gmail.com" className='footer__dev-link'>Korpaxdev</a>
      </h3>
    </footer>
  );
};

export default Footer;
