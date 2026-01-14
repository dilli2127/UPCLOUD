import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Server, HardDrive, Network, Database, 
  Scale, Box, Lock, Code, Users, BarChart2, Zap
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { 
      icon: <Server size={20} />, 
      label: 'Servers', 
      path: '/dashboard/servers',
      submenu: [
        { label: 'Cloud Servers', path: '/dashboard/servers/cloud' },
        { label: 'GPU Servers', path: '/dashboard/servers/gpu', badge: 'NEW', badgeColor: '#7b00ff' },
        { label: 'Anti-affinity groups', path: '/dashboard/servers/anti-affinity' }
      ]
    },
    { 
      icon: <HardDrive size={20} />, 
      label: 'Storage', 
      path: '/dashboard/storage',
      submenu: [
        { label: 'Devices', path: '/dashboard/storage/devices' },
        { label: 'Backups', path: '/dashboard/storage/backups' },
        { label: 'Custom images', path: '/dashboard/storage/custom-images' },
        { label: 'Templates', path: '/dashboard/storage/templates' }
      ]
    },
    { 
      icon: <Network size={20} />, 
      label: 'Network', 
      path: '/dashboard/network',
      submenu: [
        { label: 'Public networks', path: '/dashboard/network/public' },
        { label: 'Private networks', path: '/dashboard/network/private' },
        { label: 'Peering', path: '/dashboard/network/peering' },
        { label: 'Routers', path: '/dashboard/network/routers' },
        { label: 'Floating IPs', path: '/dashboard/network/floating-ips' },
        { label: 'VPN Gateways', path: '/dashboard/network/vpn' },
        { label: 'NAT Gateways', path: '/dashboard/network/nat' },
      ]
    },
    { 
      icon: <Database size={20} />, 
      label: 'Object Storage', 
      path: '/dashboard/object-storage',
      submenu: [
         { label: 'Object Storage', path: '/dashboard/object-storage/list' },
         { label: 'Migrate', path: '/dashboard/object-storage/migrate' }
      ]
    },
    { icon: <Database size={20} />, label: 'Databases', path: '/dashboard/databases' },
    { 
      icon: <Scale size={20} />, 
      label: 'Load Balancer', 
      path: '/dashboard/load-balancer',
      submenu: [
         { label: 'Services', path: '/dashboard/load-balancer/services' },
         { label: 'Certificates', path: '/dashboard/load-balancer/certificates' }
      ]
    },
    { icon: <Box size={20} />, label: 'Kubernetes', path: '/dashboard/kubernetes' },
    { icon: <Lock size={20} />, label: 'Private Cloud', path: '/dashboard/private-cloud' },
    { icon: <Code size={20} />, label: 'Developer tools', path: '/dashboard/dev-tools' },
    { 
      icon: <Users size={20} />, 
      label: 'People', 
      path: '/dashboard/people',
      submenu: [
         { label: 'Accounts', path: '/dashboard/people/accounts' },
         { label: 'Permissions', path: '/dashboard/people/permissions' }
      ]
    },
    { 
      icon: <BarChart2 size={20} />, 
      label: 'Usage', 
      path: '/dashboard/usage',
      submenu: [
         { label: 'Billing log', path: '/dashboard/usage/billing-log' },
         { label: 'Summary', path: '/dashboard/usage/summary' },
         { label: 'Network Transfer', path: '/dashboard/usage/network-transfer' }
      ]
    },
    { icon: <Zap size={20} />, label: 'AWS Essentials', path: '/dashboard/essentials' },
  ];

  /* Logic to determine if a parent menu should be expanded/active */
  const isActive = (item) => {
    if (activePath === item.path) return true;
    if (item.submenu) {
      return item.submenu.some(sub => activePath.startsWith(sub.path));
    }
    return false;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="/">
          <span className="logo-icon">☁️</span> AWS Private Cloud
        </a>
      </div>
      
      <div className="sidebar-menu">
        {menuItems.map((item, index) => {
          const active = isActive(item);
          
          return (
            <div key={index} className="menu-group">
              <div 
                className={`menu-item ${active ? 'active' : ''}`}
                onClick={() => {
                  if (item.submenu) {
                     navigate(item.submenu[0].path);
                  } else {
                     navigate(item.path);
                  }
                }}
              >
                <div className="menu-icon">{item.icon}</div>
                <span className="menu-label">{item.label}</span>
                {item.badge && !item.submenu && (
                  <span className="menu-badge" style={{ backgroundColor: item.badgeColor }}>
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && active && (
                <div className="submenu">
                  {item.submenu.map((sub, subIndex) => (
                    <div 
                      key={subIndex}
                      className={`submenu-item ${activePath === sub.path ? 'sub-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(sub.path);
                      }}
                    >
                      <span>{sub.label}</span>
                      {sub.badge && (
                        <span className="sub-badge" style={{ backgroundColor: sub.badgeColor }}>{sub.badge}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="sidebar-footer">
        Powered by <span className="aws-brand">AWS</span>
      </div>
    </div>
  );
};

export default Sidebar;
