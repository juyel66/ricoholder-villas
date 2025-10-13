import React, { useState, useMemo } from 'react';
import GoogleMapReact from 'google-map-react';
import { PiMapPinBold } from "react-icons/pi";
import { IoClose } from 'react-icons/io5';

const googleMapAPIKey = "YOUR_API_KEY_HERE"; // Replace with your real API key

interface Coords {
  lat: number;
  lng: number;
}

interface NewMarker extends Coords { lat: number; lng: number; }
interface MapClickEvent { x: number; y: number; lat: number; lng: number; event: any; }
interface SavedLocation extends NewMarker { key: string; text: string; }

// Custom Marker
const CustomMarker = ({ lat, lng, isNew }: { lat: number; lng: number; isNew: boolean }) => (
  <div
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -100%)',
      cursor: 'pointer',
      zIndex: isNew ? 900 : 800
    }}
  >
    <PiMapPinBold style={{ color: isNew ? "blue" : "red", fontSize: "2rem" }} />
  </div>
);

// Add Villa Modal
interface AddVillaModalProps {
  initialLat: number;
  initialLng: number;
  onClose: () => void;
  onAddVilla: (data: { lat: number; lng: number; name: string; description: string }) => void;
}

const AddVillaModal: React.FC<AddVillaModalProps> = ({ initialLat, initialLng, onClose, onAddVilla }) => {
  const [villaName, setVillaName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!villaName.trim()) return;
    onAddVilla({
      lat: initialLat,
      lng: initialLng,
      name: villaName,
      description: description,
    });
    setVillaName('');
    setDescription('');
    onClose();
  };

  return (
    <div
      className="absolute top-10 left-1/2 -translate-x-1/2 bg-white p-5 rounded-xl shadow-2xl w-80 z-[1100]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Add New Villa</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <IoClose size={22} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Latitude:</strong> {initialLat.toFixed(6)}</p>
          <p><strong>Longitude:</strong> {initialLng.toFixed(6)}</p>
        </div>

        <div>
          <label htmlFor="villaName" className="block text-sm font-semibold text-gray-700 mb-1">Villa Name</label>
          <input
            id="villaName"
            type="text"
            placeholder="e.g., Paradise Villa"
            value={villaName}
            onChange={(e) => setVillaName(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Description (Optional)</label>
          <textarea
            id="description"
            placeholder="Add any details about this villa..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 text-gray-800 font-semibold py-1.5 px-4 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal-500 text-white font-semibold py-1.5 px-4 rounded hover:bg-teal-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

// Main Component
export default function Locations() {
  const [newLocation, setNewLocation] = useState<NewMarker | null>(null);
  const [savedVillas, setSavedVillas] = useState<SavedLocation[]>([
    { lat: 23.8103, lng: 90.4125, key: "saved_1", text: "Casablanca At Sandy Lane" }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultProps = useMemo(() => ({
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 11
  }), []);

  const handleMapClick = (e: MapClickEvent) => {
    setNewLocation({ lat: e.lat, lng: e.lng });
    setIsModalOpen(true);
  };

  const handleAddVilla = (data: { lat: number; lng: number; name: string; description: string }) => {
    const newVilla: SavedLocation = {
      lat: data.lat,
      lng: data.lng,
      key: Date.now().toString(),
      text: data.name
    };
    setSavedVillas(prev => [...prev, newVilla]);
    setIsModalOpen(false);
    setNewLocation(null);
  };

  return (
    <div className="py-20">
      <div className="text-center mb-10">
        <p className="text-5xl font-semibold text-gray-800">Locations</p>
        <p className="text-lg text-gray-600">Click on the map to add a new villa location</p>
      </div>

      <div className="relative mx-auto" style={{ height: '75vh', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={handleMapClick}
        >
          {savedVillas.map(villa => (
            <CustomMarker key={villa.key} lat={villa.lat} lng={villa.lng} isNew={false} />
          ))}
          {newLocation && isModalOpen && (
            <CustomMarker lat={newLocation.lat} lng={newLocation.lng} isNew={true} />
          )}
        </GoogleMapReact>

        {/* Modal will only appear inside the map area */}
        {isModalOpen && newLocation && (
          <AddVillaModal
            initialLat={newLocation.lat}
            initialLng={newLocation.lng}
            onClose={() => { setIsModalOpen(false); setNewLocation(null); }}
            onAddVilla={handleAddVilla}
          />
        )}
      </div>
    </div>
  );
}
