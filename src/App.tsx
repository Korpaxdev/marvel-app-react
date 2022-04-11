import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useResponsiveType from './hooks/useResponsiveType';
import CharactersPage from './pages/CharactersPage';
import AppButtonUp from './components/UI/AppButtonUp/AppButtonUp';
import Header from './components/Header/Header';
import ComicsBookPage from './pages/ComicsBookPage';

const App = () => {
  useResponsiveType();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsBookPage />} />
      </Routes>
      <AppButtonUp />
    </>
  );
};

export default App;
