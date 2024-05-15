import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

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
  const existingItemIndex = updatedCartItems.findIndex(item => item.title === cartItems[index].title);
  if (existingItemIndex !== -1) {
    updatedCartItems[existingItemIndex].quantity++;
  } else {
    updatedCartItems.push({ ...cartItems[index], quantity: 1 });
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

  const handleCheckout = () => {
    // Handle checkout
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

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
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Total: ₹{totalPrice}</p>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
