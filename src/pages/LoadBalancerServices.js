import React from 'react';
import './LoadBalancerServices.css';

const LoadBalancerServices = () => {
  return (
    <div className="lb-page">
      <div className="lb-content-left">
         <h1 className="lb-title">Load Balancers</h1>
         
         <div className="lb-description">
           <p>
             Managed Load Balancer enables you to distribute traffic across multiple servers. Each load balancer sits between client devices and backend servers, receiving and then distributing incoming requests to any available server capable of fulfilling them.
           </p>
           <p className="lb-promo">
             <span className="purple-text">UpCloud Essentials complimentary Load Balancer!</span><br/>
             Try out our free Essential Load Balancer – to ensure your applications are always available and scalable is paramount, and we're making that easier for you.
           </p>
         </div>

         <div className="lb-actions">
           <button className="btn-create-lb">Create new Load Balancer</button>
           <button className="btn-learn-lb">Learn more</button>
         </div>
      </div>
      
      <div className="lb-visual">
         {/* CSS representation of a load balancer diagram */}
         <div className="lb-diagram">
            <div className="lb-node-top"></div>
            <div className="lb-lines-vertical"></div>
            <div className="lb-lines-horizontal"></div>
            <div className="lb-nodes-bottom">
               <div className="lb-node"></div>
               <div className="lb-node"></div>
               <div className="lb-node"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LoadBalancerServices;
