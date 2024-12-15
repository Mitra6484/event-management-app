import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>Eventify</span>
      </div>
      <div className="register-container">
        <div className="register-form">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-input" />

          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-input" />

          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-input" />

          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" className="form-input" />

          <button className='register-button'>Register</button>
        </div>

        <div className="form-links">
          <a href="/login" className="form-link">Already have an account? Login</a>
        </div>

        <div className="form-footer">
          <button>Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
