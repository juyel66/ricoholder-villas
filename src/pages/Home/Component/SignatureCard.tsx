import React from 'react';

// --- Icon Components (for consistency with the design) ---
const LocationIcon = () => (
    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);
const BedIcon = () => (
    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v3m8-3v3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
);
const BathIcon = () => (
    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m-9-9a9 9 0 019-9"></path>
    </svg>
);
const PoolIcon = () => (
    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6-6-6v12z"></path>
    </svg>
);
const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>
);
const ShareIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.883 12.91 9 12.446 9 12c0-.446-.117-.91-.316-1.342m-6.023 2.684C2.883 12.91 3 12.446 3 12c0-.446-.117-.91-.316-1.342m12.046 2.684C15.883 12.91 16 12.446 16 12c0-.446-.117-.91-.316-1.342M15 12c0 2.21-1.79 4-4 4H8v1.171c0 .414.288.766.684.954l5.353 2.536a1 1 0 001.219-.48l2.964-6.326a1 1 0 00-.083-.733l-2.964-6.326a1 1 0 00-1.22-.479l-5.353 2.536c-.396.188-.684.54-.684.954V12h3c2.21 0 4 1.79 4 4z"></path>
    </svg>
);
// -------------------------------------------------------------------------

const SignatureCard = ({ villa }) => {
    
    // Fallback/Default data in case 'villa' prop is not provided or is incomplete
    const defaultVilla = {
        title: "Loading Villa",
        location: "Getting Location...",
        price: "N/A",
        rating: 0,
        reviewCount: 0,
        beds: 0,
        baths: 0,
        pool: 0,
        amenities: [],
        imageUrl: "https://via.placeholder.com/400x240?text=Image+Loading..."
    };
    
    // Use the provided 'villa' prop, or fallback to default data
    const data = villa || defaultVilla;

    // Static click handler for the button
    const handleViewDetails = () => {
        console.log(`Viewing details for: ${data.title}`);
        alert(`You clicked View Details for ${data.title}! (This is a static alert)`);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl w-full">

            {/* 1. Image Container with Absolute Overlays */}
            <div className="relative h-60 w-full">
                <img className="w-full h-full object-cover" src={data.imageUrl} alt={data.title} />

                {/* Rating Badge (Top Left) */}
                <div className="absolute top-4 left-4 flex items-center bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-yellow-400 mr-1">★</span>
                    {data.rating} ({data.reviewCount})
                </div>

                {/* Icons (Share/Favorite) (Top Right) */}
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/70 rounded-full text-gray-700 hover:text-red-500 hover:bg-white transition duration-200 shadow-md">
                        <HeartIcon />
                    </button>
                    <button className="p-2 bg-white/70 rounded-full text-gray-700 hover:text-teal-500 hover:bg-white transition duration-200 shadow-md">
                        <ShareIcon />
                    </button>
                </div>
            </div>

            {/* 2. Content Area */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{data.title}</h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <LocationIcon />
                    {data.location}
                </div>

                {/* Price */}
                <p className="text-base font-normal text-gray-600 mb-4">
                    From <span className="text-2xl font-extrabold text-teal-600">${data.price}/night</span>
                </p>

                {/* Specs (Beds, Baths, Pool) */}
                <div className="flex space-x-4 border-t border-b border-gray-100 py-3 mb-4 text-sm">
                    <div className="flex items-center">
                        <BedIcon /> {data.beds} Beds
                    </div>
                    <div className="flex items-center">
                        <BathIcon /> {data.baths} Baths
                    </div>
                    <div className="flex items-center">
                        <PoolIcon /> {data.pool} Pool
                    </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {/* Ensure amenities array exists before mapping */}
                    {data.amenities?.map((amenity, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-300 rounded-full">
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* View Details Button */}
                <button
                    onClick={handleViewDetails}
                    className="w-full py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg hover:bg-teal-50 transition duration-200"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default SignatureCard;