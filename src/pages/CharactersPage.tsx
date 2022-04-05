import React from 'react';
import Header from '../components/Header/Header';
import RandomLayout from '../layouts/RandomLayout/RandomLayout';
import CharsLayout from '../layouts/CharsLayout/CharsLayout';

const CharactersPage = () => {
  return (
    <>
      <Header />
      <RandomLayout />
      <CharsLayout />
    </>
  );
};

export default CharactersPage;
