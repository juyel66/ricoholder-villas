// FullPageHero.tsx

import React from 'react';

// Hardcoded image URL as requested
const HERO_BACKGROUND_IMAGE = 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760205040/Properties_Container_3_etpnse.png';

const ListWithUsBannerPage: React.FC = () => {
  
  // Directly define the background style using the constant URL
  const backgroundStyle = {
    backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
  };

  return (
    // Section uses the hardcoded background style
    <section 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={backgroundStyle}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 text-white p-8 md:p-12 lg:p-20 max-w-4xl h-full flex flex-col justify-start">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 mt-20 lg:mt-32 leading-snug">
          List Your Villa With Eastmond Villas
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-10 opacity-95 max-w-3xl">
          Turn your property into a profitable investment while offering unforgettable luxury experiences.
        </p>
        
        {/* CTA Button */}
        <a 
          href="#" 
          className="inline-flex  items-center px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white lg:text-lg text-[12px] font-semibold rounded-lg shadow-xl transition duration-300 w-fit"
        >
          <img className='mr-2 ' src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760205396/Vector_2_xyjwdm.png" alt="" />
          Submit Your Property
        </a>

        {/* Features List */}
        <div className="mt-16 text-lg sm:text-xl opacity-80 font-medium">
          <span>Zero Setup Fees</span>
          <span className="mx-4 opacity-70">&bull;</span>
          <span>24/7 Support</span>
          <span className="mx-4 opacity-70">&bull;</span>
          <span>Global Marketing</span>
        </div>
      </div>
    </section>
  );
};

export default ListWithUsBannerPage;