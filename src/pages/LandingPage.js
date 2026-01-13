import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default LandingPage;
