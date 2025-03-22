import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataAnalytics = () => {
  const [activeTab, setActiveTab] = useState('results');

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Test Results',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="card p-4 mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Analytics</h3>
        <div className="flex space-x-4 border-b">
          <div 
            className={`nav-tab py-2 px-1 ${activeTab === 'results' ? 'active' : ''}`}
            onClick={() => setActiveTab('results')}
          >
            Test Results
          </div>
          <div 
            className={`nav-tab py-2 px-1 ${activeTab === 'distribution' ? 'active' : ''}`}
            onClick={() => setActiveTab('distribution')}
          >
            Concentration Levels
          </div>
          <div 
            className={`nav-tab py-2 px-1 ${activeTab === 'geographic' ? 'active' : ''}`}
            onClick={() => setActiveTab('geographic')}
          >
            Geographic Distribution
          </div>
        </div>
      </div>
      <div className={`tab-content ${activeTab === 'results' ? 'block' : 'hidden'}`}>
        <Line data={chartData} height={250} />
      </div>
      <div className={`tab-content ${activeTab === 'distribution' ? 'block' : 'hidden'}`}>
        <Line data={chartData} height={250} />
      </div>
      <div className={`tab-content ${activeTab === 'geographic' ? 'block' : 'hidden'}`}>
        <Line data={chartData} height={250} />
      </div>
    </div>
  );
};

export default DataAnalytics; 