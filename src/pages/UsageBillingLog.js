import React, { useState } from 'react';
import { CreditCard, ChevronDown } from 'lucide-react';
import billingData from '../data/billing_log.json'; 
import './UsageBillingLog.css';

const UsageBillingLog = () => {
  const [period, setPeriod] = useState('January 2026');

  return (
    <div className="billing-log-page">
      <div className="bl-header">
         <div className="bl-title">
           <div className="icon-box-purple">
             <CreditCard size={24} color="#7b00ff" />
           </div>
           <h1>Billing log</h1>
         </div>

         <div className="bl-period-selector">
             <span className="period-label">Period: </span>
             <div className="period-dropdown">
                 {period} <ChevronDown size={14} />
             </div>
         </div>
      </div>

      <div className="bl-total">
         Total <span className="total-amount">€25.91</span>
      </div>

      <div className="bl-list">
         <div className="list-header">
            <div className="col-bl-date">DATE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-res">RESOURCE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-charge">CHARGE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-desc">DESCRIPTION <span className="sort-arrow">▼</span></div>
         </div>

         {billingData.map((item, index) => (
           <div className="bl-row" key={index}>
              <div className="col-bl-date link-purple">{item.date}</div>
              <div className="col-bl-res">{item.resource}</div>
              <div className="col-bl-charge">
                <span className="charge-val">{item.charge}</span>
              </div>
              <div className="col-bl-desc">{item.description}</div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default UsageBillingLog;
