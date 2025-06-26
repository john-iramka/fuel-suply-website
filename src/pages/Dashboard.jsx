import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { 
  FaBell, FaUserCircle, FaTachometerAlt, FaClipboardList, 
  FaBoxes, FaUsers, FaChartLine, FaMoneyBillWave, 
  FaTools, FaCog, FaChevronDown, FaSearch, FaPlus 
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import OrdersPage from './OrdersPage';
import ClientsPage from './ClientsPage';
import AnalyticsPage from './AnalyticsPage';
import FinancePage from './FinancePage';
import OperationsPage from './OperationsPage';
import SettingsPage from './SettingsPage';

const DashboardLayout = ({ children, activePage, setActivePage }) => {
  const { user, logout } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, component: 'overview' },
    { name: 'Orders', icon: <FaClipboardList />, component: 'orders' },
    { name: 'Inventory', icon: <FaBoxes />, component: 'inventory' },
    { name: 'Clients', icon: <FaUsers />, component: 'clients' },
    { name: 'Analytics', icon: <FaChartLine />, component: 'analytics' },
    { name: 'Finance', icon: <FaMoneyBillWave />, component: 'finance' },
    { name: 'Operations', icon: <FaTools />, component: 'operations' },
    { name: 'Settings', icon: <FaCog />, component: 'settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transform fixed md:static inset-y-0 left-0 w-64 bg-blue-900 text-white transition-transform duration-300 ease-in-out z-40`}>
        <div className="p-4 flex items-center border-b border-blue-800">
          <img 
            src="/images/logo-1-2.png" 
            alt="Avion Petroleum" 
            className="h-10 mr-2" 
          />
          <h1 className="text-xl font-bold">Avion Petroleum</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActivePage(item.component);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left flex items-center px-6 py-3 ${activePage === item.component ? 'bg-blue-800' : 'hover:bg-blue-800'} transition-colors duration-200`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-blue-900">
                {menuItems.find(item => item.component === activePage)?.name}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-blue-900 relative">
                <FaBell />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-500"></span>
              </button>
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <FaUserCircle className="text-blue-900 text-2xl" />
                  <span className="hidden md:inline text-gray-700">{user?.name}</span>
                  <FaChevronDown className={`text-gray-500 transition-transform ${isProfileOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch(activePage) {
      case 'orders': return <OrdersPage />;
      case 'clients': return <ClientsPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'finance': return <FinancePage />;
      case 'operations': return <OperationsPage />;
      case 'settings': return <SettingsPage />;
    }
  };

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </DashboardLayout>
  );
};

export default Dashboard;