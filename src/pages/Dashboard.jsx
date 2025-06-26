import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { 
  FaBell, FaUserCircle, FaTachometerAlt, FaClipboardList, 
  FaBoxes, FaUsers, FaChartLine, FaMoneyBillWave, 
  FaTools, FaCog, FaChevronDown, FaSearch 
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const DashboardLayout = ({ children, activePage }) => {
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
            <a
              key={item.name}
              href={`#${item.component}`}
              className={`flex items-center px-6 py-3 ${activePage === item.component ? 'bg-blue-800' : 'hover:bg-blue-800'} transition-colors duration-200`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-blue-900">{menuItems.find(item => item.component === activePage)?.name}</h2>
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

// Dashboard Overview Page
const OverviewPage = () => {
  return (
    <>
      {/* KPI Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Fuel Sold</h3>
          <p className="text-2xl font-bold text-blue-900">1,240,500 L</p>
          <p className="text-green-500 text-sm">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm font-medium">Lubricants Sales</h3>
          <p className="text-2xl font-bold text-blue-900">24,500 L</p>
          <p className="text-green-500 text-sm">↑ 5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Monthly Revenue</h3>
          <p className="text-2xl font-bold text-blue-900">$1.2M</p>
          <p className="text-green-500 text-sm">↑ 8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium">Depot Stock Level</h3>
          <p className="text-2xl font-bold text-blue-900">78%</p>
          <p className="text-yellow-500 text-sm">↓ 3% from last week</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Fuel Sales Trends</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-400">Line Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Top-Performing Depots</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-400">Bar Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-blue-900">Recent Orders</h3>
          <button className="text-sm text-blue-900 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">ORD-100{item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Client {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item % 2 === 0 ? 'Jet A1' : 'Avgas'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item * 5000} L</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${item % 3 === 0 ? 'bg-green-100 text-green-800' : item % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {item % 3 === 0 ? 'Delivered' : item % 3 === 1 ? 'In Transit' : 'Processing'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-06-{10 + item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// Inventory Page (example of another page)
const InventoryPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-900">Depot Inventory</h3>
        <div className="flex space-x-2">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors">
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Depot</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threshold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3, 4].map((item) => (
              <tr key={item} className={item === 3 ? 'bg-red-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Depot {item}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item % 2 === 0 ? 'Jet A1' : 'Avgas'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item === 3 ? '5,000' : (item * 15000).toLocaleString()} L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">10,000 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item === 3 ? (
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Low Stock</span>
                  ) : (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">In Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch(activePage) {
      case 'overview': return <OverviewPage />;
      case 'inventory': return <InventoryPage />;
      // Add cases for other pages (orders, clients, etc.)
      default: return <OverviewPage />;
    }
  };

  return (
    <DashboardLayout activePage={activePage}>
      {renderPage()}
    </DashboardLayout>
  );
};

export default Dashboard;