import React from 'react';

import RandomChar from 'components/RandomChar/RandomChar';
import RandomCharToday from 'components/RandomCharToday/RandomCharToday';

import './RandomLayout.scss';

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
