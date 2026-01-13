import React from 'react';
import { GitBranch } from 'lucide-react';
import routerData from '../data/network_routers.json';
import './NetworkRouters.css';

const NetworkRouters = () => {
  return (
    <div className="network-routers-page">
      <div className="routers-header">
        <div className="routers-title">
           <div className="icon-box">
             <GitBranch size={24} color="#7b00ff" />
           </div>
           <h1>Routers</h1>
        </div>
        <p className="routers-description">
          The following listing shows the Routers on your account. SDN Routers connect multiple SDN Private Networks inside data centres.
        </p>
        <p className="routers-link">
          See <a href="#">Router guide</a> to know more about this service.
        </p>

        <div className="routers-actions">
           <button className="btn-create-router">Create SDN Router</button>
           <span className="price-info">
             <span className="price-val">€0.00</span> SDN Routers are free of charge.
           </span>
        </div>
      </div>

      <div className="routers-list">
         <div className="list-header">
            <div className="col-router-name">NAME <span className="sort-arrow">▲</span></div>
            <div className="col-router-nets">NETWORKS</div>
            <div className="col-router-type">TYPE</div>
         </div>

         {routerData.map((item, index) => (
           <div className="router-row" key={index}>
              <div className="col-router-name">
                 <div className="router-name-main">{item.name}</div>
                 <div className="router-desc">{item.desc}</div>
              </div>
              
              <div className="col-router-nets">
                 <div className="net-main">{item.networks}</div>
                 <div className="net-sub">{item.networksDesc}</div>
              </div>
              
              <div className="col-router-type">
                 <span className="type-badge">{item.type}</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default NetworkRouters;
