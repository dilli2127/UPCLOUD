import React from 'react';
import { Users, Edit2 } from 'lucide-react';
import peopleData from '../data/people_accounts.json';
import './PeopleAccounts.css';

const PeopleAccounts = () => {
  return (
    <div className="people-accounts-page">
      <div className="pa-header">
         <div className="pa-title">
           <div className="icon-box-purple">
             <Users size={24} color="#7b00ff" />
           </div>
           <h1>People</h1>
         </div>

         {/* In-page Tabs */}
         <div className="pa-tabs">
            <div className="pa-tab active">Accounts</div>
            <div className="pa-tab">Permissions</div>
         </div>
      </div>

      <div className="pa-content">
         <p className="pa-desc">
            The main account holder can edit their account details as well as create and manage subaccount to grant access to their AWS Private Cloud services.
         </p>

         <div className="pa-actions">
            <input type="text" placeholder="Search usernames" className="search-input" />
            <button className="btn-create-sub">Create subaccount</button>
         </div>

         <div className="pa-list">
            <div className="list-header">
               <div className="col-pa-user">USERNAME <span className="sort-arrow">▲</span></div>
               <div className="col-pa-name">NAME <span className="sort-arrow">▼</span></div>
               <div className="col-pa-email">EMAIL <span className="sort-arrow">▼</span></div>
               <div className="col-pa-type">TYPE <span className="sort-arrow">▼</span></div>
               <div className="col-pa-2fa">2FA STATUS <span className="sort-arrow">▼</span></div>
               <div className="col-pa-feat">FEATURES</div>
               <div className="col-pa-action"></div>
            </div>

            {peopleData.map((item, index) => (
               <div className="pa-row" key={index}>
                  <div className="col-pa-user">
                     <div className="user-avatar" style={{ backgroundColor: index === 0 ? '#7b00ff' : '#7b00ff' }}>
                        {item.username.substring(0,2).toUpperCase()}
                     </div>
                     <span className="username-text">{item.username}</span>
                  </div>
                  
                  <div className="col-pa-name">{item.name}</div>
                  <div className="col-pa-email">{item.email}</div>
                  <div className="col-pa-type">{item.type}</div>
                  
                  <div className="col-pa-2fa">
                     <span className="dot red"></span> {item['2fa']}
                  </div>
                  
                  <div className="col-pa-feat">
                     {item.features.map((feat, i) => (
                        <span key={i} className="feat-badge">{feat.label}</span>
                     ))}
                  </div>

                  <div className="col-pa-action">
                     <button className="btn-edit-icon"><Edit2 size={14} /></button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default PeopleAccounts;
