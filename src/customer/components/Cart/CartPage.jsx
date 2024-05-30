import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom directly
import AddressPage from "../Address/AddressPage";
import { useLocation } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const dataToSend = 'Hello from source component';
  console.log(dataToSend);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Ensure price is a number
    const updatedCartItems = storedCartItems.map(item => {
      const parsedItem = {
        ...item,
        price: parseFloat(item.price),
      };
      console.log(parsedItem); // Log parsed item
      return parsedItem;
    });
    setCartItems(updatedCartItems);
  }, []);

  const handleAddMore = (index) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(item => item.id === cartItems[index].id);
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity++;
    } else {
      updatedCartItems.push({ ...cartItems[index], quantity: 1});
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleRemoveOne = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const total=totalPrice;
  console.log(totalPrice);
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: totalPrice,
  }); 

  
  
  
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex justify-center items-center">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Brand: {item.brand}</p> 
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleRemoveOne(index)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full mr-2"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleAddMore(index)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full ml-2"
                    >
                      +
                    </button>
                    
                  </div>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
        </>
      )}
      <div className="mt-8 border rounded-md p-4">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        {/* Order details content */}
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Discount</span>
          <span>₹{orderDetails.discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>₹{orderDetails.shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>
      <div className="flex justify-between mt-4">
            {/*<p className="font-semibold">Total: ₹{totalPrice}</p>*/}
            <p className="font-semibold"> </p>
            <Link to={{ pathname: "/address", state: { data: dataToSend }} }className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Checkout</Link>
          </div>
      
    </div>
    
  );
};

export default CartPage;
