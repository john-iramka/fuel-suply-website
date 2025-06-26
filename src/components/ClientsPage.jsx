import React, { useState } from 'react';
import { FaSearch, FaBuilding, FaPlane, FaShip, FaPhone, FaEnvelope } from 'react-icons/fa';

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const clients = [
    { 
      id: 1, 
      name: 'Skyline Airlines', 
      type: 'Airline', 
      industry: 'Commercial Aviation',
      contact: 'John Smith', 
      email: 'john@skyline.com',
      phone: '+254 712 345 678',
      credit: 'Approved',
      lastOrder: '2023-06-15'
    },
    { 
      id: 2, 
      name: 'Global Cargo', 
      type: 'Cargo', 
      industry: 'Logistics',
      contact: 'Sarah Johnson', 
      email: 'sarah@globalcargo.com',
      phone: '+254 723 456 789',
      credit: 'Pending',
      lastOrder: '2023-06-10'
    },
    { 
      id: 3, 
      name: 'Coastal Aviation', 
      type: 'Charter', 
      industry: 'Private Aviation',
      contact: 'Mike Brown', 
      email: 'mike@coastal.com',
      phone: '+254 734 567 890',
      credit: 'Approved',
      lastOrder: '2023-06-05'
    },
  ];

  const filteredClients = clients.filter(client =>
    (activeTab === 'all' || client.industry.toLowerCase().includes(activeTab)) &&
    (client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIndustryIcon = (industry) => {
    switch(industry) {
      case 'Commercial Aviation': return <FaPlane className="text-blue-900 mr-2" />;
      case 'Logistics': return <FaTruck className="text-blue-900 mr-2" />;
      case 'Private Aviation': return <FaPlane className="text-blue-900 mr-2" />;
      default: return <FaBuilding className="text-blue-900 mr-2" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-blue-900">Client Management</h2>
        <div className="flex space-x-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'all' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          All Clients
        </button>
        <button
          onClick={() => setActiveTab('commercial')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'commercial' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Airlines
        </button>
        <button
          onClick={() => setActiveTab('logistics')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'logistics' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Cargo
        </button>
        <button
          onClick={() => setActiveTab('private')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'private' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Charter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                {getIndustryIcon(client.industry)}
                <div>
                  <h3 className="text-lg font-bold text-blue-900">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.industry}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <FaUserCircle className="mr-2 text-blue-900" />
                  <span>{client.contact}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaPhone className="mr-2 text-blue-900" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaEnvelope className="mr-2 text-blue-900" />
                  <span>{client.email}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  client.credit === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  Credit: {client.credit}
                </span>
                <span className="text-xs text-gray-500">Last order: {client.lastOrder}</span>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
              <button className="text-sm text-blue-900 hover:text-blue-700">View</button>
              <button className="text-sm text-gray-600 hover:text-gray-800">Transactions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsPage;