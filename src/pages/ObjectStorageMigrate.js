import React from 'react';
import './ObjectStorageMigrate.css';

const ObjectStorageMigrate = () => {
  return (
    <div className="migrate-page">
      <div className="migrate-content-left">
         <h1 className="migrate-title">Migration tool</h1>
         
         <div className="migrate-description">
           <p>
             The migration tool allows you to migrate from a variety of different sources to our Managed Object Storage.
           </p>
         </div>

         <div className="migrate-actions">
           <button className="btn-create-mig">Create new migration</button>
           <button className="btn-doc-mig">Documentation</button>
         </div>
      </div>
      
      <div className="migrate-visual">
         {/* Simple CSS representation of the link/migration icon */}
         <div className="link-icon-large">
            <div className="link-square sq1"></div>
            <div className="link-square sq2"></div>
            <div className="link-connection"></div>
         </div>
      </div>
    </div>
  );
};

export default ObjectStorageMigrate;
