import React from 'react';
import './UpCloudEssentials.css';

const UpCloudEssentials = () => {
  return (
    <div className="essentials-container">
      <div className="essentials-header-hero">
        <div className="essentials-hero-content">
          <h1 className="essentials-title">AWS Essentials</h1>
          <p className="essentials-subtitle">
            Simple, affordable, and reliable cloud computing for individuals and small businesses.
          </p>
          <button className="btn-essentials-cta">Get Started for Free</button>
        </div>
      </div>

      <div className="essentials-intro">
        <div className="container">
          <h2>Cloud made simple</h2>
          <p>
            Get started with AWS Essentials and experience cloud as it should be.
            No complex configurations, just pure performance.
          </p>
        </div>
      </div>

      <div className="essentials-benefits container">
        <div className="benefit-card">
          <h3>Easy to easy</h3>
          <p>
            Launch your server in under 45 seconds. Our streamlined control panel makes management a breeze.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Predictable Pricing</h3>
          <p>
            Packages start at just €3/month. No surprises, no hidden costs.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Free Global Transfer</h3>
          <p>
            Unlimited, zero-cost data transfer across all AWS Private Cloud products. No hidden fees, 
            just freedom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpCloudEssentials;
