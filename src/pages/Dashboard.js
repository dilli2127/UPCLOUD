import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Server, Database, Box, Plus, 
  ArrowRight, HardDrive, CreditCard, HelpCircle
} from 'lucide-react';
import { billingService } from '../services/billingService';
import './Dashboard.css';

const WidgetCard = ({ title, icon, children, badge, className = '' }) => (
  <div className={`widget-card ${className}`}>
    <div className="widget-header">
      <div className="widget-title">
        {icon && <span className="widget-icon">{icon}</span>}
        {title}
        {badge && <span className="widget-badge">{badge}</span>}
      </div>
    </div>
    <div className="widget-body">
      {children}
    </div>
  </div>
);

const NoResources = ({ onClick }) => (
  <div className="no-resources" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
    No resources. Click to create.
  </div>
);

const StatusBar = ({ count, label, color = "#00b84f" }) => (
  <div className="status-bar-container">
    <div className="status-bar">
      <div className="status-fill" style={{ width: '100%', backgroundColor: color }}></div>
    </div>
    <div className="status-info">
      <span className="status-dot" style={{ backgroundColor: color }}></span>
      <strong>{count}</strong> {label}
    </div>
  </div>
);

const Dashboard = () => {
    const navigate = useNavigate();
    const [billingSummary, setBillingSummary] = useState({
        dailyUse: 'Loading...',
        balance: '...',
        exhaustionDate: '...'
    });

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const data = await billingService.getDashboardSummary();
                setBillingSummary(data);
            } catch (error) {
                console.error("Failed to load dashboard billing info", error);
            }
        };
        fetchSummary();
    }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title-area">
          <div className="title-icon"><LayoutDashboard size={28} color="#7b00ff" /></div>
          <h1>Dashboard</h1>
        </div>
        <button className="btn-deploy" onClick={() => navigate('/dashboard/deploy')}>
          <Plus size={18} /> Deploy now
        </button>
      </div>

      <div className="dashboard-grid">
        {/* Column 1 */}
        <div className="dashboard-col">
          <WidgetCard title="Servers" icon={<Server size={18} />}>
            <StatusBar count={3} label="Running" />
          </WidgetCard>
          
          <WidgetCard title="Storage" icon={<HardDrive size={18} />}>
            <StatusBar count={3} label="Attached" />
          </WidgetCard>
          
          <WidgetCard title="Databases" icon={<Database size={18} />}>
            <NoResources onClick={() => navigate('/dashboard/databases/deploy')} />
          </WidgetCard>
          
          <WidgetCard title="Kubernetes" icon={<Box size={18} />}>
            <NoResources onClick={() => navigate('/dashboard/kubernetes/deploy')} />
          </WidgetCard>
        </div>

        {/* Column 2 */}
        <div className="dashboard-col">
          <WidgetCard title="GPU Servers" icon={<Server size={18} />} badge="NEW!">
            <NoResources onClick={() => navigate('/dashboard/servers/gpu')} />
          </WidgetCard>
          
          <WidgetCard title="Object Storages" icon={<Database size={18} />}>
            <NoResources onClick={() => navigate('/dashboard/object-storage/deploy')} />
          </WidgetCard>
          
          <WidgetCard title="Load Balancer" icon={<Box size={18} />}>
            <NoResources onClick={() => navigate('/dashboard/load-balancer/deploy')} />
          </WidgetCard>
        </div>

        {/* Column 3 */}
        <div className="dashboard-col">
          <WidgetCard title="Billing">
            <div className="billing-content">
              <h2 className="billing-amount">{billingSummary.dailyUse}</h2>
              <p className="billing-label">Current usage</p>
              <div className="billing-details-link" onClick={() => navigate('/dashboard/usage/billing-log')}>
                  See details
              </div>
              <div className="billing-row">
                <span>Current balance</span>
                <span>{billingSummary.balance}</span>
              </div>
              <div className="billing-row">
                <span>Balance exhaustion date</span>
                <span>{billingSummary.exhaustionDate}</span>
              </div>
            </div>
          </WidgetCard>

          <WidgetCard title="Network Transfer">
             <div className="network-graph-container">
               <svg viewBox="0 0 100 40" className="network-graph">
                 <path d="M0,35 Q10,35 20,30 T40,25 T60,20 T80,25 T100,35" fill="none" stroke="#7b00ff" strokeWidth="2" />
                 <path d="M0,35 Q10,35 20,30 T40,25 T60,20 T80,25 T100,35 V40 H0 Z" fill="rgba(123, 0, 255, 0.1)" />
               </svg>
               <div className="transfer-info">
                 <span>Transfer for ongoing month</span>
                 <strong>132 GiB</strong>
               </div>
             </div>
          </WidgetCard>

          <WidgetCard title="Backups">
             <div className="status-bar-container">
               <div className="status-bar" style={{backgroundColor: '#eee'}}>
                 <div className="status-fill" style={{ width: '67%', backgroundColor: '#7b00ff' }}></div>
               </div>
               <div className="status-info" style={{fontSize: '0.8rem'}}>
                 67% of storages have scheduled backups
               </div>
             </div>
          </WidgetCard>

          <div className="news-card">
            <div className="news-header">
              <span className="news-label">NEWS</span>
              <div className="news-nav">
                <button>&larr;</button>
                <button>&rarr;</button>
              </div>
            </div>
            <p className="news-date">5 Jan 2026</p>
            <h3>American Express now supported for USD payments</h3>
            <p className="news-excerpt">You can use Amex for all USD transactions, making billing even more convenient and flexible.</p>
            <a href="#" className="setup-link">Setup now</a>
          </div>
          
           <div className="list-link-item">
             <HelpCircle size={18} /> Help Center <ArrowRight size={16} className="arrow" />
           </div>
           <div className="list-link-item">
             <Users size={18} /> People <ArrowRight size={16} className="arrow" />
           </div>
        </div>
      </div>

       {/* Full width sections below the 2-column or 3-column top part */}
       <div className="wide-sections">
          
          <div className="network-stats-card">
              <h4>Network</h4>
              <div className="network-stats-grid">
                 <div className="net-stat"><strong>6</strong> <span>Public IPs</span></div>
                 <div className="net-stat"><strong>0</strong> <span>Floating IPs</span></div>
                 <div className="net-stat"><strong>1</strong> <span>Private Networks</span></div>
                 <div className="net-stat"><strong>0</strong> <span>Routers</span></div>
                 <div className="net-stat"><strong>0</strong> <span>NAT Gateways</span></div>
                 <div className="net-stat"><strong>0</strong> <span>VPNs</span></div>
              </div>
           </div>

           <div className="frequently-accessed-card">
             <h4>Frequently accessed</h4>
             <div className="freq-item">
               <div className="freq-icon"><Server size={18} color="#7b00ff"/></div>
               <span className="freq-name">Prod 1</span>
               <span className="freq-zone">SG-SIN1</span>
               <div className="freq-arrow"><ArrowRight size={16} /></div>
             </div>
           </div>

       </div>

    </div>
  );
};

// Helper for icons
function Users({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }

export default Dashboard;
