// src/components/LuxuryCardGrid.jsx

import React from 'react';

// --- Feature Card Data (One icon per card) ---
const LUXURY_CARD_DATA = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760215908/ImageWithFallback_1_ho2re6.png',
    brandName: 'Exclusive Travel',
    tagline: 'The Curatorium of Distinction',
    description: 'True luxury anticipates your needs before they arise.',
    icon: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760833071/Container_wsqj7b.png'
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216052/ImageWithFallback_2_ucygoa.png',
    brandName: 'VIP Access',
    tagline: 'Beyond the Velvet Rope',
    description: 'Unlock experiences that are simply beyond ordinary reach.',
    icon: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760833740/Frame_1000004285_fehjjw.png'
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216117/ImageWithFallback_3_cjzwkc.png',
    brandName: 'Absolute Discretion',
    tagline: 'The Invisible Hand of Protection',
    description: 'Guaranteed privacy and impeccable professional oversight.',
    icon: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760833778/Container_1_unumym.png'
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760216147/ImageWithFallback_4_bqamcw.png',
    brandName: 'Bespoke Events',
    tagline: 'The Alchemy of the Exceptional',
    description: 'Customized luxury crafted from your unique vision.',
    icon: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760833829/Container_2_cdh1jr.png'
  },
];

// --- Reusable Card Component (Single Icon) ---
interface LuxuryFeatureCardProps {
  imageUrl: string;
  brandName: string;
  tagline: string;
  description: string;
  icon: string;
}

const LuxuryFeatureCard: React.FC<LuxuryFeatureCardProps> = ({ imageUrl, brandName, tagline, description, icon }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden my-0 flex flex-col h-full">
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
        <div className="flex items-center mb-4 gap-3">
          {/* Single Icon */}
          <img src={icon} alt="icon" className="w-6 h-6 object-contain" />

          {/* Brand and Tagline */}
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

// --- Main Grid Rendering Component ---
const LuxuryCardGrid = () => {
  return (
    <section>
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {LUXURY_CARD_DATA.map((cardData) => (
            <LuxuryFeatureCard
              key={cardData.id}
              imageUrl={cardData.imageUrl}
              brandName={cardData.brandName}
              tagline={cardData.tagline}
              description={cardData.description}
              icon={cardData.icon}
            />
          ))}
        </div>
      </div>

      <section className="bg-gray-900 mt-10 sm:py-24 lg:py-32 flex items-center justify-center">
        <div className="sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760217464/Container_2_gnf8y8.png" alt="" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            We Do Not Serve – We Enthrall
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-medium">
            Redefining the limits of luxury concierge
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32 flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Begin the Unwritten Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium mb-10">
            Every detail perfected before you even think to ask.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:px-10 shadow-lg transition duration-300 ease-in-out">
            Get In Touch
          </button>
        </div>
      </section>
    </section>
  );
};

// Example Usage Component
const ConciergeCard: React.FC = () => (
  <div>
    <LuxuryCardGrid />
  </div>
);

export default ConciergeCard;
