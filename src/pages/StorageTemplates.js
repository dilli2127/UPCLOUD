import React from 'react';
import { Disc, Copy } from 'lucide-react';
import templatesData from '../data/templates.json';
import './StorageTemplates.css';

const StorageTemplates = () => {
  return (
    <div className="templates-page">
      <div className="tpl-header">
        <div className="tpl-title">
           <div className="icon-box">
             <Disc size={24} color="#7b00ff" />
           </div>
           <h1>Templates</h1>
        </div>
        <p className="tpl-description">
          These templates are created and maintained by AWS Private Cloud. If you'd like, you can create your own custom image based on these so you can quickly deploy a production-ready server in just a few seconds.
        </p>
      </div>

      <div className="tpl-list">
         <div className="list-header">
            <div className="col-tpl-name">NAME AND UUID <span className="sort-arrow">▲</span></div>
            <div className="col-tpl-arch">ARCHITECTURE <span className="sort-arrow">▼</span></div>
            <div className="col-tpl-fees">LICENSING FEES <span className="sort-arrow">▼</span></div>
            <div className="col-tpl-action"></div>
         </div>

         {templatesData.map((tpl, index) => (
           <div className="tpl-row" key={index}>
              <div className="col-tpl-name">
                 <div className="tpl-name">{tpl.name}</div>
                 <div className="tpl-uuid">
                   {tpl.uuid} <Copy size={12} className="copy-icon" />
                 </div>
              </div>
              
              <div className="col-tpl-arch">{tpl.arch}</div>
              <div className="col-tpl-fees">{tpl.fee}</div>
              
              <div className="col-tpl-action">
                 <button className="btn-deploy-tpl">DEPLOY</button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default StorageTemplates;
