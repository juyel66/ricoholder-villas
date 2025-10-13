import React, { useState } from 'react';

// --------------------------------------------------------------------------------
// 1. BookingModal Component (Fixed: Lighter Backdrop)
// --------------------------------------------------------------------------------

// Interface for form data
interface FormData {
  name: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
}

// Interface for modal props
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // State to hold form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });

  // Handler to update the state when input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'number' ? parseInt(value) : value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log data to the console
    console.log('Booking Details Submitted:', formData); 
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      guests: 1,
    });
    
    // Close the modal
    onClose();
  };

  // If isOpen is false, do not render the modal
  if (!isOpen) return null;

  return (
    // MODIFICATION HERE: Changed bg-opacity-50 to bg-opacity-30 and removed backdrop-blur-sm
    // Modal Backdrop (Fixed, centered, with light transparent overlay)
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30" 
      onClick={onClose}
    >
      
      {/* Modal Content - stopPropagation prevents closing when clicking inside */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 m-4 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Book Your Stay</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition duration-150 text-3xl leading-none"
          >
            &times; 
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          
          <div className="space-y-4">
             {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="John Doe"
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="john.doe@example.com"
              />
            </div>

            {/* Check-in and Check-out Date */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            
            {/* Guests Input */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --------------------------------------------------------------------------------
// 2. RentsDetailsBanner Component (Main Component)
// --------------------------------------------------------------------------------

const RentsDetailsBanner: React.FC = () => {
  // State to control whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => setIsModalOpen(true);
  
  // Function to close the modal
  const handleCloseModal = () => setIsModalOpen(false);
  
  return (
    // Main Container
    <div className="relative w-full h-[900px] md:h-[700px] ">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760228150/Properties_Container_5_tlhzwn.png')` 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* 2. Content Layer (Text and Info Card) */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white p-4">
        
        {/* Title and Subtitle */}
        <div className="text-center mt-20 mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-lg mb-2 leading-snug">
            Seaclusion – Barbados' Platinum Coast
          </h1>
          <h2 className="text-2xl md:text-4xl font-light drop-shadow-lg">
            Masterpiece
          </h2>
          <div className="flex items-center justify-center mt-4 text-xl drop-shadow-lg">
            {/* Location Icon (SVG) */}
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            Downtown, NY
          </div>
        </div>
        
        {/* 3. The Info/Action Card */}
        <div className="bg-white absolute bottom-0 md:bottom-auto md:top-[60%] z-20 text-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto transform translate-y-1/2">
            
            {/* Stats Section */}
            <div className="flex justify-around items-center text-center border-b pb-4 mb-4">
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🛏️</span>
                    <span className="text-sm mt-1">12 Guests </span>
                </div>
                 <div className="flex flex-col items-center">
                    <span className="text-2xl">🛏️</span>
                    <span className="text-sm mt-1">4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🛁</span>
                    <span className="text-sm mt-1">3 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl">🏊</span>
                    <span className="text-sm mt-1">2 Pools</span>
                </div>
            </div>

            {/* Price and Action Buttons */}
            <div className="flex flex-col items-center mb-4">
                <p className="text-lg font-medium text-green-700">
                    From **USD$850,000.00/night**
                </p>
            </div>
            
            <div className="flex space-x-4">
                {/* Share Button */}
                <button 
                    className="flex-1 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                >
                    <span className="mr-2 text-xl">🔗</span> 
                    Share
                </button>
                
                {/* Book Now Button: onClick handler added */}
                <button 
                    onClick={handleOpenModal} 
                    className="flex-1 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                >
                    <span className="mr-2 text-xl">🗓️</span> 
                    Book Now
                </button>
            </div>
        </div>
        
      </div>
      
      {/* Booking Modal component is rendered here */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default RentsDetailsBanner;