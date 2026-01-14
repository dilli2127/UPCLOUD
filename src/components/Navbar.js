import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS" 
              style={{ height: '24px', filter: 'brightness(0) invert(1)' }} 
            />
            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white' }}>AWS Private Cloud</span>
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-menu">
            <div className="nav-item">
              <a href="#products">Products <ChevronDown size={14} /></a>
            </div>
            <div className="nav-item">
              <a href="#pricing">Pricing</a>
            </div>
            <div className="nav-item">
              <a href="#solutions">Solutions <ChevronDown size={14} /></a>
            </div>
            <div className="nav-item">
              <a href="#resources">Resources <ChevronDown size={14} /></a>
            </div>
            <div className="nav-item">
              <a href="#partners">Partners <ChevronDown size={14} /></a>
            </div>
            <div className="nav-item">
              <a href="#company">Company <ChevronDown size={14} /></a>
            </div>
          </div>
          
          <div className="nav-buttons">
            <Link to="/login" className="login-btn">LOGIN</Link>
            <button className="btn btn-primary btn-sm uppercase">SIGN UP</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
