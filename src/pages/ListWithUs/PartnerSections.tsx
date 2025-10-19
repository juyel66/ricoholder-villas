// WhyPartnerSection.tsx
import React from 'react';

// Define a type for a single feature item
type Feature = {
  id: number;
  title: string;
  description: string;
};

// Data for the feature cards
const features: Feature[] = [
  {
    id: 1,
    title: 'Best Representation',
    description: 'Expert agents and ongoing training guarantee your property is expertly managed.',
  },
  {
    id: 2,
    title: 'Zero Setup Fees',
    description: 'No upfront costs — our model is performance based so we earn only if you do.',
  },
  {
    id: 3,
    title: 'Global ROI Growth',
    description: 'We optimize calendar dates and leverage global partners to maximize earnings.',
  },
  {
    id: 4,
    title: 'Targeted Marketing',
    description: 'Tailored campaigns targeting high-value luxury travelers across channels.',
  },
  {
    id: 5,
    title: '24/7 Support',
    description: 'Dedicated support and timely communication, no exceptions.',
  },
  {
    id: 6,
    title: 'Premium Visibility',
    description: 'Break free from crowded marketplaces with bespoke presentation and outreach.',
  },
];

const PartnerSections: React.FC = () => {
  return (
    // Main section container with padding and a slightly off-white background
    // relative for the SVG background pattern
    <section className="relative py-16   overflow-hidden">
      {/* Optional: Background pattern - use a subtle SVG or image like in the example */}
      {/* This is a placeholder for the wave pattern if you want to implement it */}
      <div 
        className="absolute inset-0 bg-repeat opacity-5" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}
      ></div>


      {/* Content wrapper to center the content and apply max-width */}
      <div className="relative z-10  mx-auto ">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Partnering with Eastmond Villas gives your property premium exposure, professional management
            and a performance-based partnership.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm flex flex-col items-start text-left"
            >
              {/* Checkmark Icon */}
              <div className="bg-blue-50 text-[#00A55E] rounded-[9px] p-2 mb-4 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSections;