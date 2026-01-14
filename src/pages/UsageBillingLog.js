// UsageBillingLog Component - Billing History and Payment Options
import React, { useState, useEffect } from 'react';
import { CreditCard, ChevronDown, DownloadCloud, PlayCircle, AlertTriangle, Edit2, Trash2, CreditCard as CardIcon } from 'lucide-react';
import './UsageBillingLog.css';
import { billingService } from '../services/billingService';

const ALL_BILLING_DATA = {
  'Last 5 Months': [],
  'January 2026': [],
  'December 2025': [],
  'November 2025': [],
  'October 2025': [],
  'September 2025': [],
  'August 2025': [],
  'July 2025': [],
  'June 2025': [],
  'May 2025': [],
  'April 2025': [],
  'March 2025': [],
  'February 2025': [],
  'January 2025': []
};

const UsageBillingLog = () => {
  const [period, setPeriod] = useState('Last 5 Months');
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardSummary, setSummary] = useState({ dailyUse: '$0.00', balance: '$0.00', lastPaymentAmount: '-', lastPaymentDate: '-' });

  // Load data when period changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let data = [];
        if (period === 'Last 5 Months') {
           const months = Object.keys(ALL_BILLING_DATA).filter(k => k !== 'Last 5 Months').slice(0, 5);
           const promises = months.map(m => billingService.getBillingData(m));
           const results = await Promise.all(promises);
           data = results.flat();
        } else {
           data = await billingService.getBillingData(period);
        }
        setItems(data);
        
        // Fetch Dashboard Summary
        const summary = await billingService.getDashboardSummary();
        setSummary(summary);

        // Fetch Payment History (only once ideally, but here fine)
        const history = await billingService.getPaymentHistory();
        setPaymentHistory(history);
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
  
  // Detect currency from first item
  const currencySymbol = items.length > 0 && items[0].charge ? items[0].charge.replace(/[0-9.,\s]/g, '') : '$';

  const handleChargeChange = async (index, value) => {
    // Optimistic update (update UI immediately)
    const updatedItems = [...items];
    const itemToUpdate = updatedItems[index];
    itemToUpdate.charge = value;
    setItems(updatedItems);

    await billingService.updateCharge(period, itemToUpdate.id || index, value);
  };

  const handleDownloadInvoice = (item) => {
     alert(`Downloading invoice for ${item.date || item.invoice}...`);
  };

  return (
    <div className="billing-log-page">
      {/* STATUS CARD */}
      <div className="status-card">
          <div className="status-header">
             <PlayCircle size={20} color="#7b00ff" /> Status
          </div>
          <div className="status-metrics">
              <div className="metric-item">
                  <span className="metric-label">Current Balance</span>
                  <span className="metric-value">{dashboardSummary.balance}</span>
              </div>
              <div className="metric-item">
                  <span className="metric-label">Daily Use</span>
                  <span className="metric-value black">{dashboardSummary.dailyUse}</span>
              </div>
              <div className="metric-item">
                  <span className="metric-label">Estimated Balance<br/>Exhaustion Date</span>
                  <span className="metric-value black" style={{fontSize: '1.4rem'}}>{dashboardSummary.exhaustionDate}</span>
              </div>
          </div>
          <div className="status-footer">
              <span>Last payment was <strong>{dashboardSummary.lastPaymentAmount}</strong> on {dashboardSummary.lastPaymentDate}.</span>
              <button className="btn-download-text">
                  <DownloadCloud size={16} /> Download invoice
              </button>
          </div>
      </div>

      {/* PAYMENT OPTIONS & WARNING */}
      <div className="payment-options-section">
          <div className="bl-title" style={{marginBottom: '20px'}}>
             <div className="icon-box-purple">
                 <CreditCard size={24} color="#7b00ff" />
             </div>
             <h1>Payment options</h1>
          </div>

          <div className="warning-box">
              <div style={{color: '#fcc419'}}><AlertTriangle size={20} fill="#fcc419" color="white" /></div>
              <div className="warning-content">
                  <h3>Your automated payment minimum balance might be too low</h3>
                  <p>We recommend setting it to cover at least 7 days of usage ($21,000.00) to help avoid insufficient funds.</p>
              </div>
          </div>

          <div className="payment-methods-grid">
              {/* Automated Payment Box */}
              <div className="pm-box">
                 <div>
                     <div className="pm-header">
                         <h3>Automated payment</h3>
                         <button style={{border:'none', background:'none', color:'#333', cursor:'pointer', display:'flex', alignItems:'center', gap:'5px', fontSize:'0.85rem', fontWeight:'600'}}>
                             <Edit2 size={14}/> EDIT
                         </button>
                     </div>
                     <div className="paused-alert">
                         <span>Payments are currently paused</span>
                         <button className="btn-resume">RESUME</button>
                     </div>
                     <p className="pm-info-text">
                         When balance is below <span className="highlight-amt">$10,000.00</span>, automatically top up <span className="highlight-amt">$12,000.00</span>
                     </p>
                     <div className="card-preview">
                         <div className="card-info-row">
                             <div style={{background:'#222', padding:'2px 4px', borderRadius:'2px', color:'white', fontSize:'10px'}}>Mastercard</div>
                             Mastercard ****3113
                         </div>
                         <div>10 / 2027</div>
                     </div>
                 </div>
                 <div className="total-pay-row">
                     <span className="total-label">Total amount to pay</span>
                     <div className="total-value-box">
                         <div className="total-value">$12,000.00</div>
                         <div className="vat-text">incl. VAT 0.00%</div>
                     </div>
                 </div>
              </div>

              {/* One-time Payment Box */}
              <div className="pm-box">
                  <div>
                      <div className="pm-header">
                          <h3>One-time payment</h3>
                      </div>
                      <p className="pm-info-text">
                          Manually top up your account balance as needed by making a one-time payment.
                      </p>
                  </div>
                  <button className="btn-make-payment">Make a payment</button>
              </div>
          </div>
      </div>

       {/* SAVED CREDIT CARDS */}
      <div className="saved-cards-section">
          <h2 className="ph-title">Saved credit cards</h2>
          <div className="cards-list">
              {[
                { type:'Mastercard', last4:'3113', exp:'10 / 2027' },
                { type:'Visa', last4:'6165', exp:'04 / 2028', color:'#1a1f71' },
                { type:'Visa', last4:'8176', exp:'05 / 2029', color:'#1a1f71' },
                { type:'Visa', last4:'7017', exp:'02 / 2030', color:'#1a1f71' },
                { type:'Visa', last4:'3022', exp:'02 / 2030', color:'#1a1f71' }
              ].map((card, i) => (
                  <div className="card-item-row" key={i}>
                      <div className="card-brand">
                          <div style={{background: card.color || '#222', color:'white', padding:'2px 6px', borderRadius:'3px', fontSize:'0.7rem'}}>{card.type}</div>
                          {card.type} ending in {card.last4}
                      </div>
                      <div style={{display:'flex', alignItems:'center'}}>
                          <span className="card-expiry">Expires on {card.exp}</span>
                          <button className="btn-trash"><Trash2 size={16} /></button>
                      </div>
                  </div>
              ))}
              <button className="btn-show-more">Show more</button>
          </div>
      </div>

      {/* BILLING LOG HEADER */}
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



      <div className="bl-list" style={{marginBottom: '40px'}}>
         <div className="list-header">
            <div className="col-bl-inv">INVOICE NUMBER</div>
            <div className="col-bl-date">DATE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-res">RESOURCE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-desc">DESCRIPTION <span className="sort-arrow">▼</span></div>
            <div className="col-bl-charge">CHARGE <span className="sort-arrow">▼</span></div>
            <div className="col-bl-actions" style={{textAlign: 'right'}}>INVOICE</div>
         </div>

         {items.map((item, index) => (
           <div className="bl-row" key={index}>
              <div className="col-bl-inv link-purple">{item.invoiceNumber || '-'}</div>
              <div className="col-bl-date">{item.date}</div>
              <div className="col-bl-res">{item.resource}</div>
              <div className="col-bl-desc">{item.description}</div>
              <div className="col-bl-charge">
                <input 
                    type="text" 
                    className="charge-input"
                    value={item.charge}
                    onChange={(e) => handleChargeChange(index, e.target.value)}
                />
              </div>
              <div className="col-bl-actions" style={{textAlign: 'right'}}>
                 <button className="icon-btn-download" onClick={() => handleDownloadInvoice(item)} title="Download Original Bill">
                    <DownloadCloud size={18} color="#7b00ff" />
                 </button>
              </div>
           </div>
         ))}
      </div>

      {/* PAYMENT HISTORY */}
      <div className="payment-history-section">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px'}}>
             <h2 className="ph-title" style={{margin:0}}>Payment history</h2>
             <button style={{background:'none', border:'none', fontSize:'0.9rem', fontWeight:'600', color:'#111', cursor:'pointer', display:'flex', alignItems:'center', gap:'5px'}}>
                 ALL <ChevronDown size={14}/>
             </button>
          </div>
          <div className="ph-table">
              <div className="list-header">
                  <div className="col-ph-invoice">INVOICE NUMBER</div>
                  <div className="col-ph-date">DATE</div>
                  <div className="col-ph-deposit">DEPOSIT</div>
                  <div className="col-ph-payment">PAYMENT</div>
                  <div className="col-ph-type">TYPE</div>
                  <div className="col-ph-status">STATUS</div>
                  <div className="col-ph-action">INVOICE</div>
              </div>
              {paymentHistory.map((row, idx) => (
                  <div className="ph-row" key={idx}>
                      <div className="col-ph-invoice link-purple">{row.invoice}</div>
                      <div className="col-ph-date">{row.date}</div>
                      <div className="col-ph-deposit">{row.deposit}</div>
                      <div className="col-ph-payment">{row.payment}</div>
                      <div className="col-ph-type" style={{lineHeight: '1.2'}}>{row.type}</div>
                      <div className="col-ph-status">
                          <span className="status-badge">{row.status}</span>
                      </div>
                      <div className="col-ph-action">
                          <button className="icon-btn-download" onClick={() => handleDownloadInvoice(row)}>
                              <DownloadCloud size={16} />
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default UsageBillingLog;
