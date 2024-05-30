
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './RegisterLogin.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const LoginF = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()

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

    // Add your login logic here
    //console.log('Email:', email);
    //console.log('Password:', password);

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setError('');

    const userData={email,password}
    
    fetch("http://172.172.194.196:8080/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userData)
    }).then(async (resp)=>{
      const data = await resp.json()
      console.log(resp.status)
      if(data.email) {

        localStorage.setItem("email", data.email)
        navigate("/")

      }
      else alert(data.message)
    })
    
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
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={handleSubmit}>Login</Link>
        
      </form>
      <div>

      </div>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
            <p>
                Not have an account yet? <Link to="/signup" style={{ color: "red" }}>Register</Link>
            </p>
        </div>
    </div>
  );
};

export default LoginF;
