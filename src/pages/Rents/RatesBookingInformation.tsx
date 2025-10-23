import React from 'react';

// --- FAKE JSON DATA ---
const ratesData = [
  {
    id: 1,
    period: 'Jan 11 - Apr 14',
    minStay: '7 Nights',
    rate: 12000,
  },
  {
    id: 2,
    period: 'Apr 15 - Dec 14',
    minStay: '5 Nights',
    rate: 9000,
  },
  {
    id: 3,
    period: 'Dec 15 - Dec 19',
    minStay: '5 Nights',
    rate: 12000,
  },
  {
    id: 4,
    period: 'Dec 20 - Jan 10',
    minStay: '14 Nights',
    rate: 17000,
  },
];

// Helper to format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Main App Component
const RatesBookingInformation = () => {
  // Image placeholder URL
  const imageUrl = "https://res.cloudinary.com/dqkczdjjs/image/upload/v1761084681/img_6_wyf01m.png"; // Fallback in case the first one fails

  return (
    <div className=" mt-20 flex flex-col items-center py-12 px-4 font-sans relative">
      {/* Background/Wavy Element - Similar to the original design */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none">

      </div>


      <div className="max-w-7xl w-full z-10">
        {/* Title */}
        <h1 className="lg:text-4xl md:text-5xl text-2xl  font-extrabold text-center text-[#111827] text- mb-2">
          Rates & Booking Information
        </h1>

        {/* Subtitle/Info Text */}
        <p className="text-gray-600 text-start  mt-15 mb-5 text-lg">
          All rental rates are subject to 10% government tax & 2.5% booking fee.
        </p>

        {/* Content Grid: Table on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* 1. Rates Table (Left Side, 7/12 width) */}
          <div className="lg:col-span-7 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
            {/* Table Header Row */}
            <div className="grid grid-cols-3 bg-teal-600 text-white font-semibold text-lg p-4">
              <div className="p-2">Rental Period</div>
              <div className="p-2 text-center">Minimum Stay</div>
              <div className="p-2 text-right">Rate Per Night</div>
            </div>

            {/* Table Body Rows */}
            {ratesData.map((rate, index) => (
              <div
                key={rate.id}
                className={`grid grid-cols-3 p-4 text-gray-800 transition duration-150 ease-in-out ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-t border-gray-200 hover:bg-teal-50 hover:text-teal-700`}
              >
                {/* Rental Period (Left aligned) */}
                <div className="p-2 font-medium">
                  {rate.period}
                </div>
                {/* Minimum Stay (Center aligned) */}
                <div className="p-2 text-center text-gray-600 hover:text-teal-700">
                  {rate.minStay}
                </div>
                {/* Rate Per Night (Right aligned) */}
                <div className="p-2 text-right font-bold">
                  {formatCurrency(rate.rate)}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Image Card (Right Side, 5/12 width) */}
          <div className="lg:col-span-5 bg-white shadow-xl rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              onError={(e) => {
                // If the main image fails to load, use the fallback
                e.target.onerror = null; // prevents infinite loop
                e.target.src = fallbackImageUrl;
              }}
              alt="Luxury sunset view with a glass of champagne"
              className="w-full h-full object-cover"
              // Ensure the image scales gracefully on small screens without stretching the container too much
              style={{ minHeight: '300px' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RatesBookingInformation;
