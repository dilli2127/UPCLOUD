import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Cloud Servers</a></li>
              <li><a href="#">Managed Databases</a></li>
              <li><a href="#">Object Storage</a></li>
              <li><a href="#">Private Cloud</a></li>
              <li><a href="#">Network</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">For Business</a></li>
              <li><a href="#">For Developers</a></li>
              <li><a href="#">For Partners</a></li>
              <li><a href="#">Managed Hosting</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>
          <div className="footer-col newsletter-col">
            <h4>Stay Connected</h4>
            <div className="social-links">
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Github size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
            </div>
            <p style={{ marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} UpCloud Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
