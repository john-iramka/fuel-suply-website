import React, { useState } from 'react';
import { FaSearch, FaFileInvoiceDollar, FaMoneyBillWave, FaRegClockCircle, FaCheckCircle } from 'react-icons/fa';

const FinancePage = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  const [searchTerm, setSearchTerm] = useState('');

  const invoices = [
    { id: 'INV-2023-001', client: 'Skyline Airlines', amount: '$15,200', date: '2023-06-15', dueDate: '2023-07-15', status: 'Paid' },
    { id: 'INV-2023-002', client: 'Global Cargo', amount: '$8,750', date: '2023-06-10', dueDate: '2023-07-10', status: 'Pending' },
    { id: 'INV-2023-003', client: 'Coastal Aviation', amount: '$12,500', date: '2023-06-05', dueDate: '2023-07-05', status: 'Overdue' },
    { id: 'INV-2023-004', client: 'Mountain Air', amount: '$5,000', date: '2023-05-28', dueDate: '2023-06-28', status: 'Paid' },
  ];

  const financials = {
    quarterRevenue: '$245,000',
    expenses: '$185,000',
    profit: '$60,000',
    outstanding: '$20,750'
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-blue-900">Financial Management</h2>
        <div className="flex space-x-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('invoices')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'invoices' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Invoices
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'reports' ? 'border-b-2 border-blue-900 text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Financial Reports
        </button>
      </div>

      {activeTab === 'invoices' ? (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{invoice.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{invoice.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{invoice.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{invoice.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{invoice.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full flex items-center ${
                        invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status === 'Paid' ? <FaCheckCircle className="mr-1" /> :
                         invoice.status === 'Pending' ? <FaRegClockCircle className="mr-1" /> :
                         <FaMoneyBillWave className="mr-1" />}
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button className="text-blue-900 hover:text-blue-700 mr-3">View</button>
                      <button className="text-gray-500 hover:text-gray-700">PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <FaMoneyBillWave className="text-blue-900 mr-2 text-xl" />
              <h3 className="text-lg font-semibold">Quarterly Revenue</h3>
            </div>
            <p className="text-3xl font-bold text-blue-900">{financials.quarterRevenue}</p>
            <p className="text-sm text-gray-500 mt-2">Current quarter (Q2 2023)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <FaFileInvoiceDollar className="text-red-500 mr-2 text-xl" />
              <h3 className="text-lg font-semibold">Outstanding Payments</h3>
            </div>
            <p className="text-3xl font-bold text-red-500">{financials.outstanding}</p>
            <p className="text-sm text-gray-500 mt-2">From 3 clients</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-yellow-500 mr-2 text-xl" />
              <h3 className="text-lg font-semibold">Operating Expenses</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-600">{financials.expenses}</p>
            <p className="text-sm text-gray-500 mt-2">Q2 2023</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2 text-xl" />
              <h3 className="text-lg font-semibold">Net Profit</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{financials.profit}</p>
            <p className="text-sm text-gray-500 mt-2">Q2 2023</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancePage;