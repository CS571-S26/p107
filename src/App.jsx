import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import StudySpotsPage from './pages/StudySpotsPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('spotfinder-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];
      localStorage.setItem('spotfinder-favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/spots"
          element={
            <StudySpotsPage
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
