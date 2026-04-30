import { Modal, Button, Badge, Stack, Row, Col } from 'react-bootstrap';

const noiseBadgeColor = {
  Quiet: 'success',
  Moderate: 'warning',
  Loud: 'danger',
};

const noiseDesc = {
  Quiet: 'Very low noise — great for deep focus.',
  Moderate: 'Some background noise — suitable for most studying.',
  Loud: 'High noise level — best for casual work or group projects.',
};

// Dark gold — passes WCAG AA (4.5:1) on white background
const RATING_COLOR = '#7a5c00';

function SpotModal({ spot, show, onHide, isFavorited, onToggleFavorite }) {
  if (!spot) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered aria-labelledby="spot-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="spot-modal-title" className="fw-bold">{spot.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <img
          src={spot.image}
          alt={`${spot.name} study space`}
          style={{ width: '100%', height: '240px', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://placehold.co/800x240?text=Study+Spot';
          }}
        />
        <div className="p-4">
          <p className="text-muted mb-3">
            <span aria-hidden="true">📍 </span>{spot.location}
          </p>

          <Row className="mb-4">
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Noise Level</p>
              <Badge bg={noiseBadgeColor[spot.noiseLevel]} className="me-2">
                {spot.noiseLevel}
              </Badge>
              <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                {noiseDesc[spot.noiseLevel]}
              </span>
            </Col>
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Power Outlets</p>
              <span>{spot.outlets ? 'Available' : 'Not available'}</span>
            </Col>
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Seating</p>
              <span>{spot.seating}</span>
            </Col>
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Hours</p>
              <span>{spot.hours}</span>
            </Col>
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Rating</p>
              <span
                className="fw-bold"
                style={{ color: RATING_COLOR }}
                aria-label={`${spot.rating.toFixed(1)} out of 5`}
              >
                ★ {spot.rating.toFixed(1)}
              </span>
              <span className="text-muted ms-1" style={{ fontSize: '0.85rem' }}> / 5.0</span>
            </Col>
            <Col sm={6} className="mb-3">
              <p className="fw-semibold mb-1">Tags</p>
              <Stack direction="horizontal" gap={1} className="flex-wrap">
                {spot.tags.map((tag) => (
                  <Badge bg="light" text="dark" key={tag} className="border">
                    {tag}
                  </Badge>
                ))}
              </Stack>
            </Col>
          </Row>

          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(spot.name + ' ' + spot.location + ' Madison WI')}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-secondary btn-sm"
            aria-label={`View ${spot.name} on Google Maps (opens in new tab)`}
          >
            <span aria-hidden="true">🗺️ </span>View on Google Maps
          </a>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant={isFavorited ? 'danger' : 'outline-danger'}
          onClick={() => onToggleFavorite(spot.id)}
          aria-label={isFavorited ? `Remove ${spot.name} from favorites` : `Save ${spot.name} to favorites`}
        >
          {isFavorited ? '♥ Remove from Favorites' : '♡ Save to Favorites'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SpotModal;
