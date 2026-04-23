import { Form, Stack } from 'react-bootstrap';

function FilterBar({ noiseFilter, setNoiseFilter, outletsOnly, setOutletsOnly, sortBy, setSortBy }) {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap mb-4">
      <Form.Group controlId="noise-filter" className="d-flex align-items-center gap-2">
        <Form.Label className="mb-0 fw-semibold">Noise:</Form.Label>
        <Form.Select
          size="sm"
          value={noiseFilter}
          onChange={(e) => setNoiseFilter(e.target.value)}
          style={{ width: 'auto' }}
        >
          <option value="All">All</option>
          <option value="Quiet">Quiet</option>
          <option value="Moderate">Moderate</option>
          <option value="Loud">Loud</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="sort-filter" className="d-flex align-items-center gap-2">
        <Form.Label className="mb-0 fw-semibold">Sort:</Form.Label>
        <Form.Select
          size="sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ width: 'auto' }}
        >
          <option value="default">Default</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
          <option value="name-asc">Name: A–Z</option>
          <option value="name-desc">Name: Z–A</option>
        </Form.Select>
      </Form.Group>

      <Form.Check
        type="checkbox"
        id="outlets-filter"
        label="Outlets Only"
        checked={outletsOnly}
        onChange={(e) => setOutletsOnly(e.target.checked)}
        className="fw-semibold"
      />
    </Stack>
  );
}

export default FilterBar;
