import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className = "container">
        <div className="logo">
            <span>Eventify</span>
        </div>
    <div className="login-container">
      <div className="login-form">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="text" id="email" className="form-input" />

        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" id="password" className="form-input" />
        <button className='loginbutton'>Login</button>
      </div>

      <div className="form-links">
        
        <a href="#" className="form-link">Forgot your password?</a>
      </div>

      <div className="form-footer">
        <button>Sign up</button>
      </div>
    </div>
    </div>
  );
};

export default Login;
