import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AnalyticsPage = () => {
  const salesData = [
    { name: 'Jan', fuel: 4000, lubricants: 2400 },
    { name: 'Feb', fuel: 3000, lubricants: 1398 },
    { name: 'Mar', fuel: 2000, lubricants: 9800 },
    { name: 'Apr', fuel: 2780, lubricants: 3908 },
    { name: 'May', fuel: 1890, lubricants: 4800 },
    { name: 'Jun', fuel: 2390, lubricants: 3800 },
  ];

  const depotData = [
    { name: 'Nairobi', value: 35 },
    { name: 'Mombasa', value: 25 },
    { name: 'Kisumu', value: 20 },
    { name: 'Eldoret', value: 15 },
    { name: 'Malindi', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-900">Sales Analytics</h2>
        <button className="flex items-center text-blue-900 hover:text-blue-700">
          <FaDownload className="mr-2" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <FaChartBar className="text-blue-900 mr-2" />
            <h3 className="text-lg font-semibold">Monthly Sales</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="fuel" fill="#1E3A8A" name="Fuel (KL)" />
                <Bar dataKey="lubricants" fill="#F59E0B" name="Lubricants (L)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <FaChartPie className="text-blue-900 mr-2" />
            <h3 className="text-lg font-semibold">Sales by Depot</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={depotData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {depotData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-blue-900 mr-2" />
          <h3 className="text-lg font-semibold">Annual Trends</h3>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="fuel" fill="#1E3A8A" name="Fuel Sales (KL)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;