import { Card, Badge, Button, Stack } from 'react-bootstrap';

const noiseBadgeColor = {
  Quiet: 'success',
  Moderate: 'warning',
  Loud: 'danger',
};

function SpotCard({ spot, isFavorited, onToggleFavorite, onViewDetails }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={spot.image}
        alt={spot.name}
        style={{ height: '180px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => onViewDetails(spot)}
        onError={(e) => {
          e.target.src = 'https://placehold.co/400x180?text=Study+Spot';
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{spot.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
          📍 {spot.location}
        </Card.Subtitle>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-2">
          <Badge bg={noiseBadgeColor[spot.noiseLevel]}>{spot.noiseLevel}</Badge>
          {spot.outlets && <Badge bg="secondary">🔌 Outlets</Badge>}
          {spot.tags.map((tag) => (
            <Badge bg="light" text="dark" key={tag} className="border">
              {tag}
            </Badge>
          ))}
        </Stack>

        <div className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>
          ⏰ {spot.hours}
        </div>
        <div className="mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
          💺 Seating: {spot.seating}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto gap-2">
          <span className="fw-semibold text-warning">★ {spot.rating.toFixed(1)}</span>
          <Stack direction="horizontal" gap={2}>
            <Button variant="outline-secondary" size="sm" onClick={() => onViewDetails(spot)}>
              Details
            </Button>
            <Button
              variant={isFavorited ? 'danger' : 'outline-danger'}
              size="sm"
              onClick={() => onToggleFavorite(spot.id)}
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
