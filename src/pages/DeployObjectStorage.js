import React, { useState } from 'react';
import { Database, MapPin, HardDrive, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DeployServer.css'; // Reusing styles

const LOCATIONS = [
  { id: 'fi-hel1', name: 'Helsinki', country: 'FI', flag: '🇫🇮' },
  { id: 'de-fra1', name: 'Frankfurt', country: 'DE', flag: '🇩🇪' },
  { id: 'us-nyc1', name: 'New York', country: 'US', flag: '🇺🇸' },
];

const PLANS = [
  { id: 'obj-250', name: '250 GB', price: '€5/mo', transfer: '500 GB' },
  { id: 'obj-500', name: '500 GB', price: '€10/mo', transfer: '1 TB' },
  { id: 'obj-1tb', name: '1 TB', price: '€20/mo', transfer: '2 TB' },
];

const DeployObjectStorage = () => {
    const navigate = useNavigate();
    const [isDeploying, setIsDeploying] = useState(false);
    const [config, setConfig] = useState({
        location: 'de-fra1',
        plan: 'obj-250',
        name: ''
    });

    const handleSelect = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const handleDeploy = () => {
        setIsDeploying(true);
        setTimeout(() => {
            alert(`Object Storage ${config.name} created!`);
            navigate('/dashboard/object-storage/list');
        }, 1500);
    };

    const selectedPlan = PLANS.find(p => p.id === config.plan);

    return (
        <div className="deploy-page">
            <div className="deploy-header">
                <button onClick={() => navigate('/dashboard')} className="btn-back-header">
                     <ArrowLeft size={16} /> Cancel
                </button>
                <h1>Create Object Storage</h1>
                <p>S3-compatible scalable storage.</p>
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
                <h2><HardDrive size={20} /> 2. Storage Plan</h2>
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
                                <span>{plan.transfer} transfer</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                 <h2><Database size={20} /> 3. Name</h2>
                 <div className="hostname-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Enter storage name"
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
                    {isDeploying ? 'Creating...' : 'Create Storage'}
                </button>
            </div>
        </div>
    );
};

export default DeployObjectStorage;
