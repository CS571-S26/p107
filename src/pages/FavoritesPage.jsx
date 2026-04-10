import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spots from '../data/spots';
import SpotCard from '../components/SpotCard';

function FavoritesPage({ favorites, onToggleFavorite }) {
  const favoriteSpots = spots.filter((spot) => favorites.includes(spot.id));

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-1">My Favorites</h2>
      <p className="text-muted mb-4">
        {favoriteSpots.length === 0
          ? 'You have no saved spots yet.'
          : `You have ${favoriteSpots.length} saved spot${favoriteSpots.length > 1 ? 's' : ''}.`}
      </p>

      {favoriteSpots.length === 0 ? (
        <Alert variant="warning" className="d-flex align-items-center gap-3">
          <span>💡 Browse study spots and click <strong>♡ Save</strong> to add them here!</span>
          <Button as={Link} to="/spots" variant="warning" size="sm" className="ms-auto">
            Browse Spots
          </Button>
        </Alert>
      ) : (
        <Row xs={1} sm={2} lg={3} className="g-4">
          {favoriteSpots.map((spot) => (
            <Col key={spot.id}>
              <SpotCard
                spot={spot}
                isFavorited={true}
                onToggleFavorite={onToggleFavorite}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default FavoritesPage;
