import React, { useState, useEffect } from 'react';

// Define the shape of an amenity item for clarity (সাধারণ তালিকার আইটেমের জন্য)
interface SimpleListItemProps {
  name: string;
}

// Define the shape of the data we expect to fetch (ফেচ করা ডেটার কাঠামো)
interface PropertyData {
  gallery: { id: number; url: string }[];
  amenities: {
    signatureDistinctions: string[];
    interiorAmenities: string[];
    outdoorAmenities: string[];
  };
  // NEW SECTIONS DATA (নতুন সেকশনের ডেটা)
  rulesAndEtiquette: string[];
  checkInOutTime: { checkIn: string; checkOut: string };
  staff: { name: string; details: string }[];
  bedrooms: { title: string; subtitle: string; imageUrl: string }[];
  conciergeService: string[];
  securityDeposit: string;
}

// Reusable component for a single amenity/list item (পুনরায় ব্যবহারযোগ্য কম্পোনেন্ট)
const AmenityItem: React.FC<SimpleListItemProps> = ({ name }) => {
  return (
    <li className="flex items-start text-gray-700 text-sm mb-2">
      {/* Using a large dot '·' stylized with Tailwind classes for color and spacing */}
      <span className="text-teal-600 mr-2 text-xl leading-none font-extrabold flex-shrink-0 mt-[-2px]">·</span>
      {name}
    </li>
  );
};

// Component for displaying staff details (স্টাফ বিবরণ দেখানোর জন্য কম্পোনেন্ট)
const StaffItem: React.FC<{ name: string; details: string }> = ({ name, details }) => {
    return (
        <li className="flex items-start mb-4">
            <span className="text-teal-600 mr-2 text-xl leading-none font-extrabold flex-shrink-0 mt-[-2px]">·</span>
            <div className="flex flex-col text-gray-700 text-sm">
                <span className="font-semibold text-gray-800">{name}</span>
                <span className="text-xs text-gray-600">{details}</span>
            </div>
        </li>
    );
};


