import React from 'react';
import './RandomLayout.scss';
import RandomChar from 'components/RandomChar/RandomChar';
import RandomCharToday from '../../components/RandomCharToday/RandomCharToday';

const RandomLayout = () => {
  return (
    <section className="random-layout">
      <div className="container">
        <div className="random-layout__wrapper">
          <RandomChar />
          <RandomCharToday />
        </div>
      </div>
    </section>
  );
};

export default RandomLayout;
