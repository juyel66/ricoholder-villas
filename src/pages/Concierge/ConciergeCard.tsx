// src/components/LuxuryCardGrid.jsx

import React from 'react';

// --- Feature Card Data (Unchanged) ---
const LUXURY_CARD_DATA = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760215908/ImageWithFallback_1_ho2re6.png',
    brandName: 'Exclusive Travel',
    tagline: 'The Curatorium of Distinction',
    description: 'True luxury anticipates your needs before they arise.'
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216052/ImageWithFallback_2_ucygoa.png',
    brandName: 'VIP Access',
    tagline: 'Beyond the Velvet Rope',
    description: 'Unlock experiences that are simply beyond ordinary reach.'
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216117/ImageWithFallback_3_cjzwkc.png',
    brandName: 'Absolute Discretion',
    tagline: 'The Invisible Hand of Protection',
    description: 'Guaranteed privacy and impeccable professional oversight.'
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216147/ImageWithFallback_4_bqamcw.png',
    brandName: 'Bespoke Events',
    tagline: 'The Alchemy of the Exceptional',
    description: 'Customized luxury crafted from your unique vision.'
  },
];

// --- Reusable Card Component (Unchanged) ---
const LuxuryFeatureCard = ({ imageUrl, brandName, tagline, description }) => {
  return (
    <div className=" bg-white shadow-xl rounded-xl overflow-hidden my-0 flex flex-col h-full"> {/* Removed margin-y and added flex-col h-full */}
      {/* 1. Image Section */}
      <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
        <img
          src={imageUrl} 
          alt={`${brandName} interior`}
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* 2. Content Card Section */}
      <div className="p-6 md:p-8 border-t flex-grow"> 
        {/* Header - Icon, Brand Name, and Tagline */}
        <div className="flex items-center mb-4">
          {/* Icon */}
          <div className="w-6 h-6 mr-3 flex items-center justify-center bg-green-700 rounded-md">
         <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760217140/Frame_1000004285_ts9iqn.png" alt="" />
          </div>
          
          <div>
            <p className="text-gray-900 font-semibold text-lg leading-none">{brandName}</p>
            <p className="text-gray-500 text-sm">{tagline}</p>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug pt-2">
          {description}
        </p>
      </div>
    </div>
  );
};


// --- The Main Rendering Component using Grid ---
const LuxuryCardGrid = () => {
    return (
        <section className=" ">
            <div className=" "> 
           
                
                {/* GRID CLASS MODIFIED: Removed responsive columns (sm:grid-cols-2 lg:grid-cols-4) */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {LUXURY_CARD_DATA.map((cardData) => (
                        <LuxuryFeatureCard 
                            key={cardData.id}
                            imageUrl={cardData.imageUrl}
                            brandName={cardData.brandName}
                            tagline={cardData.tagline}
                            description={cardData.description}
                        />
                    ))}
                </div>
            </div>

 <section className="bg-gray-900  mt-10 sm:py-24 lg:py-32 flex items-center justify-center">
      <div className="   sm:px-6 lg:px-8 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
           <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760217464/Container_2_gnf8y8.png" alt="" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          We Do Not Serve – We Enthrall
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-400 font-medium">
          Redefining the limits of luxury concierge
        </p>
      </div>
    </section>



        <section className="bg-white py-20 sm:py-24 lg:py-32 flex items-center justify-center">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Begin the Unwritten Journey
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 font-medium mb-10">
          Every detail perfected before you even think to ask.
        </p>

        {/* Call to Action Button */}
        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:px-10 shadow-lg transition duration-300 ease-in-out">
          Get In Touch
        </button>
      </div>
    </section>





        </section>



    );
};

// Example Usage Component
const App = () => (
  <div className="">
    <LuxuryCardGrid />
  </div>
);

export default App;