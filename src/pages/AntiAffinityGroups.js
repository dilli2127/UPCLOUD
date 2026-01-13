import React from 'react';
import { GitMerge } from 'lucide-react';
import './AntiAffinityGroups.css';

const AntiAffinityGroups = () => {
  return (
    <div className="anti-affinity-page">
      <div className="aa-header">
        <div className="aa-title">
          <GitMerge size={24} color="#7b00ff" />
          <h1>Anti-affinity groups</h1>
        </div>
        <p className="aa-description">
          Server groups allow you to enact an anti-affinity policy and organizing Cloud Servers. 
          Anti-affinity provides high availability to applications utilizing multiple Cloud Servers 
          by distributing the servers to different physical hosts to ensure redundancy.
        </p>
        <button className="btn-create-group">Create new group</button>
      </div>

      <div className="aa-list">
        <div className="aa-list-header">
           <div className="col-aa-name">NAME <span className="sort-arrow">▲</span></div>
           <div className="col-aa-policy">ANTI-AFFINITY</div>
           <div className="col-aa-status">A-A STATUS</div>
           <div className="col-aa-servers">SERVERS</div>
        </div>
        
        <div className="aa-empty-state">
           No server groups added yet.
        </div>
      </div>
    </div>
  );
};

export default AntiAffinityGroups;
