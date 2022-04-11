import React from 'react';
import { Link } from 'react-router-dom';

import './AppPageDevelopment.scss';

const AppPageDevelopment = () => {
  return (
    <section className="development">
      <div className="container">
        <h1 className="development__title">This page is in development...</h1>
        <div className='development__link-wrapper'>
          <Link to="/" className="development__link">
            Back to Main
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppPageDevelopment;
