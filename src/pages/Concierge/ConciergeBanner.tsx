import React from 'react';

const ConciergeBanner: React.FC = () => {
  return (
    <div className="relative  mt-5 mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Banner Image */}
      <img
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760213196/ImageWithFallback_zwfrkd.png" // Replace with your actual image path
        alt="Luxury Property Banner"
        className="w-full h-auto object-cover object-center"
      />

      {/* Overlay with Content */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
        
          Beyond Anticipation – The Art of <br className="hidden md:block" /> Bespoke Luxury
        </h1>
        <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl">
         Orchestrating the extraordinary with seamless, intuitively tailored service
        </p>
        <button className="px-8 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default ConciergeBanner;