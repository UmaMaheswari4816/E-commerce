import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if(!email) navigate("/login");
  }, [navigate])
  

  const [paymentOption, setPaymentOption] = useState("");
   


  
 
  const [errors, setErrors] = useState({}); // State to hold validation errors
  //useEffect(() => {
    // Retrieve the email from local storage
    //const storedEmail = localStorage.getItem(email);
   // if (storedEmail) {
      //setEmail(storedEmail);
      //console.log("Email:", storedEmail); // Print the email to the console
    //}
  //}, []);
  //console.log(email);
  // const history = useHistory();

  // Handle place order logic

  const validateForm = () => {
    const errors = {};
    if (!formData.streetAddress.trim()) {
      errors.streetAddress = "Street Address is required";
    }
    if (!formData.city.trim()) {
      errors.city = "City is required";
    }
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }
    if (!formData.postalCode.trim()) {
      errors.postalCode = "Postal Code is required";
    }
    if (!paymentOption) {
      errors.paymentOption = "Payment Mode is required";
    }

    // Validate credit card details if payment option is credit
    if (paymentOption === "credit") {
      if (formData.cardNumber.trim().length !== 16) {
        errors.cardNumber = "Card Number must be 16 digits";
      }
      // Validate expiration date
      // Example: Check if expiration date is not in the past
      const currentDate = new Date();
      const expiryDate = new Date(formData.expiryDate);
      if (expiryDate < currentDate) {
        errors.expiryDate = "Expiration Date must be in the future";
      }
      if (formData.cvv.trim().length !== 3) {
        errors.cvv = "CVV must be 3 digits";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    const isValid = validateForm();
    if (isValid) {
      if (paymentOption === "cod" || paymentOption === "credit") {
        alert("Order placed successfully!");
        fetch(`http://172.172.194.186:8080/mail`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: localStorage.getItem("email") }),
        })
          .then((response) => {
            
            if (response.ok) {
              alert("Order confirmation email sent successfully!");
              
            } else {
              throw new Error("Failed to send order confirmation email");
            }
            localStorage.removeItem("cartItems");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Failed to send order confirmation email. Please try again.");
          });
      }
    }
  };

  const handlePaymentOption = (e) => {
    const selectedPaymentOption = e.target.value;
    setPaymentOption(selectedPaymentOption);

    setErrors({
      ...errors,
      paymentOption: "",
    });

    if (selectedPaymentOption !== "credit") {
      setFormData({
        ...formData,
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
    }
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log(totalPrice);

  // useEffect to update orderDetails when totalPrice changes

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
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
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.streetAddress ? 'border-red-500' : ''}`}"
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.streetAddress}
                </p>
              )}
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
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.city ? 'border-red-500' : ''}`}"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
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
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.postalcode ? 'border-red-500' : ''}`}"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
              )}
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
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.country ? 'border-red-500' : ''}`}"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
          </form>
        </div>

        <div className="w-1/2 pl-4 border rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Mode Of Payment </h3>
          

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
                    onChange={handlePaymentOption}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Credict Card
                </label>
                {/* Credit card form */}
                {paymentOption === "credit" && (
                  <div className="w-1/2 pr-4 border rounded-md p-4">
                    {/* <h3 className="text-lg font-semibold mb-2">Credit Card Details</h3>*/}
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          minLength={16}
                          maxLength={16}
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          autoComplete="cc-number"
                          required={paymentOption === "credit"}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.cardNumber ? 'border-red-500' : ''}"
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="expiryDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiry Date
                        </label>
                        <input
                          type="date"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          autoComplete="expiryDate"
                          required={paymentOption === "credit"}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.expiryDate ? 'border-red-500' : ''}`}"
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          minLength={3}
                          maxLength={3}
                          value={formData.cvv}
                          onChange={handleChange}
                          autoComplete="cvv"
                          required={paymentOption === "credit"}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.cvv ? 'border-red-500' : ''}`}"
                         
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <br />

              <div>
                <label>
                  <input
                    type="radio"
                    checked={paymentOption === "emi"}
                    value="emi"
                    onChange={handlePaymentOption}
                  />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; EMI
                </label>
              </div>
            </div>
          </form>
          {errors.paymentOption && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>
          )}
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
