import React from 'react';
import Header from '../components/Header/Header';
import RandomLayout from '../layouts/RandomLayout/RandomLayout';
import CharsLayout from '../layouts/CharsLayout/CharsLayout';
import AppCharacterBg from '../components/UI/AppCharacterBg/AppCharacterBg';

const CharactersPage = () => {
  return (
    <>
      <Header />
      <RandomLayout />
      <CharsLayout />
      <AppCharacterBg/>
    </>
  );
};

export default CharactersPage;
