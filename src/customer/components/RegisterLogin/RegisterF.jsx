import React, { useState } from 'react';
import './RegisterLogin.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import LoginF from './LoginF';
const RegisterF = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
// Simulate successful login and store user details in local storage
const userDetails = {
  email,
  name,
  phone
};
localStorage.setItem('userDetails', JSON.stringify(userDetails));
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
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register</Link>
      </form>
    </div>
  );
};

export default RegisterF;
