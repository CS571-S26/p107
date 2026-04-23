import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#adb5bd', marginTop: 'auto', padding: '2rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <span style={{ color: '#c5a028', fontWeight: 700, fontSize: '1.1rem' }}>
              📍 SpotFinder
            </span>
            <p className="mt-1 mb-0" style={{ fontSize: '0.85rem' }}>
              Helping UW–Madison students find their perfect study spot.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0 text-md-center">
            <p className="mb-1 fw-semibold text-white" style={{ fontSize: '0.9rem' }}>Navigation</p>
            <div className="d-flex flex-column gap-1" style={{ fontSize: '0.85rem' }}>
              <Link to="/" className="text-secondary text-decoration-none">Home</Link>
              <Link to="/spots" className="text-secondary text-decoration-none">Study Spots</Link>
              <Link to="/favorites" className="text-secondary text-decoration-none">Favorites</Link>
            </div>
          </Col>
          <Col md={4} className="text-md-end">
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
              Built for CS571 · Spring 2026
            </p>
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
              University of Wisconsin–Madison
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
