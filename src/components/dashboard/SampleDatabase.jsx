const SampleDatabase = () => {
  const samples = [
    {
      id: 'SMPL-24032',
      deviceId: 'DEV-112',
      datetime: '2025-03-20 09:12:54',
      location: 'Jorbeer, Rajasthan',
      result: 'Positive'
    },
    // Add more sample data as needed
  ];

  return (
    <div className="card p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Sample Database</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sample ID
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Device ID
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date/Time
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Result
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {samples.map((sample) => (
              <tr key={sample.id}>
                <td className="px-4 py-3 text-sm text-gray-900">{sample.id}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{sample.deviceId}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{sample.datetime}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{sample.location}</td>
                <td className={`px-4 py-3 text-sm font-medium ${
                  sample.result === 'Positive' ? 'text-red-500' : 
                  sample.result === 'Negative' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {sample.result}
                </td>
                <td className="px-4 py-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">Showing 5 of 1,342 samples</div>
        <div className="flex">
          <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-50">1</button>
          <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-50 text-blue-600">2</button>
          <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default SampleDatabase; 