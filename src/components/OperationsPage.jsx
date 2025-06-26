import React, { useState } from 'react';
import { FaUserCheck, FaUserTimes, FaTruck, FaTools, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

const OperationsPage = () => {
  const [activeTab, setActiveTab] = useState('staff');

  const staff = [
    { id: 1, name: 'John Mwangi', role: 'Fuel Technician', status: 'Present', lastActive: 'Today, 08:00 AM' },
    { id: 2, name: 'Sarah Kamau', role: 'Logistics Coordinator', status: 'Present', lastActive: 'Today, 07:45 AM' },
    { id: 3, name: 'Mike Otieno', role: 'Safety Officer', status: 'Absent', lastActive: 'Yesterday, 05:30 PM' },
    { id: 4, name: 'Grace Wambui', role: 'Depot Manager', status: 'Present', lastActive: 'Today, 07:30 AM' },
  ];

  const maintenance = [
    { id: 1, equipment: 'Fuel Truck #5', type: 'Preventive', dueDate: '2023-07-10', status: 'Scheduled' },
    { id: 2, equipment: 'Storage Tank A', type: 'Inspection', dueDate: '2023-06-25', status: 'Overdue' },
    { id: 3, equipment: 'Pump System #3', type: 'Calibration', dueDate: '2023-07-15', status: 'Scheduled' },
  ];

  const safetyIssues = [
    { id: 1, issue: 'Spill reported at Depot B', priority: 'High', reported: '2023-06-18', status: 'Investigation' },
    { id: 2, issue: 'Safety gear missing', priority: 'Medium', reported: '2023-06-15', status: 'Resolved' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Operations Dashboard</h2>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('staff')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'staff' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Staff Status
        </button>
        <button
          onClick={() => setActiveTab('maintenance')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'maintenance' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Maintenance
        </button>
        <button
          onClick={() => setActiveTab('safety')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'safety' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Safety Logs
        </button>
      </div>

      {activeTab === 'staff' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staff.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-900 font-medium">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-blue-900">{employee.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full flex items-center ${
                        employee.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {employee.status === 'Present' ? (
                          <FaUserCheck className="mr-1" />
                        ) : (
                          <FaUserTimes className="mr-1" />
                        )}
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maintenance Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {maintenance.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.equipment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Overdue' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button className="text-blue-900 hover:text-blue-700">Reschedule</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'safety' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {safetyIssues.map((issue) => (
                  <tr key={issue.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{issue.issue}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        issue.priority === 'High' ? 'bg-red-100 text-red-800' :
                        issue.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{issue.reported}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{issue.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button className="text-blue-900 hover:text-blue-700">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationsPage;