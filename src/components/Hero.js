import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Global Cloud,<br/>European Excellence</h1>
          <p className="hero-subtitle">
            From freelancers to global brands, thousands of companies run their critical business on UpCloud.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start free trial with €250</button>
            <button className="btn btn-outline">Contact Sales</button>
          </div>
          <p className="hero-note">Free trial details: €250 credits for 30 days.</p>
        </div>
        <div className="hero-visual">
          {/* Abstract Cloud Graphic Representation */}
          <div className="cloud-graphic">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
