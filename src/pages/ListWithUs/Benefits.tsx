// BenefitsSection.tsx
import React from 'react';

// Define a type for a single benefit item
type Benefit = {
  id: number;
  text: string;
};

// Data for the benefits list
const benefits: Benefit[] = [
  { id: 1, text: 'ROI growth through strategic partnerships' },
  { id: 2, text: 'Zero risk, performance-based model' },
  { id: 3, text: 'Targeted digital & social media campaigns' },
  { id: 4, text: '24/7 owner support and concierge' },
];

// Image for this section
const BENEFITS_IMAGE_URL = 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760206180/medium-shot-plus-sized-woman-influencer_23-2151414147_1_fjs5qv.png'; 
// NOTE: I'm reusing the previous image for now. You might want to upload and use the actual image from your request:
// 'your_benefits_image_url_here.jpg'
// For the image in the prompt: 
// It looks like a high-quality photo of people dining outdoors at a villa with an ocean view at sunset.

const Benefits: React.FC = () => {
  return (
    // Main section container with padding and a background
    <section className=" bg-white mt-14">
      {/* Content wrapper to center and limit width */}
      <div className=" mx-auto ">
        {/* Flex container for the two-column layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 md:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-2/5 flex rounded-3xl justify-center lg:justify-start">
            <img 
              src={BENEFITS_IMAGE_URL} 
              alt="People enjoying a villa dinner" 
              className="w-full max-w-lg lg:max-w-none h-auto rounded-tl-[60px] rounded-br-[60px] rounded-tr-none rounded-bl-none    shadow-xl object-cover bort" 
              style={{ minHeight: '400px', maxHeight: '550px' }} // Ensure consistent height/aspect for image
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Benefits & Advantages
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Beyond listing: we act as your property's ambassador — optimizing
              revenue, protecting your asset and delivering world-class guest
              experiences.
            </p>

            {/* List of Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start text-left max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {/* Checkmark Icon */}
                  <div className="bg-teal-100 text-teal-600 rounded-full p-2 flex-shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {/* Benefit Text */}
                  <p className="text-xl text-gray-700 font-medium">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;