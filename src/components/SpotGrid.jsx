import { Row, Col } from 'react-bootstrap';
import SpotCard from './SpotCard';

function SpotGrid({ spots, favorites, onToggleFavorite, onViewDetails, emptyContent }) {
  if (spots.length === 0) {
    return emptyContent || null;
  }

  return (
    <Row xs={1} sm={2} lg={3} className="g-4">
      {spots.map((spot) => (
        <Col key={spot.id}>
          <SpotCard
            spot={spot}
            isFavorited={favorites.includes(spot.id)}
            onToggleFavorite={onToggleFavorite}
            onViewDetails={onViewDetails}
          />
        </Col>
      ))}
    </Row>
  );
}

export default SpotGrid;
