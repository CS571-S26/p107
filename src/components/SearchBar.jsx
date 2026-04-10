import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ value, onChange }) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="search-icon">🔍</InputGroup.Text>
      <Form.Control
        placeholder="Search study spots by name or location..."
        aria-label="Search"
        aria-describedby="search-icon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
