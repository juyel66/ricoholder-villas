import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import VideoExperience from "./VideoExperience";
import Description from "./Descriptions";
import Locations from "./Locations";
import Calendar from "./Calendar";
import AddReviewForm from "./AddReviewForm";
import BedRoomsSliders from "./BedRoomsSliders";
import RatesBookingInformation from "./RatesBookingInformation";
import { PropertyData } from "@/FakeJson";

interface SimpleListItemProps {
  name: string;
}

interface PropertyDataType {
  media_images: { id: number; url: string }[];
  amenities: {
    signature_distinctions: string[];
    interior_amenities: string[];
    outdoor_amenities: string[];
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rules_and_etiquette: string[];
  check_in_out_time: { check_in: string; check_out: string; description?: string };
  staff: { name: string; details: string }[];
  bedrooms: { image_url: string }[];
  concierge_service: string[];
  security_deposit: string;
  description: string;
  main_image_url: string;
  rates: { id: number; period: string; min_stay: string; rate: number }[];
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

const StaffItem: React.FC<{ name: string; details: string }> = ({ name, details }) => (
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

console.log("Property Data:", PropertyData);

const mockData: PropertyDataType = PropertyData;

const ImageGallerySection: React.FC = () => {
  const [data, setData] = useState<PropertyDataType | null>(null);
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
      <section className="container mx-auto px-4 py-16 text-center">
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
    media_images,
    amenities,
    location,
    rules_and_etiquette,
    check_in_out_time,
    staff,
    concierge_service,
    security_deposit,
    description,
    description_image_url,
    rates,
    bedrooms,
  } = data;

  const { signature_distinctions, interior_amenities, outdoor_amenities } = amenities;

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

      const imagesToUse = media_images.slice(0, 6);

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
        {/* Left section */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Image Gallery - {media_images.length} photos
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {(showAll ? media_images : media_images.slice(0, 6)).map((img) => (
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
            <Description descriptionData={description} descriptionImage={description_image_url} />
          </div>
        </div>

        {/* Right section */}
        <div className="lg:col-span-5 border-l lg:pl-12 pl-0">
          {/* Signature Distinctions */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Signature Distinctions</h3>
            <ul className="list-none p-0">
              {signature_distinctions.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

          {/* Interior & Outdoor Amenities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Finer Details</h3>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Interior Amenities</h4>
            <ul className="grid grid-cols-2 gap-x-6">
              {interior_amenities.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>

            <h4 className="font-semibold text-lg text-gray-800 mt-6 mb-2">Outdoor Amenities</h4>
            <ul className="list-none p-0 mb-10">
              {outdoor_amenities.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

          {/* Rules & Etiquette */}
          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rules & Etiquette</h3>
            <ul className="list-none p-0">
              {rules_and_etiquette.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

          {/* Check In/Out */}
          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Check in/out time</h3>
            <div className="flex flex-col space-y-2 text-gray-700 text-sm">
              <div>Check-In: {check_in_out_time.check_in}</div>
              <div>Check-Out: {check_in_out_time.check_out}</div>
              <div>{check_in_out_time.description}</div>
            </div>
          </div>

          {/* Staff */}
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

          {/* Bedrooms */}
          <BedRoomsSliders bedrooms={bedrooms} />

          {/* Concierge */}
          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Concierge Service</h3>
            <ul className="list-none p-0">
              {concierge_service.map((item, index) => (
                <AmenityItem key={index} name={item} />
              ))}
            </ul>
          </div>

          {/* Security Deposit */}
          <div className="mb-10 pt-4 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Deposit</h3>
            <p className="text-3xl font-bold text-gray-900">{security_deposit}</p>
          </div>

          {/* Download Button */}
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

      {/* Rates Section */}
      <RatesBookingInformation rates={rates} />

      {/* Calendar */}
      <Calendar />

      {/* Location Map */}
      <Locations lat={location.lat} lng={location.lng} text={location.address} />

      {/* Reviews */}
      <AddReviewForm />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-[9999]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
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
