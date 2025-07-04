import { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function MenuItem({ item }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Price: ${item.price}</Card.Text>

         {/* Compact Row for Quantity and Button */}
        <Form.Group className="mb-3" controlId={`quantity-${item.id}`}>
            {/* <Col xs={3}> */}
              <Form.Label className="mb-0 me-2">Quantity:</Form.Label>
            {/* </Col> */}
            
            <Row className="align-items-center g-2 mb-3">
              <Col xs={1}>
                <Button variant="secondary" size="sm" onClick={decrement}>-</Button>
              </Col>
              <Col xs="auto">
                <span className="mx-2">{quantity}</span>
              </Col>
              <Col xs={1}>
                <Button variant="secondary" size="sm" onClick={increment}>+</Button>
              </Col>
              <Col xs={4} className='ms-auto me-3'>
                <Button variant="primary" size="sm" onClick={() => addToCart(item, quantity)} className="w-100">
                  Add to Cart
                </Button>
              </Col>
            </Row>

        </Form.Group>

      </Card.Body>
    </Card>
  );
}

export default MenuItem;
