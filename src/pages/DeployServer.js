import React, { useState } from 'react';
import { Server, MapPin, Cpu, HardDrive, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serverService } from '../services/serverService';
import './DeployServer.css';

const LOCATIONS = [
  { id: 'fi-hel1', name: 'Helsinki', country: 'FI', flag: '🇫🇮' },
  { id: 'de-fra1', name: 'Frankfurt', country: 'DE', flag: '🇩🇪' },
  { id: 'us-nyc1', name: 'New York', country: 'US', flag: '🇺🇸' },
  { id: 'sg-sin1', name: 'Singapore', country: 'SG', flag: '🇸🇬' },
];

const PLANS = [
  { id: 'gn-1', name: 'General Purpose', cpu: '1 CPU', ram: '1 GB', storage: '25 GB', price: '€5/mo' },
  { id: 'gn-2', name: 'General Purpose', cpu: '2 CPU', ram: '4 GB', storage: '80 GB', price: '€10/mo' },
  { id: 'hp-1', name: 'High Performance', cpu: '4 CPU', ram: '8 GB', storage: '160 GB', price: '€40/mo' },
  { id: 'hp-2', name: 'High Performance', cpu: '8 CPU', ram: '16 GB', storage: '320 GB', price: '€80/mo' },
];

const OPERATING_SYSTEMS = [
  { id: 'ubuntu-22', name: 'Ubuntu 22.04 LTS', type: 'linux' },
  { id: 'debian-11', name: 'Debian 11', type: 'linux' },
  { id: 'centos-9', name: 'CentOS Stream 9', type: 'linux' },
  { id: 'win-2022', name: 'Windows Server 2022', type: 'windows' },
];

const DeployServer = () => {
    const navigate = useNavigate();
    const [isDeploying, setIsDeploying] = useState(false);
    const [config, setConfig] = useState({
        location: 'de-fra1',
        plan: 'gn-1',
        os: 'ubuntu-22',
        hostname: ''
    });

    const handleSelect = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const handleDeploy = async () => {
        setIsDeploying(true);
        try {
            const selectedLocation = LOCATIONS.find(l => l.id === config.location);
            const selectedPlan = PLANS.find(p => p.id === config.plan);
            const selectedOS = OPERATING_SYSTEMS.find(o => o.id === config.os);

            await serverService.createServer({
                hostname: config.hostname,
                locationName: selectedLocation.name,
                osName: selectedOS.name,
                plan: selectedPlan
            });
            
            navigate('/dashboard/servers');
        } catch (error) {
            console.error("Deploy failed", error);
            setIsDeploying(false);
        }
    };

    const selectedPlan = PLANS.find(p => p.id === config.plan);

    return (
        <div className="deploy-page">
            <div className="deploy-header">
                <h1>Deploy Server</h1>
                <p>Configure your new cloud server instance.</p>
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
                <h2><Cpu size={20} /> 2. Plan</h2>
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
                                <span>{plan.cpu}</span> • <span>{plan.ram}</span> • <span>{plan.storage}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                <h2><HardDrive size={20} /> 3. Operating System</h2>
                <div className="grid-cards">
                    {OPERATING_SYSTEMS.map(os => (
                        <div 
                            key={os.id} 
                            className={`selection-card ${config.os === os.id ? 'selected' : ''}`}
                            onClick={() => handleSelect('os', os.id)}
                        >
                            <div className="os-icon">{os.type === 'windows' ? '🪟' : '🐧'}</div>
                            <div className="card-name">{os.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="deploy-section">
                <h2><Server size={20} /> 4. Hostname</h2>
                <div className="hostname-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Enter server hostname (e.g. app-web-01)"
                        value={config.hostname}
                        onChange={(e) => handleSelect('hostname', e.target.value)}
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
                    <div className="summary-detail">
                        {LOCATIONS.find(l => l.id === config.location).name} • {selectedPlan.cpu}, {selectedPlan.ram} • {OPERATING_SYSTEMS.find(o => o.id === config.os).name}
                    </div>
                </div>
                <button className="btn-deploy-action" onClick={handleDeploy} disabled={isDeploying}>
                    {isDeploying ? 'Deploying...' : 'Deploy'}
                </button>
            </div>
        </div>
    );
};

export default DeployServer;
