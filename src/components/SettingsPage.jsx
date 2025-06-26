import React, { useState } from 'react';
import { FaUserShield, FaUserPlus, FaUserEdit, FaUserSlash, FaSave } from 'react-icons/fa';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'user',
    department: 'operations'
  });

  const users = [
    { id: 1, name: 'Admin User', email: 'admin@avion.com', role: 'admin', lastActive: 'Today' },
    { id: 2, name: 'Manager User', email: 'manager@avion.com', role: 'manager', lastActive: 'Today' },
    { id: 3, name: 'Operations User', email: 'ops@avion.com', role: 'user', lastActive: 'Yesterday' },
  ];

  const companySettings = {
    name: 'Avion Petroleum Ltd',
    address: 'Wilson Airport, Nairobi, Kenya',
    contactEmail: 'info@avionpetroleum.com',
    contactPhone: '+254 728 953 057',
    fuelTypes: ['Jet A1', 'Avgas', 'Diesel'],
    depots: ['Nairobi', 'Mombasa', 'Kisumu']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('New user:', newUser);
    setShowAddUserModal(false);
    setNewUser({ name: '', email: '', role: 'user', department: 'operations' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">System Settings</h2>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'users' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          User Management
        </button>
        <button
          onClick={() => setActiveTab('company')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'company' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Company Settings
        </button>
      </div>

      {activeTab === 'users' ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-900 flex items-center">
              <FaUserShield className="mr-2" /> Users & Permissions
            </h3>
            <button 
              onClick={() => setShowAddUserModal(true)}
              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaUserPlus className="mr-2" /> Add User
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-900 font-medium">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-blue-900">{user.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                          user.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.lastActive}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <button className="text-blue-900 hover:text-blue-700 mr-3">
                          <FaUserEdit className="inline mr-1" /> Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FaUserSlash className="inline mr-1" /> Disable
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-6">Company Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Company Name</h4>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={companySettings.name}
                readOnly
              />
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Address</h4>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={companySettings.address}
                readOnly
              />
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Contact Email</h4>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={companySettings.contactEmail}
                readOnly
              />
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Contact Phone</h4>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={companySettings.contactPhone}
                readOnly
              />
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Fuel Types</h4>
              <div className="flex flex-wrap gap-2">
                {companySettings.fuelTypes.map((fuel, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {fuel}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Depot Locations</h4>
              <div className="flex flex-wrap gap-2">
                {companySettings.depots.map((depot, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {depot}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 flex items-center">
              <FaSave className="mr-2" /> Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Add New User</h3>
              <form onSubmit={handleAddUser}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newUser.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={newUser.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      name="role"
                      value={newUser.role}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="user">Standard User</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select
                      name="department"
                      value={newUser.department}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="operations">Operations</option>
                      <option value="finance">Finance</option>
                      <option value="sales">Sales</option>
                      <option value="management">Management</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 flex items-center"
                  >
                    <FaUserPlus className="mr-2" /> Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;