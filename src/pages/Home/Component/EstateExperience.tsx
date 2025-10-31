import React from 'react';

const EstateExperience = () => {
  // Cloudinary links for the images in the provided design
  const stats = [
    { 
      src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815143/Frame_48095987_luvjtw.png", 
      alt: "10+ Years Stat" 
    },
    { 
      src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815180/Frame_48095988_1_iqjop1.png", 
      alt: "100% List to Rent Ratio Stat" 
    },
    { 
      src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760389542/Frame_48095990_nt2hfo.png", 
      alt: "$1Bn+ Curated Portfolio Stat" 
    },
  ];

  return (
    // Main container - py-12 for smaller height on mobile
    <div className="bg-[#00575d] mt-20 p-5 text-white py-12 md:py-24">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 ">
          
          {/* LEFT COLUMN: Text Content & Stats */}
          <div className="">
            
            {/* TEXT CHANGE: text-3xl on mobile, text-5xl on medium screens, and sm:whitespace-nowrap */}
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif leading-tight mb-6 sm:whitespace-nowrap md:mb-8">
              Where Estate Expertise Meets <br /> Aesthetic Excellence
            </h2>

            {/* TEXT CHANGE: text-base on mobile, text-xl on medium screens */}
            <p className="text-base md:text-xl leading-relaxed mb-10 md:mb-12">
              Eastmond Villas, a multi-award-winning luxury real estate and villa
              rental service in Barbados, epitomizes excellence in elevated living.
              With a focus on timeless beauty and personalized client experiences,
              we craft tailored residences and premium vacation properties for those
              who seek the exceptional. Our portfolio showcases our signature approach:
              understated luxury, flawlessly executed.
            </p>

            {/* Stats Section: Smaller gap on mobile */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-y-6 sm:gap-x-4 lg:gap-x-8 xl:gap-x-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-1/3 lg:w-auto">
                  {/* IMAGE SIZE CHANGE: w-32 h-32 on mobile, scaling up to xl:w-56 xl:h-56 */}
                  <img
                    src={stat.src}
                    alt={stat.alt}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- */}

          {/* RIGHT COLUMN: Image with the circular effect */}
          {/* CONTAINER HEIGHT CHANGE: h-[400px] on mobile, h-[600px] on large screens */}
          <div className="relative flex justify-center lg:justify-end h-[400px] lg:h-[600px] mt-10 lg:mt-0">
            
            {/* The main image container with the circular cut-out effect */}
            {/* SIZE CHANGE: Smaller initial size on mobile, scales up */}
            <div className="relative 
                            w-[250px] h-[400px] 
                            sm:w-[350px] sm:h-[500px] 
                            lg:w-[450px] lg:h-[600px] 
                            overflow-hidden 
                            rounded-full 
                            shadow-2xl">
              
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png"
                alt="Luxury Villa Interior and Exterior"
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateExperience;