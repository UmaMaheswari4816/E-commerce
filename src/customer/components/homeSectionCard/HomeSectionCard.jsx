import React from "react";

const HomeSectionCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
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
        {/* Call handleAddToCart function onClick */}
        <button onClick={handleAddToCart} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCard;
