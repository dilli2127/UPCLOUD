import React from 'react';
import './PrivateCloud.css';

const PrivateCloud = () => {
  return (
    <div className="pc-page">
      <div className="pc-content-left">
         <h1 className="pc-title">Private Cloud</h1>
         
         <div className="pc-description">
           <p>
            Unlock the superior cloud on dedicated hardware running in a physically isolated environment. Enjoy the flexibility and high-performance of our public cloud along with our industry-leading 100% uptime SLA while free from noisy neighbours.
           </p>
         </div>

         <div className="pc-actions">
           <button className="btn-touch-pc">Get in touch</button>
           <button className="btn-learn-pc">Learn more</button>
         </div>
      </div>
      
      <div className="pc-visual">
         {/* Simple CSS Lock */}
         <div className="lock-icon">
            <div className="lock-shackle"></div>
            <div className="lock-body">
              <div className="lock-keyhole"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PrivateCloud;
