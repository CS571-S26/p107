import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

function NavBar({ favoritesCount }) {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span style={{ color: '#c5a028', fontWeight: 700, fontSize: '1.3rem' }}>
            📍 SpotFinder
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active fw-semibold' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/spots"
              className={location.pathname === '/spots' ? 'active fw-semibold' : ''}
            >
              Study Spots
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favorites"
              className={location.pathname === '/favorites' ? 'active fw-semibold' : ''}
            >
              Favorites{' '}
              {favoritesCount > 0 && (
                <Badge bg="danger" pill style={{ fontSize: '0.7rem' }}>
                  {favoritesCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
