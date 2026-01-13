import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import './DashboardLayout.css';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content-wrapper">
        <Topbar />
        <div className="dashboard-main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
