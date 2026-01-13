import React from 'react';
import { Database, Cloud, Box, Lock } from 'lucide-react';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    {
      name: 'Cloud Servers',
      description: 'Deploy faster than on your own hardware using our high performance Cloud Servers.',
      icon: <Cloud size={32} />
    },
    {
      name: 'Managed Databases',
      description: 'Let us handle the maintenance so you can focus on your code.',
      icon: <Database size={32} />
    },
    {
      name: 'Kubernetes',
      description: 'Fully managed Kubernetes service. Scale your applications with ease.',
      icon: <Box size={32} />
    },
    {
      name: 'Private Cloud',
      description: 'Dedicated hardware for your critical workloads with total isolation.',
      icon: <Lock size={32} />
    }
  ];

  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">Everything you need<br />to scale your business.</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-icon-wrapper">
                {product.icon}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="arrow-icon">&rarr;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
