import React from 'react';

// --- Explore Icon for the Button ---
const ExploreIcon = () => (
    <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const ExperiencesPage = () => {
    return (
        <div style={{ backgroundImage: 'url(/public/images/experiancee.png)' }} className="relative w-full overflow-hidden rounded-3xl shadow-xl aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/6] bg-gray-900">
            
            {/* Background Image - This 'img' tag is already functioning as a background image */}
           

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Container: Centered horizontally and vertically */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 sm:p-10">
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4">
                    More Than Just a <span className="text-teal-400">Villa</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto mb-8 font-light">
                    Your journey doesn't end with a booking. Our concierge crafts personalized 
                    experiences—whether it's dining under the stars, a private spa retreat, or 
                    exploring hidden gems.
                </p>

                {/* Button */}
                <button className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 
                                   text-white text-lg font-semibold rounded-full shadow-lg 
                                   transition duration-300 ease-in-out">
                    Explore Experiences
                    <ExploreIcon />
                </button>
            </div>
        </div>
    );
};

export default ExperiencesPage;