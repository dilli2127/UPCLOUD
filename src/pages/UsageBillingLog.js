import React, { useState, useEffect } from 'react';
import { CreditCard, ChevronDown } from 'lucide-react';
import billingData from '../data/billing_log.json'; 
import './UsageBillingLog.css';
import { billingService } from '../services/billingService';

const ALL_BILLING_DATA = {
  'January 2026': [
    { date: "2026-01-12", resource: "All resources", charge: "€1.55800", description: "Total resources" },
    { date: "2026-01-11", resource: "All resources", charge: "€2.21424", description: "Total resources" },
    { date: "2026-01-10", resource: "All resources", charge: "€2.21424", description: "Total resources" },
  ],
  'December 2025': [
    { date: "2025-12-31", resource: "All resources", charge: "€3.50000", description: "End of year tally" },
    { date: "2025-12-15", resource: "Server: App-Prod", charge: "€15.0000", description: "Monthly usage" },
    { date: "2025-12-01", resource: "Storage: Backup", charge: "€5.00000", description: "Storage fees" },
  ],
  'November 2025': [
    { date: "2025-11-30", resource: "All resources", charge: "€2.10000", description: "Total resources" },
    { date: "2025-11-15", resource: "Network", charge: "€1.20000", description: "Transfer overage" },
  ],
  'October 2025': [
     { date: "2025-10-30", resource: "Server: DB-Cluster", charge: "€12.5000", description: "Database node" },
     { date: "2025-10-15", resource: "Object Storage", charge: "€4.20000", description: "S3 Compatible" },
  ],
  'September 2025': [
      { date: "2025-09-28", resource: "All resources", charge: "€2.55000", description: "General usage" },
      { date: "2025-09-10", resource: "Load Balancer", charge: "€10.0000", description: "LB usage" },
  ],
  'August 2025': [
      { date: "2025-08-31", resource: "All resources", charge: "€1.98000", description: "Summer discount" },
  ],
  'July 2025': [
      { date: "2025-07-20", resource: "Server: Dev-Box", charge: "€5.00000", description: "Development env" },
      { date: "2025-07-05", resource: "Backup", charge: "€1.00000", description: "Snapshot" },
  ],
  'June 2025': [
      { date: "2025-06-30", resource: "All resources", charge: "€6.50000", description: "Mid-year processing" },
  ],
  'May 2025': [
      { date: "2025-05-15", resource: "Network", charge: "€0.55000", description: "Egress traffic" },
      { date: "2025-05-01", resource: "Server: Test", charge: "€3.00000", description: "Testing" },
  ],
  'April 2025': [
       { date: "2025-04-20", resource: "All resources", charge: "€2.00000", description: "Standard usage" },
  ]
};

const UsageBillingLog = () => {
  const [period, setPeriod] = useState('January 2026');
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load data when period changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await billingService.getBillingData(period);
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch billing data", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    setIsPeriodOpen(false);
  };

  // Helper to parse string "€2.55" to float 2.55
  const parseAmount = (str) => {
    if(!str) return 0;
    return parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
  };

  const totalAmount = items.reduce((sum, item) => sum + parseAmount(item.charge), 0);

  const handleChargeChange = async (index, value) => {
    // Optimistic update (update UI immediately)
    const updatedItems = [...items];
    const itemToUpdate = updatedItems[index];
    itemToUpdate.charge = value;
    setItems(updatedItems);

    // Call API in background
    // We assume items have simulated IDs. If not, we'd add them in the service.
    // For this simulation, we pass the Period and ID (or index if ID missing)
    await billingService.updateCharge(period, itemToUpdate.id || index, value);
  };

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
             <div className="period-dropdown-wrapper">
                 <div className="period-dropdown" onClick={() => setIsPeriodOpen(!isPeriodOpen)}>
                     {period} <ChevronDown size={14} />
                 </div>
                 {isPeriodOpen && (
                    <div className="period-menu">
                        {Object.keys(ALL_BILLING_DATA).map(p => (
                            <div 
                                key={p} 
                                className={`period-item ${p === period ? 'active' : ''}`}
                                onClick={() => handlePeriodChange(p)}
                            >
                                {p}
                            </div>
                        ))}
                    </div>
                 )}
             </div>
         </div>
      </div>

      <div className="bl-total">
         Total <span className="total-amount">€{totalAmount.toFixed(5)}</span>
      </div>

      <div className="bl-list">
         <div className="list-header">
            <div className="col-bl-date">DATE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-res">RESOURCE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-charge">CHARGE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-desc">DESCRIPTION <span className="sort-arrow">▼</span></div>
         </div>

         {items.map((item, index) => (
           <div className="bl-row" key={index}>
              <div className="col-bl-date link-purple">{item.date}</div>
              <div className="col-bl-res">{item.resource}</div>
              <div className="col-bl-charge">
                <input 
                    type="text" 
                    className="charge-input"
                    value={item.charge}
                    onChange={(e) => handleChargeChange(index, e.target.value)}
                />
              </div>
              <div className="col-bl-desc">{item.description}</div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default UsageBillingLog;
