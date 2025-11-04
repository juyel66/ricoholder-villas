import React, { useState } from 'react';

// Define the interface for the props passed from the parent component
interface DescriptionProps {
    descriptionData: string;
    descriptionImage: string;
}

// Update the component signature to receive and destructure the props
const Description: React.FC<DescriptionProps> = ({ descriptionData, descriptionImage }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleShow = () => setShowFull((prev) => !prev);

  // Use the prop data instead of hardcoded data
  const text = descriptionData; 
  const shortText = text.slice(0, 250) + '...';
  const title = "Description"; // Using hardcoded title as before

  return (
    <div className="flex mt-20 gap-5 flex-col md:flex-row items-start justify-center">
      {/* Text Column */}
      <div className="w-full md:w-1/2 bg-white rounded-lg flex items-start justify-start">
        <div className="h-96 w-full flex items-start justify-start">
          <div className="h-full w-full p-4 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed">
              {showFull ? text : shortText}
            </p>
            <button
              className="mt-4 text-teal-600 font-semibold hover:underline"
              onClick={toggleShow}
            >
              {showFull ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="h-[440px] w-full rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760298884/imgggggggg_barfpz.png" // Use the prop for the image source
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;