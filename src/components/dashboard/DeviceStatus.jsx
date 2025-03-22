const DeviceStatus = () => {
  const devices = [
    {
      id: 'DEV-112',
      location: 'Jorbeer, Rajasthan',
      battery: 85,
      status: 'Active'
    },
    // Add more devices
  ];

  return (
    <div className="card p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Device Status</h3>
      <div className="space-y-3">
        {devices.map((device) => (
          <div key={device.id} className="flex justify-between items-center p-3 border rounded hover:bg-gray-50 cursor-pointer">
            <div>
              <div className="font-medium">{device.id}</div>
              <div className="text-sm text-gray-500">{device.location}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <div className="battery-indicator">
                  <div 
                    className={`battery-level ${
                      device.battery < 20 ? 'low' :
                      device.battery < 50 ? 'medium' : ''
                    }`}
                    style={{ width: `${device.battery}%` }}
                  ></div>
                </div>
                <span className="text-sm">{device.battery}%</span>
              </div>
              <div className={`text-xs ${
                device.status === 'Active' ? 'text-green-600' :
                device.status === 'Offline' ? 'text-red-600' :
                'text-yellow-600'
              }`}>
                {device.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="text-blue-600 text-sm hover:text-blue-800">View All Devices</button>
      </div>
    </div>
  );
};

export default DeviceStatus; 