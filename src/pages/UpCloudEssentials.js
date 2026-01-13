import React from 'react';
import './UpCloudEssentials.css';

const UpCloudEssentials = () => {
  return (
    <div className="essentials-page">
      <div className="essentials-hero">
        <div className="essentials-hero-content">
          <h1 className="essentials-title">UpCloud Essentials</h1>
          
          <p className="essentials-description">
            Get instant access to the core building blocks of modern cloud infrastructure, completely for free! 
            Effortlessly deploy Load Balancers, NAT & VPN Gateways, and Managed Kubernetes control 
            planes, all with zero data transfer fees. Our mission is to empower you to launch, scale, and 
            secure your projects faster with predictable pricing and no hidden charges.
          </p>

          <p className="essentials-subtext">
            Get started with UpCloud Essentials and experience cloud as it should be.
          </p>
        </div>

        <div className="essentials-hero-visual">
           <div className="zero-cost-badge">
              <span>Zero</span>
              <span>Cost</span>
           </div>
           {/* Background decorative elements */}
           <div className="bg-deco-circle"></div>
           <div className="bg-deco-icon icon-k8s"></div>
        </div>
      </div>

      <div className="essentials-grid">
        <div className="essentials-card">
          <h3>Zero Data Transfer fees</h3>
          <p>
            Unlimited, zero-cost data transfer across all UpCloud products. No hidden fees, 
            just simple, predictable networking.
          </p>
        </div>

        <div className="essentials-card">
          <h3>Kubernetes Control Plane</h3>
          <p>
            Deploy Kubernetes clusters with a free managed control plane and zero data 
            transfer fees.
          </p>
        </div>

        <div className="essentials-card">
          <h3>Load Balancer</h3>
          <p>
            Distribute traffic and ensure high availability with a fully managed, free 
            Load Balancer.
          </p>
        </div>
        
         {/* Adding likely 4th card based on pattern, though not fully in screenshot, 
             usually NAT/VPN or Storage is mentioned in this context for UpCloud Essentials */}
        <div className="essentials-card">
          <h3>NAT & VPN Gateways</h3>
          <p>
             Secure your private networks and connect effortlessly with free functional 
             NAT and VPN Gateways.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpCloudEssentials;
