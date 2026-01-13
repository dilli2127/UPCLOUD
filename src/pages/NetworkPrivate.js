import React from 'react';
import { GitBranch, Copy, ChevronRight } from 'lucide-react';
import privateNetworkData from '../data/network_private.json';
import './NetworkPrivate.css';

const NetworkPrivate = () => {
  return (
    <div className="network-private-page">
      <div className="np-header">
        <div className="np-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>Private networks</h1>
        </div>
        <p className="np-description">
          The following listing shows the private networks on your account. SDN private networks exist within data centres and are recommended for production use. The Utility network connects all cloud servers globally under your account with easy-to-use and secure connections.
        </p>

        <div className="np-actions">
           <button className="btn-create-pn">Create Private network</button>
           <span className="price-info">
             <span className="price-val">€0.00</span> SDN Private Networks are free of charge.
           </span>
        </div>
      </div>

      <div className="pnet-list">
         <div className="list-header">
            <div className="col-pnet-name">NAME <span className="sort-arrow">▲</span></div>
            <div className="col-pnet-ip">IP NETWORK <span className="sort-arrow">▼</span></div>
            <div className="col-pnet-feat">FEATURES</div>
            <div className="col-pnet-res">RESOURCES</div>
            <div className="col-pnet-loc">LOCATION <span className="sort-arrow">▼</span></div>
            <div className="col-pnet-arrow"></div>
         </div>

         {privateNetworkData.map((item, index) => (
           <div className="pnet-row" key={index}>
              <div className="col-pnet-name">
                 <div className="pnet-name-main">{item.name}</div>
                 {item.uuid ? (
                    <div className="pnet-uuid">
                       {item.uuid} <Copy size={12} className="copy-icon" />
                    </div>
                 ) : (
                    <div className="pnet-desc">{item.desc}</div>
                 )}
              </div>
              
              <div className="col-pnet-ip">
                 <div>{item.ip}</div>
                 {item.desc && !item.uuid && <div className="pnet-desc-sm">{item.desc}</div>}
              </div>
              
              <div className="col-pnet-feat">{item.features}</div>
              <div className="col-pnet-res">{item.resources}</div>
              <div className="col-pnet-loc">{item.location}</div>
              
              <div className="col-pnet-arrow">
                 {item.uuid && <ChevronRight size={18} />}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default NetworkPrivate;
