import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";

interface BedroomImage {
  image_url: string;
}

interface BedRoomsSlidersProps {
  bedrooms: BedroomImage[];
}

const BedRoomsSliders: React.FC<BedRoomsSlidersProps> = ({ bedrooms }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!bedrooms || bedrooms.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bedrooms.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bedrooms.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-10 pt-4 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-4 flex justify-between items-center">
        Bedrooms
        <div className="flex space-x-2 text-gray-400">
          <button
            onClick={prevSlide}
            className="px-3 py-1 border bg-white rounded-[10px] hover:bg-gray-100 transition-colors"
            aria-label="Previous bedroom"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-1 border bg-white rounded-[10px] hover:bg-gray-100 transition-colors"
            aria-label="Next bedroom"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </h3>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bedrooms.map((bed, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={bed.image_url}
                alt={`Bedroom ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {bedrooms.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-teal-600" : "bg-gray-300"
            }`}
            aria-label={`Go to bedroom ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BedRoomsSliders;
