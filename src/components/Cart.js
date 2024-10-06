import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
      calculateTotalPrice(storedCart);
    };

    loadCart();
  }, []);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const proceedToCheckout = () => {
    window.location.href = `/payment?totalCost=${totalPrice}`;
  };

  return (
    <div>
      <Navbar />
      <div id="cart" className="container">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            <div id="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}.00</p>
                </div>
                <button className="remove" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
              
              ))}
            </div>

            <div id="total-price">
              <h3>Total Price: ₹{totalPrice}.00</h3>
            </div>

            <button
              id="checkout-button"
              onClick={proceedToCheckout}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
