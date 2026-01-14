import React from 'react';
import './LoadBalancerServices.css';

const LoadBalancerServices = () => {
  return (
    <div className="lb-page">
      <div className="lb-content-left" style={{ width: '100%' }}>
         <h1 className="lb-title">Load Balancers</h1>
         
         <div className="lb-list" style={{ marginTop: '20px' }}>
            {/* Using inline styles for speed, but ideally strictly CSS */}
            <div className="lb-item" style={{ 
                display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', 
                marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee'
            }}>
               <div className="lb-icon" style={{ marginRight: '15px' }}>
                  {/* Icon */}
                  <div style={{ width: 30, height: 30, background: '#7b00ff', borderRadius: '50%' }}></div>
               </div>
               <div className="lb-info" style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '16px' }}>masm load balance</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>Forwarding Rule: HTTP/HTTPS • Rounded Robin</p>
               </div>
               <div className="lb-status">
                   <span className="status-dot running" style={{ display: 'inline-block', width: 8, height: 8, background: '#22c55e', borderRadius: '50%', marginRight: 5 }}></span>
                   Running
               </div>
            </div>

            <div className="lb-item" style={{ 
                display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', 
                marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee'
            }}>
               <div className="lb-icon" style={{ marginRight: '15px' }}>
                  <div style={{ width: 30, height: 30, background: '#7b00ff', borderRadius: '50%' }}></div>
               </div>
               <div className="lb-info" style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '16px' }}>naduvan load balance</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>Forwarding Rule: TCP • Least Connection</p>
               </div>
               <div className="lb-status">
                   <span className="status-dot running" style={{ display: 'inline-block', width: 8, height: 8, background: '#22c55e', borderRadius: '50%', marginRight: 5 }}></span>
                   Running
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LoadBalancerServices;
