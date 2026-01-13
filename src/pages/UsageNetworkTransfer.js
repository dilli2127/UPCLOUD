import React from 'react';
import { Activity } from 'lucide-react';
import './UsageNetworkTransfer.css';

const UsageNetworkTransfer = () => {
  return (
    <div className="net-transfer-page">
      <div className="nt-header">
         <div className="nt-title">
           <div className="icon-box-purple">
             <Activity size={24} color="#7b00ff" />
           </div>
           <h1>Network Transfer</h1>
         </div>
      </div>

      <div className="nt-content">
         <p className="nt-desc">
            Network Transfer displays the combined sent traffic from all your cloud resources towards the Internet. All egress costs are waived for any regular use case. For ultra high bandwidth use cases, the Fair Transfer Policy is applied. The Fair usage limit is determined by the number of consumed services, each deployed service increasing this limit by its share. Read more about the limit and used formula from our <a href="#">Fair Transfer Policy</a>.
         </p>

         <div className="nt-usage-box">
            <h3 className="nt-box-title">Usage</h3>
            
            <div className="nt-stats-row">
               <div className="nt-stat-left">
                  <div className="stat-label">TRANSFER FOR ONGOING MONTH</div>
                  <div className="stat-val">133 <span className="unit">GiB</span></div>
               </div>
               
               <div className="nt-stat-right">
                  <div className="stat-label">FAIR USAGE LIMIT</div>
                  <div className="stat-val">7.75 <span className="unit">TiB</span></div>
               </div>
            </div>

            <div className="nt-note">
               Note! Transfer statistics shown here are not in real-time due to data consistency checks. The data is updated within 15 minute intervals.
            </div>
         </div>
      </div>
    </div>
  );
};

export default UsageNetworkTransfer;
