import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useResponsiveType from './hooks/useResponsiveType';
import CharactersPage from './pages/CharactersPage';
import AppButtonUp from './components/UI/AppButtonUp/AppButtonUp';
import Header from './components/Header/Header';
import ComicsBookPage from './pages/ComicsBookPage';
import Footer from './components/Footer/Footer';

const App = () => {
  useResponsiveType();
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsBookPage />} />
        </Routes>
      </main>
      <Footer/>
      <AppButtonUp />
    </>
  );
};

export default App;
