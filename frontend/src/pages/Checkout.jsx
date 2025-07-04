import { useCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';

function Checkout() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2 className="mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} x {item.quantity}
                <div>
                  <span className="me-3">${item.price * item.quantity}</span>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>

          {/* Clear All Button */}
          <Button variant="warning" onClick={clearCart}>
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
