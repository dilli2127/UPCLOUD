import React from 'react';
import { History, ChevronRight, Edit2 } from 'lucide-react';
import backupsData from '../data/backups.json';
import './StorageBackups.css';

const StorageBackups = () => {
  return (
    <div className="backups-page">
      <div className="backups-header">
        <div className="backups-title">
          <div className="icon-box">
             <History size={24} color="#7b00ff" />
          </div>
          <h1>Backups</h1>
        </div>
        <p className="backups-description">
          Below you can find all the backups grouped by server. You can see the backup prices, current backup schedules and edit the backup schedule. A backup can be cloned into a storage device and then attached to a server.
        </p>
        
        <div className="backups-actions">
           <button className="btn-choose-schedule">Choose backup schedules...</button>
           <div className="total-price">
             Estimated total monthly <span className="price-val">€0.00</span>
           </div>
        </div>
      </div>

      <div className="backups-list">
        <div className="list-header">
           <div className="col-server">SERVER <span className="sort-arrow">▲</span></div>
           <div className="col-count">COUNT <span className="sort-arrow">▼</span></div>
           <div className="col-schedule">BACKUP SCHEDULE</div>
           <div className="col-price">ESTIMATED BACKUP PRICE <span className="sort-arrow">▼</span></div>
        </div>

        {backupsData.map((item, index) => (
          <div className="backup-row" key={index}>
             <div className="col-server">
                <ChevronRight size={16} className="expand-icon" />
                <span className="server-name">{item.server}</span>
             </div>
             
             <div className="col-count">
                {item.count} {item.count === 1 ? 'backup' : 'backups'}
             </div>
             
             <div className="col-schedule">
                <div className="schedule-box">
                   <Edit2 size={12} className="edit-icon" />
                   <span>{item.schedule}</span>
                </div>
             </div>
             
             <div className="col-price">
                {item.price}
             </div>
          </div>
        ))}
        
        <div className="list-footer">
           Total {backupsData.reduce((acc, curr) => acc + curr.count, 0)} backups
        </div>
      </div>
    </div>
  );
};

export default StorageBackups;
