import React from 'react';

const Affiliates = () => {
    // Array of partner logos (Using the local paths you provided)
    const partners = [
        { id: 1, name: "Travelgay Approved", src: "/public/images/1 2.png" },
        { id: 2, name: "221 Luxury Network", src: "/public/images/2 5 (1).png" },
        { id: 3, name: "ABTA - Travel with confidence", src: "/public/images/3 1.png" },
        { id: 4, name: "British Airways Preferred Partner", src: "public/images/4 1.png" },
        { id: 5, name: "IATA", src: "public/images/2 5 (1).png" },
        { id: 6, name: "Virtuoso Member", src: "/public/images/6 1.png" },
        { id: 7, name: "IGLTA", src: "public/images/7 1.png" },
        { id: 8, name: "Quintessentially Preferred Partner", src: "public/images/8 1.png" },
        { id: 9, name: "XO Private", src: "/public/images/9 1.png" },
        { id: 10, name: "XO Private", src: "/public/images/10 1.png" },
        
    ];

    // Placeholder URL for the background image (REPLACE THIS WITH YOUR IMAGE'S PUBLIC PATH)
    const BG_IMAGE_URL = '/public/images/partnershipimg.png'; 
    // If your image path in the public folder works, use this:
    // const BG_IMAGE_URL = 'public/images/Frame 1000003465 (1).png'; 


    return (
        <section className="relative w-full"> 
            
            {/* BACKGROUND LAYER: Image and Dark Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed" 
                style={{ 
                    backgroundImage: `url(${BG_IMAGE_URL})`,
                }}
            >
                {/* Dark Overlay for contrast (opacity 50-60 is usually good) */}
                <div className="absolute inset-0 \ opacity-60"></div>
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 md:mb-20">
                    Our Partners & Affiliates
                </h2>

                {/* Logos Grid */}
                {/* Corrected the misplaced file path in the xl:grid-cols class */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-8 gap-y-12 md:gap-y-16 justify-items-center">
                    {partners.map((partner) => (
                        <div key={partner.id} className="flex flex-col items-center justify-center h-24 sm:h-28 p-2">
                            <img 
                                src={partner.src} 
                                alt={partner.name} 
                                className="max-h-full max-w-full object-contain filter brightness-0 invert transition duration-300 hover:opacity-80" 
                                // `filter brightness-0 invert` makes colored logos appear white
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Affiliates;