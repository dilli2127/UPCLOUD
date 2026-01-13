import React from 'react';
import { GitBranch } from 'lucide-react';
import './NetworkNATGateways.css';

const NetworkNATGateways = () => {
  return (
    <div className="nat-page">
      <div className="nat-header">
        <div className="nat-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>NAT Gateways</h1>
        </div>
        <div className="nat-description">
          <p>NAT Gateways route outbound internet connectivity for Cloud Servers without dedicated public IP addresses.</p>
          <p>A NAT Gateway is connected to an SDN Private Network via an SDN Router. The default route on the Cloud Servers is then changed to utilise that NAT Gateway.</p>
        </div>

        <div className="nat-actions">
           <button className="btn-create-nat">Create NAT Gateway</button>
        </div>
      </div>

      <div className="nat-empty-state">
         <h3>No NAT Gateways set up yet</h3>
         <p>Create new NAT Gateway for your SDN Router for routing SDN Private Networks</p>
      </div>
    </div>
  );
};

export default NetworkNATGateways;
