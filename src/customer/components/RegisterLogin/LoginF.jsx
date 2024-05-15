import React, { useState } from 'react';
import './RegisterLogin.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const LoginF = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Login</Link>
        
      </form>
    </div>
  );
};

export default LoginF;
