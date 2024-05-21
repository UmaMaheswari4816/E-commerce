import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom directly

import { useLocation } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

const AddressPage = () => {
  // State for form fields
  const navigate = useNavigate(); 
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [paymentOption, setPaymentOption] = useState("");

  // const history = useHistory();

  // Handle place order logic
  const handlePlaceOrder = () => {
    if (paymentOption === "cod") {
      // Display a success message
      alert("Order placed successfully!");

      navigate('/');

      

      // Optionally, you can reset the form fields or perform any other actions here

      // Return early to prevent further execution
      return;
    }
  };

  const handlePaymentOption = (e) => {
    setPaymentOption(e.target.value);
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log(totalPrice);

  // State for order details
  const [orderDetails, setOrderDetails] = useState({
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: totalPrice,
  });

  // useEffect to update orderDetails when totalPrice changes

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Billing details</h2>
      {/* Address form */}
      {/* Payment information */}
      <div className="flex justify-between">
        {/* Address form */}
        <div className="w-1/2 pr-4 border rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                autoComplete="street-address"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="city"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                postalCode
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                autoComplete="postalCode"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
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

        <div className="w-1/2 pl-4 border rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Mode Of Payment </h3>
          {/*<div><div className="mb-4">
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

  </div>*/}

          <form>
            <div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="phonepe"
                    onChange={handlePaymentOption}
                    checked={paymentOption === "phonepe"}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; PhonePe
                </label>
              </div>
              <br />
              <div>
                <label>
                  <input
                    type="radio"
                    checked={paymentOption === "cod"}
                    value="cod"
                    onChange={handlePaymentOption}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Cash On Delivary
                </label>
              </div>
              <br />
              <div>
                <label>
                  <input
                    type="radio"
                    value="credit"
                    checked={paymentOption === "credit"}
                    onChange={handleChange}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Credict Card
                </label>
              </div>
              <br />
              <div>
                <label>
                  <input
                    type="radio"
                    checked={paymentOption === "emi"}
                    value="emi"
                    onChange={handleChange}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; EMI
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Order details (items, quantities, prices, discounts, shipping charges) 
      <div className="mt-8 border rounded-md p-4">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
       Order details content 
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
          <span>₹{totalPrice}</span>
        </div>
      </div> 
  Place order button  */}
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
