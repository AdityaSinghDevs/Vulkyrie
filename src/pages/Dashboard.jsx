import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, faCalendarAlt, faVial, 
  faExclamationTriangle, faMicrochip, faBell,
  faLayerGroup, faFilter, faArrowUp, faPlus 
} from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MetricCard from '../components/dashboard/MetricCard';
import Map from '../components/dashboard/Map';
import DataAnalytics from '../components/dashboard/DataAnalytics';
import SampleDatabase from '../components/dashboard/SampleDatabase';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import DeviceStatus from '../components/dashboard/DeviceStatus';
import ActiveAlerts from '../components/dashboard/ActiveAlerts';

const Dashboard = () => {
  return (
    <div style={{paddingTop: "6%"}} className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">VultureSafe Dashboard</h1>
          <p className="text-gray-600">Monitoring Diclofenac in livestock carcasses</p>
        </div>
        <div className="flex items-center">
          <div className="date-selector flex items-center mr-4">
            <span className="text-gray-700">Last 7 days</span>
            <FontAwesomeIcon icon={faCalendarAlt} className="ml-2 text-gray-500" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Tests"
          value="1,342"
          icon={faVial}
          change={12}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        <MetricCard
          title="Positive Cases"
          value="247"
          icon={faExclamationTriangle}
          change={8}
          iconBg="bg-red-100"
          iconColor="text-red-600"
          negative
        />
        <MetricCard
          title="Active Devices"
          value="42"
          icon={faMicrochip}
          change={4}
          iconBg="bg-green-100"
          iconColor="text-green-600"
          isNew
        />
        <MetricCard
          title="Alert Level"
          value="Medium"
          icon={faBell}
          subtext="18.4% positivity rate"
          iconBg="bg-amber-100"
          iconColor="text-amber-600"
          valueColor="text-amber-500"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Section - Map & Charts */}
        <div className="lg:col-span-3">
          <Map />
          <DataAnalytics />
          <SampleDatabase />
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2">
          <ActivityFeed />
          <DeviceStatus />
          <ActiveAlerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;