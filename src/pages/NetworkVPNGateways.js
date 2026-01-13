import React from 'react';
import { GitBranch } from 'lucide-react';
import './NetworkVPNGateways.css';

const NetworkVPNGateways = () => {
  return (
    <div className="vpn-page">
      <div className="vpn-header">
        <div className="vpn-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>VPN Gateways</h1>
        </div>
        <p className="vpn-description">
          VPN Gateways connect UpCloud SDN Private Networks to external VPN endpoints using IPSec site-to-site tunnels.
        </p>

        <div className="vpn-actions">
           <button className="btn-create-vpn">Create VPN Gateway</button>
        </div>
      </div>

      <div className="vpn-empty-state">
         <h3>No VPN Gateways set up yet</h3>
         <p>Create new VPN Gateway for your SDN Router</p>
      </div>
    </div>
  );
};

export default NetworkVPNGateways;
