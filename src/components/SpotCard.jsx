import { Card, Badge, Button, Stack } from 'react-bootstrap';

const noiseBadgeColor = {
  Quiet: 'success',
  Moderate: 'warning',
  Loud: 'danger',
};

// Dark gold — passes WCAG AA (4.5:1) on white background
const RATING_COLOR = '#7a5c00';

function SpotCard({ spot, isFavorited, onToggleFavorite, onViewDetails }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={spot.image}
        alt={`${spot.name} study space`}
        style={{ height: '180px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => onViewDetails(spot)}
        onError={(e) => {
          e.target.src = 'https://placehold.co/400x180?text=Study+Spot';
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="fw-bold" style={{ fontSize: '1.1rem' }}>
          {spot.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
          <span aria-hidden="true">📍 </span>{spot.location}
        </Card.Subtitle>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-2">
          <Badge bg={noiseBadgeColor[spot.noiseLevel]}>{spot.noiseLevel} noise</Badge>
          {spot.outlets && <Badge bg="secondary">Outlets available</Badge>}
          {spot.tags.map((tag) => (
            <Badge bg="light" text="dark" key={tag} className="border">
              {tag}
            </Badge>
          ))}
        </Stack>

        <div className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>
          <span aria-hidden="true">⏰ </span>Hours: {spot.hours}
        </div>
        <div className="mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
          <span aria-hidden="true">💺 </span>Seating: {spot.seating}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto gap-2">
          <span className="fw-semibold" style={{ color: RATING_COLOR }} aria-label={`Rating: ${spot.rating.toFixed(1)} out of 5`}>
            ★ {spot.rating.toFixed(1)}
          </span>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => onViewDetails(spot)}
              aria-label={`View details for ${spot.name}`}
            >
              Details
            </Button>
            <Button
              variant={isFavorited ? 'danger' : 'outline-danger'}
              size="sm"
              onClick={() => onToggleFavorite(spot.id)}
              aria-label={isFavorited ? `Remove ${spot.name} from favorites` : `Save ${spot.name} to favorites`}
            >
              {isFavorited ? '♥' : '♡'}
            </Button>
          </Stack>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SpotCard;
