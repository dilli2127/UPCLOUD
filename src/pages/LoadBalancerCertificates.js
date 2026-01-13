import React from 'react';
import { AlertCircle, Search } from 'lucide-react';
import './LoadBalancerCertificates.css';

const LoadBalancerCertificates = () => {
  return (
    <div className="lb-certs-page">
      <div className="lbc-header">
         <div className="lbc-title">
           <AlertCircle size={28} className="lbc-icon" />
           <h1>Certificates</h1>
         </div>
         <p className="lbc-desc">
           Certificate bundles are managed certificates that allow you to easily enable HTTPS support on the Load Balancer frontend. You can create SSL certificate bundles by providing your own certificates or we can create them for you dynamically. <a href="#">Learn more</a>
         </p>
         
         <div className="lbc-actions">
            <button className="btn-create-cert">Create certificates bundle</button>
         </div>
         
         <div className="lbc-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by name or domain" className="search-input" />
         </div>
      </div>

      <div className="lbc-content">
         <div className="lbc-loading">
            <div className="spinner"></div>
         </div>
      </div>
    </div>
  );
};

export default LoadBalancerCertificates;
