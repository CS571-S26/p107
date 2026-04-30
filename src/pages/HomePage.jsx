import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';

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
      <HeroSection
        title="Find Your Perfect Study Spot"
        subtitle="SpotFinder helps UW–Madison students discover quiet corners, outlet-rich tables, and hidden gems across campus — all in one place."
        ctaText="Browse Study Spots"
        ctaLink="/spots"
      />

      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Why SpotFinder?</h2>
        <Row xs={1} md={3} className="g-4">
          {features.map((f) => (
            <Col key={f.title}>
              <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
            </Col>
          ))}
        </Row>
      </Container>

      <div style={{ background: '#f8f9fa', padding: '50px 0' }}>
        <Container className="text-center">
          <h2 className="fw-bold mb-3">Ready to find your spot?</h2>
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
