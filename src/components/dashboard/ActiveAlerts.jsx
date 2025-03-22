const ActiveAlerts = () => {
  const alerts = [
    {
      severity: 'high',
      title: 'High Concentration Detected',
      location: 'Jorbeer Conservation Zone',
      description: '3 positive samples in 24 hours'
    },
    // Add more alerts
  ];

  return (
    <div className="card p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert-${alert.severity} p-3 rounded`}>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{alert.title}</div>
                <div className="text-sm text-gray-600 mt-1">{alert.location}</div>
                <div className="text-sm text-gray-600">{alert.description}</div>
              </div>
              <div className={`text-xs bg-${alert.severity === 'high' ? 'red' : alert.severity === 'medium' ? 'yellow' : 'green'}-200 
                text-${alert.severity === 'high' ? 'red' : alert.severity === 'medium' ? 'yellow' : 'green'}-800 px-2 py-1 rounded`}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </div>
            </div>
            <div className="mt-2 flex">
              <button className="text-xs bg-white text-gray-700 border border-gray-300 px-2 py-1 rounded mr-2 hover:bg-gray-50">
                Acknowledge
              </button>
              <button className={`text-xs bg-${
                alert.severity === 'high' ? 'red' : 
                alert.severity === 'medium' ? 'yellow' : 'green'
              }-600 text-white px-2 py-1 rounded hover:bg-${
                alert.severity === 'high' ? 'red' : 
                alert.severity === 'medium' ? 'yellow' : 'green'
              }-700`}>
                {alert.severity === 'high' ? 'Take Action' : 
                 alert.severity === 'medium' ? 'Schedule Replacement' : 
                 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveAlerts; 