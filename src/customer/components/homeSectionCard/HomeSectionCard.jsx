import React, { useState } from 'react';

const HomeSectionCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const item = {
      ...product,
      quantity:1
    }
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setIsModalOpen(true); // Show the modal
  };

  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img className="object-cover object-top w-full h-full" src={product.image} alt="" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text">{product.brand}</h3>
        <p>{product.title}</p>
        <p>Price: ₹{product.price}</p>
        <button 
          onClick={handleAddToCart}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
      {/* Modal */}
      <div className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 ${isModalOpen ? 'flex' : 'hidden'}`}>
        <div className="relative p-8 mx-auto max-w-md">
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg font-semibold mb-4">Item added to cart</p>
            <button onClick={() => setIsModalOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
