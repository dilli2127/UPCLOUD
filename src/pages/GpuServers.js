import React from 'react';
import './GpuServers.css';

const GpuServers = () => {
  return (
    <div className="gpu-page">
      <div className="gpu-content">
        <h1>GPU Servers</h1>
        <p className="gpu-description">
          GPU Servers are ideal for demanding workloads such as AI, machine learning, and high-performance computing.
          Deploy your first GPU Server to unlock accelerated computing power on UpCloud.
        </p>
        
        <div className="gpu-actions">
          <button className="btn-deploy-gpu">Deploy GPU Server</button>
          <button className="btn-learn-more">Learn more</button>
        </div>
      </div>
      
      <div className="gpu-visual">
         {/* Abstract geometric representation of a server stack */}
         <div className="server-stack">
            <div className="stack-block b1"></div>
            <div className="stack-block b2"></div>
         </div>
      </div>
    </div>
  );
};

export default GpuServers;
