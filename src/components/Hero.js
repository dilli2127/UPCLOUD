import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: "url('https://upcloud.com/media/Hero-Home-3.jpg')" }}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Global Cloud,<br/>European Excellence</h1>
          <p className="hero-subtitle">
            Lightning fast, highly scalable, sovereign cloud. Built for modern workloads,
            backed by 24/7 support.
          </p>
          <p className="hero-subtitle-2">
            Give other servers the boot. This is cloud as it should be.
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
