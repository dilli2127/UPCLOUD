import React from 'react';
import { Server, ShieldCheck, Zap, Heart } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Truly Modern Cloud',
      description: 'Experience performance that outpaces the competition. Our proprietary MaxIOPS storage technology delivers industry-leading speed and reliability.',
      icon: <Zap size={40} />,
      link: 'Learn about performance'
    },
    {
      title: 'Unmatched Experience',
      description: 'Get 24/7 support from real humans, with an average response time of under 2 minutes. We don’t have tiered support – everyone gets the best.',
      icon: <Heart size={40} />,
      link: 'See our support'
    },
    {
      title: 'Your Data, Your Rules',
      description: 'We are sovereign and compliant. Your data stays where you want it to stay. GDPR compliant by design with data centers across the globe.',
      icon: <ShieldCheck size={40} />,
      link: 'Security & Compliance'
    },
    {
      title: 'No Hidden Costs',
      description: 'Predictable pricing without surprising bills. What you see is what you get. Inbound traffic is always free.',
      icon: <Server size={40} />,
      link: 'View Pricing'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title text-center">Why UpCloud?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="feature-link">{feature.link} &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
