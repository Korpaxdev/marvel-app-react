import React from 'react';
import CharsList from 'components/CharsList/CharsList';

import './CharsLayout.scss';
import CharInfo from '../../components/CharInfo/CharInfo';

const CharsLayout = () => {
  return (
    <section className="characters-layout">
      <div className="container">
        <div className="characters-layout__wrapper">
          <CharsList />
          <CharInfo />
        </div>
      </div>
    </section>
  );
};

export default CharsLayout;
