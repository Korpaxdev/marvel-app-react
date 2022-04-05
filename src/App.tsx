import React from 'react';
import useResponsiveType from './hooks/useResponsiveType';
import { MEDIA_QUERIES } from './utils/const';
import CharactersPage from './pages/CharactersPage';

const App = () => {
  useResponsiveType(MEDIA_QUERIES);
  return <CharactersPage />;
};

export default App;
