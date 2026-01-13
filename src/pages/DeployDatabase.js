import React, { useState } from 'react';
import { Database, MapPin, Cpu, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DeployServer.css'; // Reusing the same CSS for consistency

const LOCATIONS = [
  { id: 'fi-hel1', name: 'Helsinki', country: 'FI', flag: '🇫🇮' },
  { id: 'de-fra1', name: 'Frankfurt', country: 'DE', flag: '🇩🇪' },
  { id: 'us-nyc1', name: 'New York', country: 'US', flag: '🇺🇸' },
];

const DB_TYPES = [
    { id: 'pg', name: 'PostgreSQL', icon: '🐘' },
    { id: 'mysql', name: 'MySQL', icon: '🐬' },
    { id: 'redis', name: 'Redis', icon: '🔺' },
];

const PLANS = [
  { id: 'db-1', name: 'Startup', cpu: '1 CPU', ram: '2 GB', price: '€20/mo' },
  { id: 'db-2', name: 'Business', cpu: '2 CPU', ram: '4 GB', price: '€40/mo' },
  { id: 'db-3', name: 'Enterprise', cpu: '4 CPU', ram: '8 GB', price: '€80/mo' },
];

const DeployDatabase = () => {
    const navigate = useNavigate();
    const [isDeploying, setIsDeploying] = useState(false);
    const [config, setConfig] = useState({
        location: 'de-fra1',
        type: 'pg',
        plan: 'db-1',
        name: ''
    });

    const handleSelect = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const handleDeploy = () => {
        setIsDeploying(true);
        setTimeout(() => {
            alert(`Database ${config.name} deployed successfully!`);
            navigate('/dashboard/databases');
        }, 1500);
    };

    const selectedPlan = PLANS.find(p => p.id === config.plan);

    return (
        <div className="deploy-page">
            <div className="deploy-header">
                <button onClick={() => navigate('/dashboard')} className="btn-back-header">
                     <ArrowLeft size={16} /> Cancel
                </button>
                <h1>Deploy Managed Database</h1>
                <p>Fully managed SQL and NoSQL databases.</p>
            </div>

            <div className="deploy-section">
                <h2><MapPin size={20} /> 1. Location</h2>
                <div className="grid-cards">
                    {LOCATIONS.map(loc => (
                        <div 
                            key={loc.id} 
                            className={`selection-card ${config.location === loc.id ? 'selected' : ''}`}
                            onClick={() => handleSelect('location', loc.id)}
                        >
                            <div className="card-flag">{loc.flag}</div>
                            <div className="card-name">{loc.name}</div>
                            <div className="card-sub">{loc.country}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                <h2><Database size={20} /> 2. Database Type</h2>
                <div className="grid-cards">
                    {DB_TYPES.map(db => (
                        <div 
                            key={db.id} 
                            className={`selection-card ${config.type === db.id ? 'selected' : ''}`}
                            onClick={() => handleSelect('type', db.id)}
                        >
                            <div className="os-icon">{db.icon}</div>
                            <div className="card-name">{db.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                <h2><Cpu size={20} /> 3. Service Plan</h2>
                <div className="grid-cards">
                    {PLANS.map(plan => (
                        <div 
                            key={plan.id} 
                            className={`selection-card plan-card ${config.plan === plan.id ? 'selected' : ''}`}
                            onClick={() => handleSelect('plan', plan.id)}
                        >
                            <div className="plan-name">{plan.name}</div>
                            <div className="plan-price">{plan.price}</div>
                            <div className="plan-specs">
                                <span>{plan.cpu}</span> • <span>{plan.ram}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                 <h2><Shield size={20} /> 4. Name</h2>
                 <div className="hostname-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Enter database name"
                        value={config.name}
                        onChange={(e) => handleSelect('name', e.target.value)}
                        className="deploy-input"
                    />
                </div>
            </div>

            <div className="deploy-footer-spacer"></div>
            <div className="deploy-footer">
                <div className="footer-summary">
                    <div className="summary-text">
                        <span>Total:</span>
                        <span className="summary-price">{selectedPlan.price}</span>
                    </div>
                </div>
                <button className="btn-deploy-action" onClick={handleDeploy} disabled={isDeploying}>
                    {isDeploying ? 'Creating...' : 'Create Database'}
                </button>
            </div>
        </div>
    );
};

export default DeployDatabase;
