
import React from 'react';


const reportsList = [
  {
    title: 'Monthly Patient Admissions',
    description: 'Track the number of new patients admitted each month.',
  },
  {
    title: 'Financial Summary',
    description: 'An overview of billing, revenue, and expenses for the selected period.',
  },
  {
    title: 'Doctor Performance',
    description: 'Review patient load and appointment statistics for each doctor.',
  },
  {
    title: 'Bed Occupancy Rate',
    description: 'Monitor the percentage of occupied beds across different wards.',
  },
  {
    title: 'Inventory Stock Levels',
    description: 'Check current levels of medical supplies and pharmaceuticals.',
  },
   {
    title: 'Appointment Analytics',
    description: 'Analyze trends in appointment scheduling, cancellations, and no-shows.',
  },
];

const Reports = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">System Reports</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reportsList.map((report, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 text-white bg-blue-600">
              <h2 className="text-xl font-bold">{report.title}</h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600">{report.description}</p>
            </div>
            <div className="px-6 pb-4">
               <button className="w-full px-4 py-2 font-semibold text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
