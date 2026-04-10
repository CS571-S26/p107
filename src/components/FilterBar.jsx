import { Form, Stack } from 'react-bootstrap';

function FilterBar({ noiseFilter, setNoiseFilter, outletsOnly, setOutletsOnly }) {
  return (
    <Stack direction="horizontal" gap={4} className="flex-wrap mb-4">
      <Form.Group controlId="noise-filter" className="d-flex align-items-center gap-2">
        <Form.Label className="mb-0 fw-semibold">Noise Level:</Form.Label>
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

      <Form.Check
        type="checkbox"
        id="outlets-filter"
        label="Outlets Available"
        checked={outletsOnly}
        onChange={(e) => setOutletsOnly(e.target.checked)}
        className="fw-semibold"
      />
    </Stack>
  );
}

export default FilterBar;
