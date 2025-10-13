import React from 'react';

const StorySection = () => {
  return (
<div>


        <section className="bg-white mt-10 border-2 rounded-2xl pb-5 border-gray-200 lg:border-0 broder-2">
      <div className="  ">
        {/* GRID CLASS MODIFIED: Changed lg:grid-cols-2 to lg:grid-cols-3 */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:pr-8 mb-12 lg:mb-0 lg:col-span-2"> 
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Our Story – Born from a Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eastmond Villas began as the dream of a visionary accountant with a Master's in
              International Business. What started as a personal passion for real estate has
              evolved into a family-run agency redefining holiday rentals in Barbados —
              blending professionalism, trust, and heartfelt hospitality.
            </p>
          </div>

          {/* Right Column: Image - Takes 1/3 width on large screens */}
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            {/* Removed fixed width (lg:w-[450px]) to allow image to fill its 1/3 column */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760219830/medium-shot-plus-sized-woman-influencer_23-2151414147_1_1_rrtqvb.png" 
                alt="Framed Eastmond Villas logo in a luxury interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* This div acts as a subtle dark overlay if needed, currently transparent */}
              <div className="absolute inset-0 bg-black opacity-0"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>


<section className="bg-white lg:mt-0 md:mt-3 mt-5  border-2 rounded-2xl pb-5 border-gray-200 lg:border-0 broder-2 lg:pt-0 pt-5 ">
      <div className=" ">
        {/* Grid Layout: Image on left (1/3 width), Text on right (2/3 width) */}
        {/* This div structures the two columns for larger screens */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Image - Takes 1/3 width on large screens */}
          {/* Flexbox for centering the image on smaller screens, and 'justify-start' for left-alignment on large screens */}
          <div className="flex justify-center lg:justify-start mb-12 lg:mb-0 lg:col-span-1">
            {/* Image container: responsive width, fixed aspect ratio, rounded corners, shadow, and overflow hidden */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png" // Replace with your actual image URL
                alt="Luxury Villa Interior with sea view"
                className="absolute inset-0 w-full h-full object-cover" // Image covers the container
              />
              {/* Optional: Overlay if text or other elements need to be placed on the image */}
              {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
            </div>
          </div>
          
          {/* Right Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:col-span-2 lg:pl-8"> {/* 'pl-8' for padding between image and text on large screens */}
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              The Essence of Eastmond Villas
            </h2>
            {/* Paragraph Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We are more than a real estate company — we are creators of exceptional
              journeys. Each villa reflects our devotion to luxury, privacy, and artistry. Our name
              has become synonymous with opulence, sophistication, and the promise of
              moments you'll treasure forever.
            </p>
          </div>
        </div>
      </div>
    </section>





           <section className="bg-white lg:mt-0 md:mt-3 border-2 rounded-2xl pb-5 lg:mt-0 mt-4 border-gray-200 lg:border-0 broder-2 ">
      <div className=" ">
        {/* GRID CLASS MODIFIED: Changed lg:grid-cols-2 to lg:grid-cols-3 */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:pr-8 mb-12 lg:mb-0 lg:col-span-2"> 
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Architectural Elegance & Ambience
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every Eastmond villa is a masterpiece — curated interiors, bespoke art, and tranquil outdoor spaces merge to form an oasis of beauty. With turquoise horizons and lush gardens, our properties are sanctuaries where time slows, and peace unfolds effortlessly.
            </p>
          </div>

          {/* Right Column: Image - Takes 1/3 width on large screens */}
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            {/* Removed fixed width (lg:w-[450px]) to allow image to fill its 1/3 column */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760219929/medium-shot-plus-sized-woman-influencer_23-2151414147_2_1_ckmbpy.png" 
                alt="Framed Eastmond Villas logo in a luxury interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* This div acts as a subtle dark overlay if needed, currently transparent */}
              <div className="absolute inset-0 bg-black opacity-0"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>





<section className="bg-white lg:mt-0 md:mt-3 mt-5  border-2 rounded-2xl pb-5 lg:mt-0 mt-5 lg:pt-5 pt:p-0 pt-4 border-gray-200 lg:border-0 broder-2">
      <div className=" ">
        {/* Grid Layout: Image on left (1/3 width), Text on right (2/3 width) */}
        {/* This div structures the two columns for larger screens */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Image - Takes 1/3 width on large screens */}
          {/* Flexbox for centering the image on smaller screens, and 'justify-start' for left-alignment on large screens */}
          <div className="flex justify-center lg:justify-start mb-12 lg:mb-0 lg:col-span-1">
            {/* Image container: responsive width, fixed aspect ratio, rounded corners, shadow, and overflow hidden */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220019/medium-shot-plus-sized-woman-influencer_23-2151414147_2_2_daibdq.png" // Replace with your actual image URL
                alt="Luxury Villa Interior with sea view"
                className="absolute inset-0 w-full h-full object-cover" // Image covers the container
              />
              {/* Optional: Overlay if text or other elements need to be placed on the image */}
              {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
            </div>
          </div>
          
          {/* Right Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:col-span-2 lg:pl-8"> {/* 'pl-8' for padding between image and text on large screens */}
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Crafted Experiences & Personalized Service
            </h2>
            {/* Paragraph Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
             From the moment you arrive, our dedicated team curates every detail — private chefs, bespoke itineraries, luxury transfers, and local adventures. Every stay is customized, ensuring your holiday is effortless, unforgettable, and uniquely yours.
            </p>
          </div>
        </div>
      </div>
    </section>





           <section className="bg-white  lg:mt-0 md:mt-3 mt-5 border-2 rounded-2xl pb-5 border-gray-200 lg:border-0 broder-2">
      <div className=" ">
        {/* GRID CLASS MODIFIED: Changed lg:grid-cols-2 to lg:grid-cols-3 */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:pr-8 mb-12 lg:mb-0 lg:col-span-2"> 
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Discover Barbados – Island of Inspiration
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond our villas lies the charm of Barbados — sun-kissed beaches, vibrant culture, and world-class cuisine. Explore coral reefs, dance to calypso rhythms, and indulge in the island’s authentic warmth. Eastmond Villas invites you to experience Barbados like never before.
            </p>
          </div>

          {/* Right Column: Image - Takes 1/3 width on large screens */}
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            {/* Removed fixed width (lg:w-[450px]) to allow image to fill its 1/3 column */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220066/medium-shot-plus-sized-woman-influencer_23-2151414147_2_3_v9nrjr.png" 
                alt="Framed Eastmond Villas logo in a luxury interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* This div acts as a subtle dark overlay if needed, currently transparent */}
              <div className="absolute inset-0 bg-black opacity-0"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>





<section className="bg-white mt-5 pt-4  lg:mt-0 md:mt-3 border-2 rounded-2xl pb-5 border-gray-200 lg:border-0 broder-2 ">
      <div className=" ">
        {/* Grid Layout: Image on left (1/3 width), Text on right (2/3 width) */}
        {/* This div structures the two columns for larger screens */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Image - Takes 1/3 width on large screens */}
          {/* Flexbox for centering the image on smaller screens, and 'justify-start' for left-alignment on large screens */}
          <div className="flex justify-center lg:justify-start mb-12 lg:mb-0 lg:col-span-1">
            {/* Image container: responsive width, fixed aspect ratio, rounded corners, shadow, and overflow hidden */}
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220096/medium-shot-plus-sized-woman-influencer_23-2151414147_2_4_xtxpzs.png" // Replace with your actual image URL
                alt="Luxury Villa Interior with sea view"
                className="absolute inset-0 w-full h-full object-cover" // Image covers the container
              />
              {/* Optional: Overlay if text or other elements need to be placed on the image */}
              {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
            </div>
          </div>
          
          {/* Right Column: Text Content - Takes 2/3 width on large screens */}
          <div className="lg:col-span-2 lg:pl-8"> {/* 'pl-8' for padding between image and text on large screens */}
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
      Where Luxury Meets Enchantment
            </h2>
            {/* Paragraph Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
           Eastmond Villas is not just a stay — it’s a feeling. A harmony of elegance and emotion. A place where hospitality becomes art, and memories are handcrafted. Welcome to the realm where every moment whispers luxury, and every experience lingers in your heart.
            </p>
          </div>
        </div>
      </div>
    </section>











</div>
  );
};

// Example Usage:
const About = () => (
  <div className="min-h-screen ">
    <div className='container mx-auto'><StorySection /></div>
    {/* Other sections can go here */}
  </div>
);

export default About;