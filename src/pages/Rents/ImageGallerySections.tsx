import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import VideoExperience from "./VideoExperience";
import Description from "./Descriptions";
import Locations from "./Locations";
import Calendar from "./Calendar";
import AddReviewForm from "./AddReviewForm";
import BedRoomsSliders from "./BedRoomsSliders";
import RatesBookingInformation from "./RatesBookingInformation";

interface SimpleListItemProps {
  name: string;
}

interface PropertyData {
  gallery: { id: number; url: string }[];
  amenities: {
    signatureDistinctions: string[];
    interiorAmenities: string[];
    outdoorAmenities: string[];
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rulesAndEtiquette: string[];
  checkInOutTime: { checkIn: string; checkOut: string; description?: string };
  staff: { name: string; details: string }[];
  bedrooms: { title: string; subtitle: string; imageUrl: string }[];
  conciergeService: string[];
  securityDeposit: string;
}

const AmenityItem: React.FC<SimpleListItemProps> = ({ name }) => (
  <li className="flex items-start text-gray-700 text-sm mb-2">
    <img
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760828543/hd_svg_logo_2_hw4vsa.png"
      alt="icon"
      className="w-4 h-4 mr-2 mt-[2px]"
    />
    {name}
  </li>
);

const StaffItem: React.FC<{ name: string; details: string }> = ({
  name,
  details,
}) => (
  <li className="flex items-start mb-4">
    <img
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760828543/hd_svg_logo_2_hw4vsa.png"
      alt="icon"
      className="w-4 h-4 mr-2 mt-[2px]"
    />
    <div className="flex flex-col text-gray-700 text-sm">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-xs text-gray-600">{details}</span>
    </div>
  </li>
);

const mockData: PropertyData = {
  gallery: [
    {
      id: 1,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1762022684/footer_image_jvdr23.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png",
    },
  ],
  amenities: {
    signatureDistinctions: [
      "Fairmont Pavilion Beach Club Membership (10 people)",
      "Media Room",
      "Sonos System",
      "Indoor-outdoor Swimming Pool",
    ],
    interiorAmenities: [
      "Bar Area",
      "Bluetooth Speaker",
      "Cocktail Menu",
      "Outdoor Patio",
      "Dart Board",
      "Fire Pit",
      "Wine Cooler",
    ],
    outdoorAmenities: [
      "Open-Air Dining Spot",
      "Chill Lounge Area",
      "Grill Area",
      "Free Parking on Site",
      "24/7 Security",
      "Direct Beach Access",
    ],
  },
  location: {
    lat: 25.779776,
    lng: 88.338032,
    address: "Casablanca At Sandy Lane",
  },
  rulesAndEtiquette: ["Children - All Welcome", "No Pets", "No Smoking"],
  checkInOutTime: {
    checkIn: "15:00",
    checkOut: "12:00",
    description:
      "Late checkout may be available upon request and is subject to an additional fee.",
  },
  staff: [
    {
      name: "Housekeeper",
      details: "6 days per week from 9am until 3pm - Summer, Winter & Festive",
    },
    {
      name: "Chef",
      details:
        "6 days per week - Summer, Winter & Festive - 3 consecutive Meals",
    },
    {
      name: "Security Guard",
      details:
        "6 days per week from 5pm until 5am - Summer, Winter & Festive",
    },
  ],
  bedrooms: [
    {
      title: "Master Bedroom 1",
      subtitle: "with en suite King Bed (UK)",
      imageUrl:
        "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760229337/Property_Interior_1_z9x6gq.jpg",
    },
  ],
  conciergeService: [
    "Our concierge team offers a bunch of luxury services, making sure you enjoy every moment.",
    "We handle your Arrival, Transfers, Car Rentals, and Chauffeur Services.",
    "We can stock your villa, help with menus, provide household support, and spa services.",
  ],
  securityDeposit: "US$ 10,000.00",
};

const ImageGallerySection: React.FC = () => {
  const [data, setData] = useState<PropertyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-16 text-center ">
        <div className="text-xl font-semibold text-teal-600">
          Loading property details...
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="text-xl font-semibold text-red-500">
          Error loading data. Please try again.
        </div>
      </section>
    );
  }

  const {
    gallery,
    amenities,
    location,
    rulesAndEtiquette,
    checkInOutTime,
    staff,
    conciergeService,
    securityDeposit,
  } = data;
  const { signatureDistinctions, interiorAmenities, outdoorAmenities } =
    amenities;

  const handleDownloadPDF = async () => {
    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 90;
      const imgHeight = 65;
      const marginX = 10;
      const marginY = 25;
      let x = marginX;
      let y = marginY;

      pdf.setFontSize(22);
      pdf.setTextColor(30, 30, 60);
      pdf.text("Gallery Images", 105, 15, { align: "center" });
      pdf.setLineWidth(0.5);
      pdf.setDrawColor(100, 100, 255);
      pdf.line(10, 18, 200, 18);

      const imagesToUse = gallery.slice(0, 6);

      for (let i = 0; i < imagesToUse.length; i++) {
        const img = imagesToUse[i];
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = img.url;
        await new Promise<void>((resolve, reject) => {
          image.onload = () => resolve();
          image.onerror = () => reject();
        });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        ctx?.drawImage(image, 0, 0);

        const imgData = canvas.toDataURL("image/jpeg", 1.0);

        pdf.setDrawColor(50, 50, 150);
        pdf.setLineWidth(1.2);
        pdf.roundedRect(x - 2, y - 2, imgWidth + 4, imgHeight + 4, 5, 5, "S");
        pdf.setFillColor(245, 245, 255);
        pdf.rect(x - 1.5, y - 1.5, imgWidth + 3, imgHeight + 3, "F");

        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);

        if (i % 2 === 0) {
          x += imgWidth + 10;
        } else {
          x = marginX;
          y += imgHeight + 15;
        }

        if (y + imgHeight > 270) break;
      }

      pdf.save("EV_Brochure.pdf");
    } catch (error) {
      console.error("PDF Generation Error:", error);
    }
  };

  return (
    <section className="container mx-auto mb-[920px] px-4 py-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Image Gallery - {gallery.length} photos
          </h2>
          <div>

          </div>

          <div className="grid grid-cols-3 gap-4">
            {(showAll ? gallery : gallery.slice(0, 6)).map((img) => (
              <div
                key={img.id}
                className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-sm cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(img.url)}
              >
                <img
                  src={img.url}
                  alt={`Gallery photo ${img.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
              >
                View All Photos
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
              >
                Show Less
              </button>
            )}




            <VideoExperience />
            <Description />




          </div>
        </div>

        <div className="lg:col-span-5 border-l lg:pl-12 pl-0">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Signature Distinctions
            </h3>
            <ul className="list-none p-0">
              {signatureDistinctions.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Finer Details
            </h3>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">
              Interior Amenities
            </h4>
            <ul className="grid grid-cols-2 gap-x-6">
              {interiorAmenities.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>

            <h4 className="font-semibold text-lg text-gray-800 mt-6 mb-2">
              Outdoor Amenities
            </h4>
            <ul className="list-none p-0 mb-10">
              {outdoorAmenities.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

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

          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Check in/out time
            </h3>
            <div className="flex flex-col space-y-2 text-gray-700 text-sm">
              <div>Check-In: {checkInOutTime.checkIn}</div>
              <div>Check-Out: {checkInOutTime.checkOut}</div>
              <div>{checkInOutTime.description}</div>
            </div>
          </div>

          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-between items-end">
              Staff
              <button className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition duration-150">
                View All Staff
              </button>
            </h3>
            <ul className="list-none p-0">
              {staff.map((item, index) => (
                <StaffItem key={index} name={item.name} details={item.details} />
              ))}
            </ul>
          </div>






          <BedRoomsSliders />






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

          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security Deposit
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {securityDeposit}
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={handleDownloadPDF}
              className="w-full bg-teal-600 cursor-pointer hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 shadow-lg text-lg"
            >
              Download EV Brochure
            </button>
          </div>
        </div>
      </div>




      <RatesBookingInformation />
      <Calendar />


      <Locations lat={location.lat} lng={location.lng} text={location.address} />



      <div className="">

        <AddReviewForm />

      </div>



      {/* --- Image Modal --- */}
      {selectedImage && (
        <div
        
          // className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]"

            className="fixed inset-0  bg-opacity-80 flex justify-center items-center z-[9999]"


          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="w-full h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallerySection;
