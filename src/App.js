import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Servers from './pages/Servers';
import GpuServers from './pages/GpuServers';
import AntiAffinityGroups from './pages/AntiAffinityGroups';
import StorageDevices from './pages/StorageDevices';
import StorageBackups from './pages/StorageBackups';
import StorageCustomImages from './pages/StorageCustomImages';
import StorageTemplates from './pages/StorageTemplates';
import NetworkPublic from './pages/NetworkPublic';
import NetworkPrivate from './pages/NetworkPrivate';
import NetworkPeering from './pages/NetworkPeering';
import NetworkRouters from './pages/NetworkRouters';
import NetworkFloatingIPs from './pages/NetworkFloatingIPs';
import NetworkVPNGateways from './pages/NetworkVPNGateways';
import NetworkNATGateways from './pages/NetworkNATGateways';
import ObjectStorage from './pages/ObjectStorage';
import ObjectStorageMigrate from './pages/ObjectStorageMigrate';
import Databases from './pages/Databases';
import LoadBalancerServices from './pages/LoadBalancerServices';
import LoadBalancerCertificates from './pages/LoadBalancerCertificates';
import Kubernetes from './pages/Kubernetes';
import PrivateCloud from './pages/PrivateCloud';
import DeveloperTools from './pages/DeveloperTools';
import PeopleAccounts from './pages/PeopleAccounts';
import PeoplePermissions from './pages/PeoplePermissions';
import UsageBillingLog from './pages/UsageBillingLog';
import UsageSummary from './pages/UsageSummary';
import UsageNetworkTransfer from './pages/UsageNetworkTransfer';
import UpCloudEssentials from './pages/UpCloudEssentials';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          
          {/* Server Sub-routes */}
          <Route path="servers" element={<Navigate to="cloud" replace />} />
          <Route path="servers/cloud" element={<Servers />} />
          <Route path="servers/gpu" element={<GpuServers />} />
          <Route path="servers/anti-affinity" element={<AntiAffinityGroups />} />
          
          {/* Storage Sub-routes */}
          <Route path="storage" element={<Navigate to="devices" replace />} />
          <Route path="storage/devices" element={<StorageDevices />} />
          <Route path="storage/backups" element={<StorageBackups />} />
          <Route path="storage/custom-images" element={<StorageCustomImages />} />
          <Route path="storage/templates" element={<StorageTemplates />} />
          
          {/* Network Sub-routes */}
          <Route path="network" element={<Navigate to="public" replace />} />
          <Route path="network/public" element={<NetworkPublic />} />
          <Route path="network/private" element={<NetworkPrivate />} />
          <Route path="network/peering" element={<NetworkPeering />} />
          <Route path="network/routers" element={<NetworkRouters />} />
          <Route path="network/floating-ips" element={<NetworkFloatingIPs />} />
          <Route path="network/vpn" element={<NetworkVPNGateways />} />
          <Route path="network/nat" element={<NetworkNATGateways />} />
          
          {/* Object Storage Sub-routes */}
          <Route path="object-storage" element={<Navigate to="list" replace />} />
          <Route path="object-storage/list" element={<ObjectStorage />} />
          <Route path="object-storage/migrate" element={<ObjectStorageMigrate />} />
          
          {/* Database Route */}
          <Route path="databases" element={<Databases />} />

          {/* Load Balancer Routes */}
          <Route path="load-balancer" element={<Navigate to="services" replace />} />
          <Route path="load-balancer/services" element={<LoadBalancerServices />} />
          <Route path="load-balancer/certificates" element={<LoadBalancerCertificates />} />

          {/* Kubernetes Route */}
          <Route path="kubernetes" element={<Kubernetes />} />

          {/* Private Cloud Route */}
          <Route path="private-cloud" element={<PrivateCloud />} />

          {/* Developer Tools Route */}
          <Route path="dev-tools" element={<DeveloperTools />} />

          {/* People Routes */}
          <Route path="people" element={<Navigate to="accounts" replace />} />
          <Route path="people/accounts" element={<PeopleAccounts />} />
          <Route path="people/permissions" element={<PeoplePermissions />} />

          {/* Usage Routes */}
          <Route path="usage" element={<Navigate to="billing-log" replace />} />
          <Route path="usage/billing-log" element={<UsageBillingLog />} />
          <Route path="usage/summary" element={<UsageSummary />} />
          <Route path="usage/network-transfer" element={<UsageNetworkTransfer />} />

          {/* Essentials Route */}
          <Route path="essentials" element={<UpCloudEssentials />} />

          {/* Catch all within dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
