import React from 'react';

const ListMyVilla: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/1200x600/171717/ffffff?text=Luxury+Villa+Resort" // Replace with your actual image path
        alt="Luxury Property Banner"
        className="w-full h-auto object-cover object-center"
      />

      {/* Overlay with Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
          Let's Turn Your Property Into <br className="hidden md:block" /> a Luxury Investment
        </h1>
        <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl">
          Join our network of premier villa owners and unlock your property's full potential.
        </p>
        <button className="px-8 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">
          List My Villa
        </button>
      </div>
    </div>
  );
};

export default ListMyVilla;