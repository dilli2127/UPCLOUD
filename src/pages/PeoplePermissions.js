import React from 'react';
import { Users, Edit2 } from 'lucide-react';
import peopleData from '../data/people_accounts.json';
import './PeoplePermissions.css';

const PeoplePermissions = () => {
  // Creating a subset or reusing existing data for demo purposes, 
  // as the screenshot shows similar user list but simplified columns
  const permissionData = peopleData.filter(u => u.type === 'Subaccount');

  return (
    <div className="people-permissions-page">
      <div className="pp-header">
         <div className="pp-title">
           <div className="icon-box-purple">
             <Users size={24} color="#7b00ff" />
           </div>
           <h1>People</h1>
         </div>

         {/* In-page Tabs */}
         <div className="pp-tabs">
            <div className="pp-tab">Accounts</div>
            <div className="pp-tab active">Permissions</div>
         </div>
      </div>

      <div className="pp-content">
         <p className="pp-desc">
            The main account holder can grant granual access to their UpCloud services by editing the permissions of each subaccount.
         </p>

         <div className="pp-actions">
            <input type="text" placeholder="Search usernames" className="search-input" />
            <button className="btn-set-perm">Set permissions</button>
         </div>

         <div className="pp-list">
            <div className="list-header">
               <div className="col-pp-user">USERNAME <span className="sort-arrow">▲</span></div>
               <div className="col-pp-email">EMAIL <span className="sort-arrow">▼</span></div>
               <div className="col-pp-type">TYPE</div>
               <div className="col-pp-action"></div>
            </div>

            {permissionData.map((item, index) => (
               <div className="pp-row" key={index}>
                  <div className="col-pp-user">
                     <div className="user-avatar" style={{ backgroundColor: '#7b00ff' }}>
                        {item.username.substring(0,2).toUpperCase()}
                     </div>
                     <span className="username-text">{item.username}</span>
                  </div>
                  
                  <div className="col-pp-email">{item.email}</div>
                  <div className="col-pp-type">{item.type}</div>

                  <div className="col-pp-action">
                     <button className="btn-edit-icon"><Edit2 size={14} /></button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default PeoplePermissions;
