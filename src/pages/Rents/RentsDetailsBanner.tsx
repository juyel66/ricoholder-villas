import React from 'react';



const RentsDetailsBanner: React.FC = () => {
  return (

    <div className="relative w-full   h-[900px] md:h-[700px] overflow-visible">
      
  
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760228150/Properties_Container_5_tlhzwn.png')` // Placeholder URL
        }}
      >
        {/* Dark overlay for text readability, adjust opacity as needed */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* 2. Content Layer (Text and Info Card) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-lg mb-2 leading-snug">
            Seaclusion – Barbados' Platinum Coast
          </h1>
          <h2 className="text-2xl md:text-4xl font-light drop-shadow-lg">
            Masterpiece
          </h2>
          <div className="flex items-center justify-center mt-4 text-xl drop-shadow-lg">
            {/* Using an icon for the location pin */}
            {/* Replace with a proper icon library like lucide-react or react-icons */}
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            Downtown, NY
          </div>
        </div>
        
        {/* 3. The Info/Action Card */}
        <div className="bg-white absolute  z-10  mt-80 text-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto transform translate-y-1/2 -mb-20">
            
            {/* Stats Section */}
            <div className="flex justify-around items-center text-center border-b pb-4 mb-4">
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🛏️</span> {/* Icon placeholder */}
                    <span className="text-sm mt-1">4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🛁</span> {/* Icon placeholder */}
                    <span className="text-sm mt-1">3 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🏊</span> {/* Icon placeholder */}
                    <span className="text-sm mt-1">2 Pool</span>
                </div>
            </div>

            {/* Price and Action Buttons */}
            <div className="flex flex-col items-center mb-4">
                <p className="text-lg font-medium text-green-700">
                    From **USD$850,000.00/night**
                </p>
            </div>
            
            <div className="flex space-x-4">
                {/* Share Button (Teal/Green border and text) */}
                <button 
                    className="flex-1 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                >
                    <span className="mr-2 text-xl">🔗</span> {/* Icon placeholder */}
                    Share
                </button>
                
                {/* Book Now Button (Solid Teal/Green) */}
                <button 
                    className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                >
                    <span className="mr-2 text-xl">🗓️</span> {/* Icon placeholder */}
                    Book Now
                </button>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default RentsDetailsBanner;