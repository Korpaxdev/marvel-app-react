import React from 'react';
import useResponsiveType from './hooks/useResponsiveType';
import CharactersPage from './pages/CharactersPage';
import AppButtonUp from './components/UI/AppButtonUp/AppButtonUp';

const App = () => {
  useResponsiveType();
  return (
    <>
      <CharactersPage />
      <AppButtonUp/>
    </>


  );
};

export default App;
