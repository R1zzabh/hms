import React from 'react';

const mockBill = {
  patientName: 'Sanjay Kumar',
  patientId: 'P00456',
  roomNumber: '312-A',
  items: [
    { service: 'Doctor Consultation', charge: 1500, date: '2025-08-10' },
    { service: 'MRI Scan', charge: 8000, date: '2025-08-10' },
    { service: 'Standard Blood Panel', charge: 1200, date: '2025-08-11' },
    { service: 'IV Fluids (Saline)', charge: 500, date: '2025-08-11' },
    { service: 'Room Charge (2 Days)', charge: 6000, date: '2025-08-12' },
  ],
  total: 17200,
};

const Billing = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md">
      <div className="p-4 mb-6 text-white bg-blue-600 rounded-t-lg">
        <h1 className="text-2xl font-bold">Patient Bill</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
        <div className="p-2 bg-gray-50 rounded">
          <span className="font-bold text-gray-600">Patient Name:</span> {mockBill.patientName}
        </div>
        <div className="p-2 bg-gray-50 rounded">
          <span className="font-bold text-gray-600">Patient ID:</span> {mockBill.patientId}
        </div>
        <div className="p-2 bg-gray-50 rounded">
          <span className="font-bold text-gray-600">Room No:</span> {mockBill.roomNumber}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="hidden md:table-header-group bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-600 uppercase">Service</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-600 uppercase">Date</th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-600 uppercase">Charge (₹)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 md:divide-y-0">
            {mockBill.items.map((item, index) => (
              <tr key={index} className="block p-4 mb-4 border rounded-lg md:table-row md:border-0 md:p-0 md:mb-0">
                <td className="flex justify-between py-2 md:table-cell md:px-6 md:py-4">
                  <span className="font-bold md:hidden">Service:</span>
                  <span>{item.service}</span>
                </td>
                <td className="flex justify-between py-2 md:table-cell md:px-6 md:py-4">
                  <span className="font-bold md:hidden">Date:</span>
                  <span>{item.date}</span>
                </td>
                <td className="flex justify-between py-2 font-semibold text-right md:table-cell md:px-6 md:py-4 md:font-normal">
                  <span className="font-bold md:hidden">Charge (₹):</span>
                  <span>{item.charge.toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="flex justify-between py-2 text-xl font-bold border-t-2 border-gray-400">
            <span>Total Amount:</span>
            <span>₹{mockBill.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={handlePrint}
          className="w-full px-6 py-3 font-bold text-white bg-blue-600 rounded-lg md:w-auto hover:bg-blue-700"
        >
          Print Bill
        </button>
      </div>
    </div>
  );
};

export default Billing;