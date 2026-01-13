import React from 'react';
import { GitBranch } from 'lucide-react';
import './NetworkPeering.css';

const NetworkPeering = () => {
  return (
    <div className="network-peering-page">
      <div className="peers-header">
        <div className="peers-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>Network peering</h1>
        </div>
        <p className="peers-description">
          Network peerings are used to enable traffic between two networks that can be on different main accounts. The peering must be established both ways before it is considered active. Peering is only supported between networks of type private. You should only create peering between accounts and networks you trust. There is no limits on what traffic can flow. The server firewall has no effect for private type networks.
        </p>

        <div className="peers-actions">
           <button className="btn-create-peering">Create network peering</button>
           <span className="price-info">
             <span className="price-val">€0.00</span> Network peering is free of charge.
           </span>
        </div>
      </div>

      <div className="peers-empty-state">
         <h3>No network peering pairs created yet.</h3>
         <p>You can create a Network peering using the button above.</p>
      </div>
    </div>
  );
};

export default NetworkPeering;
