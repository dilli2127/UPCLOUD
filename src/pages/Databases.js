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
             Managed Databases enable you to accelerate application innovation through a modern, fully-managed open source database infrastructure immediately deployable on UpCloud.
           </p>
           <p>Below is the list of databases we offer.</p>
         </div>

         <div className="db-list">
            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} />
               </div>
               <div className="db-info">
                  <h3>PostgreSQL</h3>
                  <p>PostgreSQL - Object-Relational Database Management System.</p>
               </div>
            </div>

            <div className="db-item">
               <div className="db-icon">
                  <Database size={24} /> {/* Placeholder for dolphin */}
               </div>
               <div className="db-info">
                  <h3>MySQL</h3>
                  <p>MySQL - Relational Database Management System.</p>
               </div>
            </div>

            <div className="db-item">
               <div className="db-icon">
                  <HardDrive size={24} /> {/* Placeholder for Valkey */}
               </div>
               <div className="db-info">
                  <h3>Valkey</h3>
                  <p>Valkey - In-Memory Data Structure Store. <a href="#">Learn more...</a></p>
               </div>
            </div>
            
            <div className="db-item">
               <div className="db-icon">
                  <Search size={24} /> {/* Placeholder for OpenSearch */}
               </div>
               <div className="db-info">
                  <h3>OpenSearch</h3>
                  <p>OpenSearch - Search & Analyze Data in Real Time.</p>
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
