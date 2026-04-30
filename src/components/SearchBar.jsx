import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ value, onChange }) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text aria-hidden="true">🔍</InputGroup.Text>
      <Form.Control
        id="spot-search"
        placeholder="Search study spots by name or location..."
        aria-label="Search study spots by name or location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
