import { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import spots from '../data/spots';
import SpotCard from '../components/SpotCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

function StudySpotsPage({ favorites, onToggleFavorite }) {
  const [search, setSearch] = useState('');
  const [noiseFilter, setNoiseFilter] = useState('All');
  const [outletsOnly, setOutletsOnly] = useState(false);

  const filtered = spots.filter((spot) => {
    const matchSearch =
      spot.name.toLowerCase().includes(search.toLowerCase()) ||
      spot.location.toLowerCase().includes(search.toLowerCase());
    const matchNoise = noiseFilter === 'All' || spot.noiseLevel === noiseFilter;
    const matchOutlets = !outletsOnly || spot.outlets;
    return matchSearch && matchNoise && matchOutlets;
  });

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-1">Study Spots</h2>
      <p className="text-muted mb-4">
        Explore {spots.length} study locations across UW–Madison campus.
      </p>

      <SearchBar value={search} onChange={setSearch} />
      <FilterBar
        noiseFilter={noiseFilter}
        setNoiseFilter={setNoiseFilter}
        outletsOnly={outletsOnly}
        setOutletsOnly={setOutletsOnly}
      />

      {filtered.length === 0 ? (
        <Alert variant="info">No spots match your filters. Try adjusting your search.</Alert>
      ) : (
        <Row xs={1} sm={2} lg={3} className="g-4">
          {filtered.map((spot) => (
            <Col key={spot.id}>
              <SpotCard
                spot={spot}
                isFavorited={favorites.includes(spot.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default StudySpotsPage;
