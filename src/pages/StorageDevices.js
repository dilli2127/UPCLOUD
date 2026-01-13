import React, { useState } from 'react';
import { 
  HardDrive, Plus, Copy, Trash2, Edit 
} from 'lucide-react';
import storageData from '../data/storage.json';
import './StorageDevices.css';

const StorageDevices = () => {
  return (
    <div className="storage-page">
      <div className="storage-header">
        <div className="storage-title">
          <div className="icon-box">
             <HardDrive size={24} color="#7b00ff" />
          </div>
          <h1>Devices</h1>
        </div>
        <p className="storage-description">
          This page lists all your storage devices. From here, you can manage your devices or create <a href="#">Custom images</a> from any device that is not currently in use.
        </p>
        <button className="btn-add-storage">
          <Plus size={18} /> Add storage from URL
        </button>
      </div>

      <div className="storage-list">
        <div className="list-header">
           <div className="col-name">NAME AND UUID <span className="sort-arrow">▲</span></div>
           <div className="col-tier">TIER <span className="sort-arrow">▼</span></div>
           <div className="col-size">SIZE <span className="sort-arrow">▼</span></div>
           <div className="col-attached">ATTACHED TO</div>
           <div className="col-location">LOCATION <span className="sort-arrow">▼</span></div>
           <div className="col-actions"></div>
        </div>

        {storageData.map((device) => (
          <div className="storage-row" key={device.id}>
             <div className="col-name">
                <div className="device-name">{device.name}</div>
                <div className="device-uuid">
                   {device.id} <Copy size={12} className="copy-icon" />
                </div>
             </div>
             
             <div className="col-tier">{device.tier}</div>
             <div className="col-size">{device.size}</div>
             <div className="col-attached">
               <span className="link-text">{device.attachedTo}</span>
             </div>
             <div className="col-location">{device.location}</div>
             
             <div className="col-actions">
               <button className="icon-btn"><Edit size={16} /></button>
               <button className="icon-btn"><Trash2 size={16} /></button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageDevices;
