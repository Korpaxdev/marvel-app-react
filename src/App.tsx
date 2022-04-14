import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useResponsiveType from './hooks/useResponsiveType';

// -------------------> Components <------------------- //
import CharactersPage from './pages/CharactersPage';
import AppButtonUp from './components/UI/AppButtonUp/AppButtonUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppLoading from './components/UI/AppLoading/AppLoading';

// -------------------> Lazy loading <------------------- //
const ComicsBookPage = lazy(() => import('./pages/ComicsBookPage'));
const ComicInfoPage = lazy(() => import('./pages/ComicInfoPage'));

const App = () => {
  useResponsiveType();
  return (
    <Suspense fallback={<AppLoading />}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsBookPage />} />
          <Route path="/comics/:id" element={<ComicInfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <AppButtonUp />
    </Suspense>
  );
};

export default App;
