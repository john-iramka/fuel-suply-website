import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTruck, FaCheckCircle, FaClock } from 'react-icons/fa';

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const orders = [
    { id: 'ORD-1001', client: 'Skyline Airlines', product: 'Jet A1', quantity: '15,000 L', date: '2023-06-15', status: 'Delivered' },
    { id: 'ORD-1002', client: 'Global Cargo', product: 'Avgas', quantity: '8,000 L', date: '2023-06-14', status: 'In Transit' },
    { id: 'ORD-1003', client: 'Coastal Aviation', product: 'Jet A1', quantity: '12,500 L', date: '2023-06-13', status: 'Processing' },
    { id: 'ORD-1004', client: 'Mountain Air', product: 'Avgas', quantity: '5,000 L', date: '2023-06-12', status: 'Delivered' },
    { id: 'ORD-1005', client: 'Desert Wings', product: 'Jet A1', quantity: '18,000 L', date: '2023-06-11', status: 'In Transit' },
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-blue-900">Fuel Orders</h2>
        <div className="flex space-x-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center whitespace-nowrap"
          >
            <FaPlus className="mr-2" /> New Order
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status === 'Delivered' ? <FaCheckCircle className="inline mr-1" /> :
                       order.status === 'In Transit' ? <FaTruck className="inline mr-1" /> :
                       <FaClock className="inline mr-1" />}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <button className="text-blue-900 hover:text-blue-700 mr-3">View</button>
                    <button className="text-gray-500 hover:text-gray-700">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Order Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Create New Order</h3>
              {/* Form would go here */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Select client</option>
                    <option>Skyline Airlines</option>
                    <option>Global Cargo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Jet A1</option>
                    <option>Avgas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quantity (Liters)</label>
                  <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;