import React, { useState } from 'react';
import { User, Lock, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    console.log('Logging in with:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS" 
              style={{ height: '32px' }} 
            />
            <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#111' }}>Private Cloud</span>
          </a>
        </div>

        <div className="login-form-wrapper">
          <h1>Welcome! Log in to access your cloud</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-icon">
                <User size={20} />
              </div>
              <div className="input-field">
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={formData.username}
                  onChange={handleChange}
                  placeholder=" " 
                  required 
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon">
                <Lock size={20} />
              </div>
              <div className="input-field">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" " 
                  required 
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot your username or password?</a>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-login">Log In</button>
            </div>
          </form>

          <div className="login-footer">
            <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
            
            <div className="legal-links">
              <a href="#">Terms of service <ArrowUpRight size={12} /></a>
              <a href="#">Privacy policy <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <div className="abstract-bg">
          {/* We will use CSS to create the abstract effect or a background image */}
        </div>
      </div>
    </div>
  );
};

export default Login;
