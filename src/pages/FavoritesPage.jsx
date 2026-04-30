import { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spots from '../data/spots';
import SpotGrid from '../components/SpotGrid';
import SpotModal from '../components/SpotModal';

function FavoritesPage({ favorites, onToggleFavorite }) {
  const [selectedSpot, setSelectedSpot] = useState(null);

  const favoriteSpots = spots.filter((spot) => favorites.includes(spot.id));

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-1">My Favorites</h2>
      <p className="text-muted mb-4">
        {favoriteSpots.length === 0
          ? 'You have no saved spots yet.'
          : `You have ${favoriteSpots.length} saved spot${favoriteSpots.length > 1 ? 's' : ''}.`}
      </p>

      <SpotGrid
        spots={favoriteSpots}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onViewDetails={setSelectedSpot}
        emptyContent={
          <Alert variant="warning" className="d-flex align-items-center gap-3 flex-wrap">
            <span>
              Browse study spots and click <strong>Save</strong> to add them here!
            </span>
            <Button as={Link} to="/spots" variant="warning" size="sm" className="ms-auto">
              Browse Spots
            </Button>
          </Alert>
        }
      />

      <SpotModal
        spot={selectedSpot}
        show={!!selectedSpot}
        onHide={() => setSelectedSpot(null)}
        isFavorited={selectedSpot ? favorites.includes(selectedSpot.id) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </Container>
  );
}

export default FavoritesPage;
