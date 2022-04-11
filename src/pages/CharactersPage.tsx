import React from 'react';
import RandomLayout from '../layouts/RandomLayout/RandomLayout';
import CharsLayout from '../layouts/CharsLayout/CharsLayout';
import AppCharacterBg from '../components/UI/AppCharacterBg/AppCharacterBg';

const CharactersPage = () => {
  return (
    <>
      <RandomLayout />
      <CharsLayout />
      <AppCharacterBg/>
    </>
  );
};

export default CharactersPage;
