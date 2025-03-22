const ActivityFeed = () => {
  const activities = [
    {
      type: 'positive',
      title: 'New Positive Result',
      time: '2 min ago',
      sampleId: 'SMPL-24032',
      location: 'Jorbeer, Rajasthan',
      device: 'DEV-112'
    },
    // Add more activities
  ];

  return (
    <div className="card p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className={`activity-item p-3 border-l-4 ${
            activity.type === 'positive' ? 'border-red-500 bg-red-50' :
            activity.type === 'negative' ? 'border-green-500 bg-green-50' :
            'border-yellow-500 bg-yellow-50'
          } rounded`}>
            <div className="flex justify-between">
              <div className="font-medium text-gray-900">{activity.title}</div>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
            <div className="text-sm text-gray-600 mt-1">Sample ID: {activity.sampleId}</div>
            <div className="text-sm text-gray-600">Location: {activity.location}</div>
            <div className="text-sm text-gray-600">Device: {activity.device}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 