import React from 'react';
import { Database, Search, HardDrive } from 'lucide-react';
import './Databases.css';

const Databases = () => {
  return (
    <div className="db-page">
      <div className="db-content-left">
         <h1 className="db-title">Databases</h1>
         
         <div className="db-description">
           <p>
             Managed Databases enable you to accelerate application innovation through a modern, fully-managed open source database infrastructure immediately deployable on AWS Private Cloud.
           </p>
           <p>Below is the list of databases we offer.</p>
         </div>

         <div className="db-list">
            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} color="#7b00ff"/>
               </div>
               <div className="db-info">
                  <h3>naduvan dev</h3>
                  <p>PostgreSQL 14 • 2 vCPUs • 4 GB RAM • 80 GB Storage</p>
               </div>
               <div className="db-status">
                   <span className="status-dot running"></span> Running
               </div>
            </div>

            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} color="#7b00ff"/>
               </div>
               <div className="db-info">
                  <h3>naduvan prod</h3>
                  <p>PostgreSQL 14 • 8 vCPUs • 32 GB RAM • 320 GB Storage</p>
               </div>
               <div className="db-status">
                   <span className="status-dot running"></span> Running
               </div>
            </div>

            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} color="#7b00ff"/>
               </div>
               <div className="db-info">
                  <h3>naduvan org</h3>
                  <p>PostgreSQL 14 • 2 vCPUs • 4 GB RAM • 80 GB Storage</p>
               </div>
               <div className="db-status">
                   <span className="status-dot running"></span> Running
               </div>
            </div>
            
            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} color="#7b00ff"/>
               </div>
               <div className="db-info">
                  <h3>masm instance</h3>
                  <p>MySQL 8 • 3 Nodes (HA/Replicas) • 4 vCPUs • 16 GB RAM</p>
               </div>
               <div className="db-status">
                   <span className="status-dot running"></span> Running (3 Instances)
               </div>
            </div>

         </div>

         <div className="db-actions">
           <button className="btn-create-db">Create new Database</button>
           <button className="btn-learn-db">Learn more</button>
         </div>
      </div>
      
      <div className="db-visual">
         {/* Simple server rack visual */}
         <div className="rack-icon">
             <div className="rack-slot"></div>
             <div className="rack-slot"></div>
             <div className="rack-slot"></div>
         </div>
      </div>
    </div>
  );
};

export default Databases;
