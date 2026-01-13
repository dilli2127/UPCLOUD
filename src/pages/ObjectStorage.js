import React from 'react';
import './ObjectStorage.css';

const ObjectStorage = () => {
  return (
    <div className="obj-page">
      <div className="obj-content-left">
         <h1 className="obj-title">Object Storage</h1>
         
         <div className="obj-description">
           <p>
             Managed Object Storage enables effortless delivery of content, such as static assets, and storing of data, such as backups and logs. It can be used via a HTTP API or web browser. Storage and plan will scale automatically up and down in 250 GB units based on actual usage. Plans start at <span className="price-highlight">€5.00</span> per month.
           </p>
         </div>

         <div className="obj-actions">
           <button className="btn-create-obj">Create new Object Storage</button>
           <button className="btn-learn-obj">Learn more</button>
         </div>
      </div>
      
      <div className="obj-visual">
         {/* Simple CSS representation of the bucket icon in screenshot */}
         <div className="bucket-icon-large">
            <div className="bucket-rim"></div>
            <div className="bucket-body"></div>
            <div className="bucket-handle-line"></div>
            <div className="bucket-handle-circle"></div>
         </div>
      </div>
    </div>
  );
};

export default ObjectStorage;
