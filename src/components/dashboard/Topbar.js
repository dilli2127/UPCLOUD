import React from 'react';
import { Bell, MessageSquare, ChevronDown, ExternalLink, ShieldAlert, User, CreditCard, LogOut } from 'lucide-react';
import './Topbar.css';

import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isNotifOpen, setIsNotifOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const notifRef = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // User Menu
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      // Notifications
      if (notifRef.current && !notifRef.current.contains(event.target)) {
         setIsNotifOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const mockNotifications = [
     { id: 1, title: 'Maintenance scheduled', time: '2 hours ago', unread: true },
     { id: 2, title: 'New invoice available', time: '1 day ago', unread: false },
     { id: 3, title: 'Server "App-Prod" created', time: '2 days ago', unread: false }
  ];

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Placeholder for left content if needed */}
      </div>
      
      <div className="topbar-right">
        <button className="btn-activate-2fa">
          <ShieldAlert size={16} /> Activate 2FA
        </button>
        
        <a href="#" className="topbar-link">
          <ExternalLink size={16} /> Earn with referrals
        </a>
        
        <div className="topbar-item">
          <MessageSquare size={18} />
          <span>Feedback</span>
        </div>
        
        <div 
           className={`topbar-item notif-trigger ${isNotifOpen ? 'active' : ''}`}
           ref={notifRef}
           onClick={() => setIsNotifOpen(!isNotifOpen)}
        >
          <div className="bell-wrapper">
             <Bell size={18} />
             <span className="notif-dot"></span>
          </div>
          <span>Notifications</span>

          {isNotifOpen && (
             <div className="notif-dropdown">
                <div className="notif-header">
                   <h3>Notifications</h3>
                   <span className="mark-read">Mark all as read</span>
                </div>
                <div className="notif-list">
                   {mockNotifications.map(notif => (
                      <div key={notif.id} className={`notif-item ${notif.unread ? 'unread' : ''}`}>
                         <div className="notif-title">{notif.title}</div>
                         <div className="notif-time">{notif.time}</div>
                      </div>
                   ))}
                </div>
                <div className="notif-footer">View all notifications</div>
             </div>
          )}
        </div>
        
        <div 
          className={`user-profile ${isDropdownOpen ? 'active' : ''}`} 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ref={dropdownRef}
          title="User Profile"
        >
          <span className="username">naduvantech</span>
          <ChevronDown size={16} className={`chevron-icon ${isDropdownOpen ? 'rotate' : ''}`} />
          <div className="avatar">VG</div>

          {isDropdownOpen && (
            <div className="user-dropdown">
               <div className="dropdown-item" onClick={(e) => { e.stopPropagation(); handleNavigate('/dashboard/account'); }}>
                 <div className="item-icon"><User size={16} /></div>
                 <span>Account</span>
               </div>
               <div className="dropdown-item" onClick={(e) => { e.stopPropagation(); handleNavigate('/dashboard/usage/billing-log'); }}>
                 <div className="item-icon"><CreditCard size={16} /></div>
                 <span>Billing</span>
               </div>
               <div className="dropdown-divider"></div>
               <div className="dropdown-item logout" onClick={(e) => { e.stopPropagation(); handleNavigate('/login'); }}>
                 <span>Logout</span>
                 <div className="item-icon-right"><LogOut size={16} /></div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
