import React from 'react';
import { Database, Plus, MoreVertical, Settings, Globe, Lock } from 'lucide-react';
import objectStorageData from '../data/object_storage.json';
import './ObjectStorage.css';

const ObjectStorage = () => {
  return (
    <div className="obj-page-list">
      <div className="obj-header">
        <div className="obj-title-section">
          <div className="icon-box-purple">
            <Database size={24} color="#7b00ff" />
          </div>
          <h1>Object Storage</h1>
        </div>
        <p className="obj-subtitle">
            Scalable, S3-compatible cloud storage for your static assets and backups.
        </p>
        <button className="btn-create-obj-list">
            <Plus size={18} /> Create Object Storage
        </button>
      </div>

      <div className="obj-table-container">
        <div className="obj-table-header">
            <div className="col-obj-name">NAME</div>
            <div className="col-obj-region">REGION</div>
            <div className="col-obj-access">ACCESS</div>
            <div className="col-obj-size">SIZE</div>
            <div className="col-obj-files">FILES</div>
            <div className="col-obj-actions"></div>
        </div>
        
        {objectStorageData.map(item => (
            <div className="obj-table-row" key={item.id}>
                <div className="col-obj-name">
                    <span className="obj-name-text">{item.name}</span>
                    <span className="obj-uuid">{item.id}</span>
                </div>
                <div className="col-obj-region">{item.region}</div>
                <div className="col-obj-access">
                    {item.access === 'Public' ? (
                        <span className="badge-public"><Globe size={12}/> Public</span>
                    ) : (
                        <span className="badge-private"><Lock size={12}/> Private</span>
                    )}
                </div>
                <div className="col-obj-size">{item.size}</div>
                <div className="col-obj-files">{item.files}</div>
                <div className="col-obj-actions">
                    <button className="btn-icon"><Settings size={16}/></button>
                    <button className="btn-icon"><MoreVertical size={16}/></button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectStorage;
