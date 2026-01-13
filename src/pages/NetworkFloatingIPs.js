import React from 'react';
import './NetworkFloatingIPs.css';

const NetworkFloatingIPs = () => {
  return (
    <div className="floating-ips-page">
      <div className="fip-header">
        <div className="fip-title">
           <div className="icon-box-ip">
             <span className="ip-text">IP</span>
           </div>
           <h1>Floating IPs</h1>
        </div>
        <p className="fip-description">
          Floating IP addresses are public IPv4 addresses that can be attached to any cloud server within the same zone. It directs traffic to one server at a time and can be moved to point to another server within the same zone seamlessly, without needing to restart the server.
        </p>
        <p className="fip-description">
          Floating IP addresses attached to our Load balancer services are free of charge.
        </p>
        <p className="fip-link">
          See <a href="#">Floating IP configuration tutorial</a> to set up the Floating IP on your cloud server.
        </p>

        <div className="fip-actions">
           <button className="btn-new-fip">New Floating IP...</button>
           <span className="price-info">
             <span className="price-val">€3.15</span> per month per IP
           </span>
           <span className="monthly-total">Total monthly <span className="purple-total">€0.00</span></span>
        </div>
      </div>

      <div className="fip-empty-state">
         <h3>No Floating IP addresses yet</h3>
         <p>Start creating Floating IPs with the button above.</p>
      </div>
    </div>
  );
};

export default NetworkFloatingIPs;
