import React, { useState } from 'react';
import './RegisterLogin.css'; // Import the CSS file for styling


import { useNavigate } from "react-router-dom";

const RegisterF = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleClick=(e)=>{
    e.preventDefault()
    const customer={name,phone,email,password,confirmPassword}
    console.log(customer);
    localStorage.setItem('Customer', customer);

    console.log("hello")
    fetch("http://localhost:8080/addCustomer",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(customer)
    }).then((resp)=>{
      console.log(customer.email);
      console.log("new student added");
      if(resp.status===200){
        alert("Register Success");

        // Store the email in local storage
        localStorage.setItem('registeredEmail', email);

        navigate("/login");
      }
      else{
        alert("User already exit please Login to your Account");
        navigate("/login");
      }
    })
    .catch(error=>{
      console.error('Error :',error);
    });
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Add your registration logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
      <div>
          <label>Name:</label>
          <input
            type="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit" onClick={handleClick}>Register</button>
      </form>
      
    </div>
  );
};

export default RegisterF;
