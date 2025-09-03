import Dropdown from 'react-bootstrap/Dropdown';

function DropdownComponent() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Default sorting
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Default sorting</Dropdown.Item>
        <Dropdown.Item >Sort by popularity</Dropdown.Item>
        <Dropdown.Item >Sort by average rating</Dropdown.Item>
        <Dropdown.Item >Sort by latest</Dropdown.Item>
        <Dropdown.Item >Sort by price: low to high</Dropdown.Item>
        <Dropdown.Item >Sort by price: high to low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;