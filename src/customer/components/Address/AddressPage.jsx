import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
const AddressPage = () => {
 
  const [formData, setFormData] = useState({
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // State for order details
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 100,
    discount: 0,
    shipping: 50,
    total: 150
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle place order logic
  const handlePlaceOrder = async () => {
    
    };




  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Address and Payment Information</h2>
      {/* Address form */}
      {/* Payment information */}
      <div className="flex justify-between">
        {/* Address form */}
        <div className="w-1/2 pr-4 border rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                autoComplete="street-address"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="city"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">postalCode</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                autoComplete="postalCode"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                autoComplete="country"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            
          </form>
        </div>
        {/* Payment information */}
        <div className="w-1/2 pl-4 border rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
          <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                autoComplete="cc-number"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expairy Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                autoComplete="expiryDate"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cardNumber}
                onChange={handleChange}
                autoComplete="cvv"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          
        </div>
      </div>
      {/* Order details (items, quantities, prices, discounts, shipping charges) */}
      <div className="mt-8 border rounded-md p-4">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        {/* Order details content */}
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>₹{orderDetails.subtotal.toFixed(2)}</span>
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
          <span>₹{orderDetails.total.toFixed(2)}</span>
        </div>
      </div>
      {/* Place order button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
