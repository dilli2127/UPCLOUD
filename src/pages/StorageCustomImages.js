import React from 'react';
import { Disc } from 'lucide-react';
import './StorageCustomImages.css';

const StorageCustomImages = () => {
  return (
    <div className="custom-images-page">
      <div className="ci-header">
        <div className="ci-title">
           <div className="icon-box">
             <Disc size={24} color="#7b00ff" />
           </div>
           <h1>Custom images</h1>
        </div>
        <p className="ci-description">
          This page lists all the custom images you have created. A custom image is a template made from a storage device, allowing you to quickly create new servers with the same base configuration.
        </p>
        <p className="ci-instruction">
          To create a custom image, go to the <a href="/dashboard/storage/devices">Devices page</a> and select "Create custom image" from any device that is not used by a running server.
        </p>

        <div className="ci-pricing">
           <div className="price-item">
              <span className="price-rate">€0.22 per month per GB</span>
           </div>
           <div className="total-monthly">
              Total monthly <span className="purple-val">€0.00</span>
           </div>
        </div>
      </div>

      <div className="ci-list">
         <div className="list-header">
            <div className="col-ci-name">NAME AND UUID <span className="sort-arrow">▲</span></div>
            <div className="col-ci-size">SIZE <span className="sort-arrow">▼</span></div>
            <div className="col-ci-price">IMAGE PRICE <span className="sort-arrow">▼</span></div>
            <div className="col-ci-fees">LICENSING FEES <span className="sort-arrow">▼</span></div>
            <div className="col-ci-loc">LOCATION <span className="sort-arrow">▼</span></div>
         </div>
         
         <div className="empty-state">
            Looks like you don't have any templates yet
         </div>
      </div>
    </div>
  );
};

export default StorageCustomImages;
