import React from 'react';
import { Bell, MessageSquare, ChevronDown, ExternalLink, ShieldAlert, User, CreditCard, LogOut } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        
        <div className="topbar-item">
          <Bell size={18} />
          <span>Notifications</span>
        </div>
        
        <div 
          className={`user-profile ${isDropdownOpen ? 'active' : ''}`} 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ref={dropdownRef}
        >
          <span className="username">naduvantech</span>
          <ChevronDown size={16} className={`chevron-icon ${isDropdownOpen ? 'rotate' : ''}`} />
          <div className="avatar">VG</div>

          {isDropdownOpen && (
            <div className="user-dropdown">
               <div className="dropdown-item">
                 <div className="item-icon"><User size={16} /></div>
                 <span>Account</span>
               </div>
               <div className="dropdown-item">
                 <div className="item-icon"><CreditCard size={16} /></div>
                 <span>Billing</span>
               </div>
               <div className="dropdown-divider"></div>
               <div className="dropdown-item logout">
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
