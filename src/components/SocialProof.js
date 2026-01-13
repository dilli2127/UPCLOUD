import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const logos = ['Telia', 'Solita', 'Aiven', 'Visma', 'Hostaway', 'Haltu'];

  return (
    <section className="social-proof">
      <div className="container">
        <p className="social-proof-title">Trusted by 10,000+ organizations globally</p>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
