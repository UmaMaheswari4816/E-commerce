
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './RegisterLogin.css'; // Import the CSS file for styling
//import { HomeCarosal } from "./HomeCarosal";


const LoginF = () => {
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
    //axios.post("http://localhost:8080/login",data).then((resp) => {
    // console.log(resp.data);
    // if (resp.data === '200') navigate("/home");
    // else alert(resp.data.message);
    //});

    fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userData)
    }).then(async (resp)=>{
      const data = await resp.json()
      console.log(data)
      if(data.status === '200') navigate("/")
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
        <button type="submit">Login</button>
      </form>
      <div>

      </div>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
            <p>
                Not have an account yet? <a href="/register" style={{ color: "red" }}>Register</a>
            </p>
        </div>
    </div>
  );
};

export default LoginF;
