import React, { useState } from 'react';
import { 
  Server, Search, Filter, RefreshCw, Smartphone, Monitor 
} from 'lucide-react';
import serverData from '../data/servers.json';
import './Servers.css';

import { useNavigate } from 'react-router-dom';

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filteredServers = serverData.filter(server => 
    server.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    server.ip.includes(searchTerm) ||
    server.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="servers-page">
      <div className="page-header">
        <div className="header-title">
          <div className="icon-box">
             <Server size={24} color="#7b00ff" />
          </div>
          <h1>Servers <span className="count-badge">TOTAL {serverData.length}</span></h1>
        </div>
        <button className="btn-primary-action">Deploy server</button>
      </div>

      <div className="filters-bar">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by hostnames, uuids and locations" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-actions">
           <div className="filter-dropdown">
             <Filter size={16} /> 
             <span>STATE</span>
           </div>
           
           <div className="filter-reset">
             <RefreshCw size={14} /> 
             <span>CLEAR FILTERS</span>
           </div>
        </div>
      </div>

      <div className="servers-list">
        <div className="list-header">
           <div className="col-checkbox"><input type="checkbox" /></div>
           <div className="col-name">NAME</div>
           <div className="col-cpu">CPU</div>
           <div className="col-storage">STORAGE</div>
           <div className="col-memory">MEMORY</div>
           <div className="col-location">LOCATION</div>
           <div className="col-arrow"></div>
        </div>

        {filteredServers.map((server) => (
          <div 
            className="server-row clickable" 
            key={server.id}
            onClick={() => navigate(`/dashboard/servers/cloud/${server.id}`)}
          >
             <div className="col-checkbox" onClick={(e) => e.stopPropagation()}><input type="checkbox" /></div>
             
             <div className="col-name">
                <div className="server-status">
                   <span className={`status-dot ${server.status}`}></span>
                   <span className="server-name-text">{server.name}</span>
                </div>
                <div className="server-meta">
                   {server.os.includes('Ubuntu') ? <span className="os-icon ubuntu">●</span> : <Monitor size={14} />}
                   <span className="os-name">{server.os}</span>
                   <span className="ip-address">IP {server.ip}</span>
                </div>
             </div>
             
             <div className="col-cpu">{server.cpu}</div>
             <div className="col-storage">{server.storage}</div>
             <div className="col-memory">{server.memory}</div>
             <div className="col-location">{server.location}</div>
             <div className="col-arrow">&gt;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servers;
