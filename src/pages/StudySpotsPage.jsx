import { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import spots from '../data/spots';
import SpotCard from '../components/SpotCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import SpotModal from '../components/SpotModal';

function StudySpotsPage({ favorites, onToggleFavorite }) {
  const [search, setSearch] = useState('');
  const [noiseFilter, setNoiseFilter] = useState('All');
  const [outletsOnly, setOutletsOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [selectedSpot, setSelectedSpot] = useState(null);

  const filtered = spots
    .filter((spot) => {
      const matchSearch =
        spot.name.toLowerCase().includes(search.toLowerCase()) ||
        spot.location.toLowerCase().includes(search.toLowerCase());
      const matchNoise = noiseFilter === 'All' || spot.noiseLevel === noiseFilter;
      const matchOutlets = !outletsOnly || spot.outlets;
      return matchSearch && matchNoise && matchOutlets;
    })
    .sort((a, b) => {
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      if (sortBy === 'rating-asc') return a.rating - b.rating;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
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
        sortBy={sortBy}
        setSortBy={setSortBy}
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
                onViewDetails={setSelectedSpot}
              />
            </Col>
          ))}
        </Row>
      )}

      <SpotModal
        spot={selectedSpot}
        show={!!selectedSpot}
        onHide={() => setSelectedSpot(null)}
        isFavorited={selectedSpot ? favorites.includes(selectedSpot.id) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </Container>
  );
}

export default StudySpotsPage;
