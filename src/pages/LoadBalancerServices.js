import React from 'react';
import './LoadBalancerServices.css';

const lbData = [
  { id: 1, name: 'masm-lb', rule: 'Forwarding Rule: HTTP/HTTPS • Rounded Robin' },
  { id: 2, name: 'naduvan-lb', rule: 'Forwarding Rule: TCP • Least Connection' }
];

const LoadBalancerServices = () => {
  return (
    <div className="lb-page">
      <div className="lb-content-left" style={{ width: '100%' }}>
         <h1 className="lb-title">Load Balancers</h1>
         
         <div className="lb-list" style={{ marginTop: '20px' }}>
            {lbData.map((item) => (
              <div key={item.id} className="lb-item" style={{ 
                  display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', 
                  marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee'
              }}>
                 <div className="lb-icon" style={{ marginRight: '15px' }}>
                    <div style={{ width: 30, height: 30, background: '#7b00ff', borderRadius: '50%' }}></div>
                 </div>
                 <div className="lb-info" style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', marginBottom: '4px', display: 'block' }}>
                      {item.name}
                    </div>
                    <div style={{ color: '#666', fontSize: '13px' }}>
                      {item.rule}
                    </div>
                 </div>
                 <div className="lb-status">
                     <span className="status-dot running" style={{ display: 'inline-block', width: 8, height: 8, background: '#22c55e', borderRadius: '50%', marginRight: 5 }}></span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LoadBalancerServices;
