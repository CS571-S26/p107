import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Stack } from 'react-bootstrap';

const features = [
  {
    icon: '🔍',
    title: 'Search & Filter',
    desc: 'Find spots by noise level, outlet availability, and more.',
  },
  {
    icon: '♥',
    title: 'Save Favorites',
    desc: 'Bookmark your go-to study spots for quick access anytime.',
  },
  {
    icon: '📍',
    title: 'Campus Locations',
    desc: 'Explore study spaces all across UW–Madison campus.',
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #c5102e 100%)',
          color: 'white',
          padding: '80px 0 60px',
        }}
      >
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3">
            Find Your Perfect Study Spot 📍
          </h1>
          <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            SpotFinder helps UW–Madison students discover quiet corners, outlet-rich
            tables, and hidden gems across campus — all in one place.
          </p>
          <Button
            as={Link}
            to="/spots"
            variant="warning"
            size="lg"
            className="fw-bold px-5"
          >
            Browse Study Spots
          </Button>
        </Container>
      </div>

      {/* Features */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Why SpotFinder?</h2>
        <Row xs={1} md={3} className="g-4">
          {features.map((f) => (
            <Col key={f.title}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body className="py-4">
                  <div style={{ fontSize: '2.5rem' }}>{f.icon}</div>
                  <Card.Title className="fw-bold mt-2">{f.title}</Card.Title>
                  <Card.Text className="text-muted">{f.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA */}
      <div style={{ background: '#f8f9fa', padding: '50px 0' }}>
        <Container className="text-center">
          <h3 className="fw-bold mb-3">Ready to find your spot?</h3>
          <p className="text-muted mb-4">
            Browse all campus study locations or check your saved favorites.
          </p>
          <Stack direction="horizontal" gap={3} className="justify-content-center flex-wrap">
            <Button as={Link} to="/spots" variant="dark" size="lg">
              View All Spots
            </Button>
            <Button as={Link} to="/favorites" variant="outline-dark" size="lg">
              My Favorites
            </Button>
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
