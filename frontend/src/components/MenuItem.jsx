import { Card, Button } from 'react-bootstrap';

function MenuItem({ item }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Price: ${item.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuItem;
