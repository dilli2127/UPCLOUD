import React from 'react';
import { GitBranch, Edit2 } from 'lucide-react';
import publicNetworkData from '../data/network_public.json';
import './NetworkPublic.css';

const NetworkPublic = () => {
  return (
    <div className="network-public-page">
      <div className="np-header">
        <div className="np-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>Public networks</h1>
        </div>
        <p className="np-description">
          The following IP addresses belong to your username. The IP addresses are used to send and receive data to your servers through the public internet. If you want to change your Reverse DNS name, you can do so by clicking the pen icon.
        </p>
      </div>

      <div className="np-list">
         <div className="list-header">
            <div className="col-np-ip">IP ADDRESS <span className="sort-arrow">▲</span></div>
            <div className="col-np-dns">REVERSE DNS NAME <span className="sort-arrow">▼</span></div>
            <div className="col-np-attached">ATTACHED TO <span className="sort-arrow">▼</span></div>
            <div className="col-np-loc">LOCATION <span className="sort-arrow">▼</span></div>
         </div>

         {publicNetworkData.map((item, index) => (
           <div className="np-row" key={index}>
              <div className="col-np-ip">{item.ip}</div>
              
              <div className="col-np-dns">
                 {item.dns} <button className="edit-btn"><Edit2 size={12} /></button>
              </div>
              
              <div className="col-np-attached">
                 <span className="link-purple">{item.attached}</span>
              </div>
              
              <div className="col-np-loc">{item.location}</div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default NetworkPublic;
