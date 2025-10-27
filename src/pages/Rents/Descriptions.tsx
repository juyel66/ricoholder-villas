import React, { useState } from 'react';

const Description = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleShow = () => setShowFull((prev) => !prev);

  const text = `Welcome to St. James, Barbados, where within the elegant enclave of Derricks lies the majestic Seaclusion Villa. This gorgeous, colonial style, private luxury villa is situated on Barbados' platinum coast revealing spectacular panoramic sea views and private beach access to the golden sand and clear waters of Barbados' finest beach. This estate of palatial elegance and incomparable grandeur is completely staffed with world class chefs, internationally trained and professional housekeepers, butlers and the finest private security services on...`;

  const shortText = text.slice(0, 250) + '...';

  return (
    <div className="flex mt-20 gap-5 flex-col md:flex-row items-start justify-center">
      {/* Text Column */}
      <div className="w-full md:w-1/2 bg-white rounded-lg flex items-start justify-start">
        <div className="h-96 w-full flex items-start justify-start">
          <div className="h-full w-full p-4 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Description</h2>
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
            src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760298884/imgggggggg_barfpz.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
