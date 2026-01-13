import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Server, Activity, Terminal, Settings, HardDrive, Network } from 'lucide-react';
import { serverService } from '../services/serverService';
import './ServerDetail.css';

const ServerDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [server, setServer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServer = async () => {
            const data = await serverService.getServerById(id);
            if (!data) {
                // Handle not found
                alert("Server not found");
                navigate('/dashboard/servers');
                return;
            }
            setServer(data);
            setLoading(false);
        };
        fetchServer();
    }, [id, navigate]);

    const handleAction = async (action) => {
        if (!server) return;
        
        switch(action) {
            case 'start':
                const started = await serverService.updateServerStatus(id, 'running');
                setServer(started);
                break;
            case 'stop':
                const stopped = await serverService.updateServerStatus(id, 'stopped');
                setServer(stopped);
                break;
            case 'restart':
                // Simulate restart by stop then start
                await serverService.updateServerStatus(id, 'stopped');
                setTimeout(async () => {
                   const restarted = await serverService.updateServerStatus(id, 'running');
                   setServer(restarted);
                }, 1000);
                break;
            case 'delete':
                if (window.confirm(`Are you sure you want to delete ${server.name}?`)) {
                    await serverService.deleteServer(id);
                    navigate('/dashboard/servers');
                }
                break;
            default:
                break;
        }
    };

    if (loading) return <div style={{padding:'40px'}}>Loading server details...</div>;

    return (
        <div className="server-detail-page">
            <div className="sd-header-nav">
                <button onClick={() => navigate('/dashboard/servers/cloud')} className="btn-back">
                    <ArrowLeft size={16} /> Back to servers
                </button>
            </div>

            <div className="sd-header">
                <div className="sd-title-section">
                    <div className={`sd-status-indicator ${server.status}`}></div>
                    <h1>{server.name}</h1>
                    <span className="sd-id">#{id}</span>
                    <span className="sd-hostname">{server.location}.upcloud.com</span>
                </div>
                
                <div className="sd-actions">
                     {server.status === 'stopped' ? (
                        <button className="btn-action start" onClick={() => handleAction('start')}>Start</button>
                     ) : (
                        <button className="btn-action stop" onClick={() => handleAction('stop')}>Stop</button>
                     )}
                     <button className="btn-action restart" onClick={() => handleAction('restart')}>Restart</button>
                     <button className="btn-action delete" onClick={() => handleAction('delete')}>Delete</button>
                </div>
            </div>

            <div className="sd-nav-tabs">
                <div className="sd-tab active">Overview</div>
                <div className="sd-tab">Console</div>
                <div className="sd-tab">Resize</div>
                <div className="sd-tab">Backup</div>
                <div className="sd-tab">Network</div>
                <div className="sd-tab">Storage</div>
                <div className="sd-tab">Firewall</div>
                <div className="sd-tab">Log</div>
            </div>

            <div className="sd-content">
                <div className="sd-overview-grid">
                    <div className="sd-card info">
                        <h3>General Information</h3>
                        <div className="sd-info-row">
                            <span className="label">Location</span>
                            <span className="value">{server.location}</span>
                        </div>
                        <div className="sd-info-row">
                            <span className="label">IP Address</span>
                            <span className="value">{server.ip}</span>
                        </div>
                        <div className="sd-info-row">
                            <span className="label">OS</span>
                            <span className="value">{server.os}</span>
                        </div>
                        <div className="sd-info-row">
                            <span className="label">UUID</span>
                            <span className="value">00c5c4d2-d123-445a-9876-{id}445566</span>
                        </div>
                    </div>

                    <div className="sd-card stats">
                        <h3>Resources</h3>
                         <div className="resource-circles">
                            <div className="res-circle">
                                 <span className="res-val">{server.cpu}</span>
                                 <span className="res-label">CPU</span>
                            </div>
                            <div className="res-circle">
                                 <span className="res-val">{server.memory}</span>
                                 <span className="res-label">Memory</span>
                            </div>
                            <div className="res-circle">
                                 <span className="res-val">{server.storage}</span>
                                 <span className="res-label">Disk</span>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="sd-card graphs">
                    <h3>Usage History (24h)</h3>
                    <div className="mock-graph">
                        <div className="graph-line cpu"></div>
                        <div className="graph-line net"></div>
                        <span className="graph-placeholder">Interactive CPU/Network Graph Mock</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServerDetail;