// Mock JSON payload (এটি API থেকে ডেটা ফেচ করার প্রক্রিয়া অনুকরণ করে)
const mockData: PropertyData = {
    gallery: [ // চিত্র গ্যালারি ডেটা
      { id: 1, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png' },
      { id: 2, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg' },
      { id: 3, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg' },
      { id: 4, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg' },
      { id: 5, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg' },
      { id: 6, url: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg' },
    ],
    amenities: { // সুযোগ-সুবিধা ডেটা
      signatureDistinctions: [
        'Fairmont Pavilion Beach Club Membership (10 people)',
        'Media Room',
        'Sonos System',
        'Indoor-outdoor Swimming Pool',
      ],
      interiorAmenities: [
        'Bar Area', 'Bar Area', 
        'Bluetooth Speaker', 'Bluetooth Speaker',
        'Cocktail Menu', 'Outdoor Patio',
        'Dart Board', 'Fire Pit',
        'Fire Pit', 'Wine Cooler',
        'Outdoor Seating', 'Grill Station',
      ],
      outdoorAmenities: [
        'Open-Air Dining Spot', 
        'Chill Lounge Area', 
        'Grill Area', 
        'Electric Gates for Easy Access',
        'Cozy Enclosed Garden',
        'Fairmont Beach Club Pavilion',
        'Free Parking on Site', 
        '24/7 Security', 
        'Patio Furniture', 
        'Outdoor Cooking Area', 
        'Private Balconies for Relaxing', 
        'Direct Beach Access'
      ],
    },
    // NEW SECTIONS DATA:
    rulesAndEtiquette: [
      'Children - All Welcome',
      'No Pets',
      'No Smoking - Inside and Outside',
    ],
    checkInOutTime: {
      checkIn: '15:00',
      checkOut: '12:00',
    },
    staff: [
      { name: 'Housekeeper', details: '6 days per week from 9am until 3pm - Summer, Winter & Festive' },
      { name: 'Chef', details: '6 days per week - Summer, Winter & Festive - 3 consecutive Meals' },
      { name: 'Security Guard', details: '6 days per week from 5pm until 5am - Summer, Winter & Festive' },
    ],
    bedrooms: [
      { // Simplifying the complex Bedroom carousel to a single data structure for now
        title: 'Master Bedroom 1',
        subtitle: 'with en suite King Bed (UK)',
        imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg'
      }
    ],
    conciergeService: [
      'Our awesome concierge team offers a bunch of luxury services, making sure you enjoy every moment of your stay in Barbados.',
      'We handle your Arrival and Departure, Fast Track, Transfers, Car Rentals, and Chauffeur Services.',
      'We can stock your villa, help with menu choices, provide extra household support, rental gear, and in-house spa services.',
    ],
    securityDeposit: 'US$ 10,000.00',
};


const PropertyGalleryAndAmenities: React.FC = () => {
    // State to hold the fetched data and loading status
    const [data, setData] = useState<PropertyData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect to simulate data fetching (API call)
    useEffect(() => {
        // Simulating an asynchronous network request delay
        setTimeout(() => {
            setData(mockData);
            setIsLoading(false);
        }, 1500); // 1.5 second delay
    }, []);

    // Display a loading message while data is being fetched
    if (isLoading) {
        return (
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="text-xl font-semibold text-teal-600">
                    Loading property details... (প্রপার্টির বিবরণ লোড হচ্ছে...)
                </div>
                {/* Simple pulsing effect for loading indicator */}
                <div className="mt-4 flex justify-center space-x-2">
                    <div className="h-3 w-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="h-3 w-3 bg-teal-500 rounded-full animate-pulse delay-150"></div>
                    <div className="h-3 w-3 bg-teal-600 rounded-full animate-pulse delay-300"></div>
                </div>
            </section>
        );
    }
    
    if (!data) {
        return (
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="text-xl font-semibold text-red-500">
                    Error loading data. Please try again. (ডেটা লোডিং ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।)
                </div>
            </section>
        );
    }

    // Destructure data for cleaner rendering using the map method
    const { gallery, amenities, rulesAndEtiquette, checkInOutTime, staff, bedrooms, conciergeService, securityDeposit } = data;
    const { signatureDistinctions, interiorAmenities, outdoorAmenities } = amenities;


    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* === LEFT COLUMN: Image Gallery (বাম কলাম: চিত্র গ্যালারি) === */}
                <div className="lg:col-span-7">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Image Gallery - {gallery.length} photos
                    </h2>
                    
                    {/* Image Grid (চিত্র গ্রিড) - Using gallery data via map */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* The map method iterates over the fetched gallery array */}
                        {gallery.map((img, index) => (
                            <div 
                                key={img.id} 
                                className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-sm"
                            >
                                <img 
                                    src={img.url} 
                                    alt={`Gallery photo ${img.id}`} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* View All Photos Button (সব ছবি দেখুন বাটন) */}
                    <div className="mt-8 text-center">
                        <button
                            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
                        >
                            View All Photos
                        </button>
                    </div>
                </div>

                {/* === RIGHT COLUMN: Details & Amenities (ডান কলাম: বিবরণ এবং সুযোগ-সুবিধা) === */}
                <div className="lg:col-span-5 border-l lg:pl-12 pl-0">
                    
                    {/* Signature Distinctions (স্বাক্ষর বিশিষ্টতা) - Using signatureDistinctions data via map */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Signature Distinctions
                        </h3>
                        <ul className="list-none p-0">
                             {/* The map method iterates over the fetched signatureDistinctions array */}
                            {signatureDistinctions.map((item, index) => (
                                <li key={index} className="text-gray-700 text-sm mb-2 flex items-start">
                                    <span className="text-teal-600 mr-2 text-xl leading-none font-extrabold flex-shrink-0 mt-[-2px]">·</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Finer Details (ফাইন বিবরণ) */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Finer Details
                        </h3>
                        
                        {/* Interior Amenities (অভ্যন্তরীণ সুযোগ-সুবিধা - দুই কলামে) */}
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">
                            Interior Amenities
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-6">
                            {/* The map method iterates over the fetched interiorAmenities array */}
                            {interiorAmenities.map((item, index) => (
                                <AmenityItem key={index} name={item} />
                            ))}
                        </ul>

                        {/* Outdoor Amenities (বহিঃস্থ সুযোগ-সুবিধা - এক কলামে) */}
                        <h4 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
                            Outdoor Amenities
                        </h4>
                        <ul className="list-none p-0 mb-10"> 
                            {/* The map method iterates over the fetched outdoorAmenities array */}
                            {outdoorAmenities.map((item, index) => (
                                <AmenityItem key={index} name={item} />
                            ))}
                        </ul>
                    </div>

                    {/* ----------------- NEW SECTIONS START HERE ----------------- */}

                    {/* Rules & Etiquette (নিয়ম ও শিষ্টাচার) */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Rules & Etiquette
                        </h3>
                        <ul className="list-none p-0">
                            {rulesAndEtiquette.map((item, index) => (
                                <AmenityItem key={index} name={item} />
                            ))}
                        </ul>
                    </div>

                    {/* Check in/out time (চেক ইন/আউট সময়) */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Check in/out time
                        </h3>
                        <div className="flex flex-col space-y-2 text-gray-700 text-sm">
                            <div className="flex items-center">
                                <span className="text-teal-600 mr-2 text-xl leading-none font-extrabold flex-shrink-0 mt-[-2px]">·</span>
                                <span>Check-in Time - <span className="font-semibold text-gray-800">{checkInOutTime.checkIn}</span></span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-teal-600 mr-2 text-xl leading-none font-extrabold flex-shrink-0 mt-[-2px]">·</span>
                                <span>Check-out Time - <span className="font-semibold text-gray-800">{checkInOutTime.checkOut}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Staff (কর্মী) */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-between items-end">
                            Staff
                            <button className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition duration-150">
                                View All Staff
                            </button>
                        </h3>
                        <ul className="list-none p-0">
                            {staff.map((item, index) => (
                                <StaffItem 
                                    key={index} 
                                    name={item.name} 
                                    details={item.details} 
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Bedrooms (বেডরুম) - Simplified structure */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-between items-center">
                            Bedrooms
                            <div className="flex space-x-2 text-gray-400">
                                {/* Simple arrow placeholders */}
                                <span>&lt;</span> 
                                <span>&gt;</span>
                            </div>
                        </h3>
                        {bedrooms.map((bed, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img 
                                    src={bed.imageUrl} 
                                    alt={bed.title} 
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4">
                                    <p className="font-semibold text-base text-gray-800">{bed.title}</p>
                                    <p className="text-sm text-gray-600">{bed.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Concierge Service (কনসিয়ার্জ পরিষেবা) */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Concierge Service
                        </h3>
                        <ul className="list-none p-0">
                            {conciergeService.map((item, index) => (
                                <AmenityItem key={index} name={item} />
                            ))}
                        </ul>
                    </div>

                    {/* Security Deposit (সিকিউরিটি ডিপোজিট) */}
                    <div className="mb-10 pt-4 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Security Deposit
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">
                            {securityDeposit}
                        </p>
                    </div>

                    {/* Download EV Brochure Button (ব্রোশিওর ডাউনলোড বাটন) */}
                    <div className="mt-8">
                        <button
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 shadow-lg text-lg"
                        >
                            Download EV Brochure
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PropertyGalleryAndAmenities;
