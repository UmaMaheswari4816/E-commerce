import React, { useState } from 'react';
import './CartPage.css'; // Import CSS file for CartPage styling

const CartPage = () => {
  // State to hold the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="cart-container"> {/* Apply container class */}
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p> 
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <span>{item.name} - ₹{item.price}</span>
                  <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button> {/* Apply remove button class */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="total-price">Total Price: ₹{totalPrice}</p> {/* Apply total price class */}
      {cartItems.length > 0 && ( 
        <div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
