import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
    <div className="d-flex flex-column min-vh-100">
      <NavBar favoritesCount={favorites.length} />
      <main className="flex-grow-1">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
