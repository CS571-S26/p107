import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #c5102e 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}
    >
      <Container className="text-center">
        <h1 className="display-4 fw-bold mb-3">{title}</h1>
        <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          {subtitle}
        </p>
        <Button as={Link} to={ctaLink} variant="warning" size="lg" className="fw-bold px-5">
          {ctaText}
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
