import { Card } from 'react-bootstrap';

function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="h-100 text-center shadow-sm border-0">
      <Card.Body className="py-4">
        <div style={{ fontSize: '2.5rem' }} aria-hidden="true">{icon}</div>
        <Card.Title as="h3" className="fw-bold mt-2" style={{ fontSize: '1.1rem' }}>
          {title}
        </Card.Title>
        <Card.Text className="text-muted">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
