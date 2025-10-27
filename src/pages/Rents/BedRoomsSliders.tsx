import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';

interface Bedroom {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface BedRoomsSlidersProps {
  bedrooms?: Bedroom[];
}

const mockBedrooms: Bedroom[] = [
  {
    title: 'Master Bedroom 1',
    subtitle: 'with en suite King Bed (UK)',
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png',
  },
  {
    title: 'Master Bedroom 2',
    subtitle: 'with en suite Queen Bed (UK)',
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png',
  },
  {
    title: 'Guest Bedroom 1',
    subtitle: 'with Double Bed',
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png',
  },
  {
    title: 'Guest Bedroom 2',
    subtitle: 'with Twin Beds',
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png',
  },
  {
    title: 'VIP Bedroom',
    subtitle: 'with en suite King Bed & Balcony',
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760220353/medium-shot-plus-sized-woman-influencer_23-2151414147_2_5_fz3dmp.png',
  },
];

const BedRoomsSliders: React.FC<BedRoomsSlidersProps> = ({ bedrooms = mockBedrooms }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bedrooms.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bedrooms.length - 1 ? 0 : prev + 1));
  };

  if (bedrooms.length === 0) return null;

  return (
    <div className="mb-10 pt-4 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-4 flex justify-between items-center">
        Bedrooms
    <div className="flex space-x-2 text-gray-400">
  <button
    onClick={prevSlide}
    className="px-3 py-1 border  bg-white rounded-[10px] hover:bg-gray-100 transition-colors"
  >
    <ArrowLeftIcon />
   
  </button>
  <button
    onClick={nextSlide}
    className="px-3 py-1 border bg-white rounded-[10px] hover:bg-gray-100 transition-colors"
  >
    <ArrowRightIcon />
  </button>
</div>

      </h3>

      {/* Slider wrapper */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bedrooms.map((bed, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <img
                src={bed.imageUrl}
                alt={bed.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="p-4 bg-white">
                <p className="font-semibold text-base text-gray-800">{bed.title}</p>
                <p className="text-sm text-gray-600">{bed.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {bedrooms.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BedRoomsSliders;
