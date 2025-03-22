import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faFilter } from '@fortawesome/free-solid-svg-icons';

const Map = () => {
  return (
    <div className="card p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Detection Map</h3>
        <div className="flex">
          <button className="mr-2 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <FontAwesomeIcon icon={faLayerGroup} className="mr-1" /> Layers
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <FontAwesomeIcon icon={faFilter} className="mr-1" /> Filter
          </button>
        </div>
      </div>
      <div className="h-[500px] w-full">
        <MapContainer center={[27.0238, 74.2179]} zoom={7} className="h-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
      <div className="flex justify-start mt-3 text-sm">
        <div className="flex items-center mr-4">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
          <span>Positive</span>
        </div>
        <div className="flex items-center mr-4">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
          <span>Negative</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
