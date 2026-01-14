import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            AWS Private Cloud
          </h1>
          <p className="hero-subtitle">
            Secure, scalable, and sovereign cloud infrastructure. Built for modern workloads, backed by 24/7 support.
          </p>
          <p className="hero-subtitle-2">
            Experience the power of private cloud computing.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary uppercase">START FREE TRIAL WITH €250</button>
            <button className="btn btn-outline uppercase">CONTACT SALES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
