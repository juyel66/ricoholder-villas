// import React, { useState } from 'react';
// import { 
//   FaFacebookF, 
//   FaWhatsapp, 
//   FaInstagram, 
//   FaTwitter, 
//   FaLinkedinIn, 
//   FaPinterestP, 
//   FaRedditAlien, 
//   FaTelegramPlane, 
//   FaEnvelope 
// } from "react-icons/fa";


// // --------------------------------------------------------------------------------
// // 1. BookingModal Component (Fixed: Lighter Backdrop)
// // --------------------------------------------------------------------------------
// interface FormData {
//   name: string;
//   email: string;
//   checkInDate: string;
//   checkOutDate: string;
//   guests: number;
// }

// interface BookingModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     checkInDate: '',
//     checkOutDate: '',
//     guests: 1,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'number' ? parseInt(value) : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Booking Details Submitted:', formData);
//     setFormData({
//       name: '',
//       email: '',
//       checkInDate: '',
//       checkOutDate: '',
//       guests: 1,
//     });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30" 
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 m-4 transform transition-all duration-300 scale-100"
//         onClick={(e) => e.stopPropagation()} 
//       >
//         <div className="flex justify-between items-center border-b pb-3 mb-4">
//           <h3 className="text-2xl font-semibold text-gray-800">Book Your Stay</h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-500 hover:text-gray-700 transition duration-150 text-3xl leading-none"
//           >
//             &times; 
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 placeholder="john.doe@example.com"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <div className="flex-1">
//                 <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
//                 <input
//                   type="date"
//                   id="checkInDate"
//                   name="checkInDate"
//                   value={formData.checkInDate}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div className="flex-1">
//                 <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
//                 <input
//                   type="date"
//                   id="checkOutDate"
//                   name="checkOutDate"
//                   value={formData.checkOutDate}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
//               <input
//                 type="number"
//                 id="guests"
//                 name="guests"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 required
//                 min="1"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//               />
//             </div>
//           </div>
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg"
//             >
//               Confirm Booking
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // --------------------------------------------------------------------------------
// // 2. ShareModal Component (New)
// // --------------------------------------------------------------------------------
// interface ShareModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const socialPlatforms = [
//   { name: "Facebook", icon: <FaFacebookF size={24} />, link: "https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" },
//   { name: "WhatsApp", icon: <FaWhatsapp size={24} />, link: "https://wa.me/?text=YOUR_URL" },
//   { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/" },
//   { name: "Twitter", icon: <FaTwitter size={24} />, link: "https://twitter.com/intent/tweet?url=YOUR_URL" },
//   { name: "LinkedIn", icon: <FaLinkedinIn size={24} />, link: "https://www.linkedin.com/shareArticle?url=YOUR_URL" },
//   { name: "Pinterest", icon: <FaPinterestP size={24} />, link: "https://pinterest.com/pin/create/button/?url=YOUR_URL" },
//   { name: "Reddit", icon: <FaRedditAlien size={24} />, link: "https://reddit.com/submit?url=YOUR_URL" },
//   { name: "Telegram", icon: <FaTelegramPlane size={24} />, link: "https://t.me/share/url?url=YOUR_URL" },
//   { name: "Email", icon: <FaEnvelope size={24} />, link: "mailto:?body=YOUR_URL" },
// ];

// const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30" 
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 m-4 transform transition-all duration-300 scale-100 max-h-[80vh] "
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center border-b pb-3 mb-4">
//           <h3 className="text-2xl font-semibold text-gray-800">Share This Listing</h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-500 hover:text-gray-700 transition duration-150 text-3xl leading-none"
//           >
//             &times;
//           </button>
//         </div>
//         <div className="flex flex-col space-y-3">
//           {socialPlatforms.map((platform) => (
//             <a 
//               key={platform.name} 
//               href={platform.link} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-150"
//             >
//               <span className="text-2xl mr-3">{platform.icon}</span>
//               <span className="text-gray-800 font-medium">{platform.name}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --------------------------------------------------------------------------------
// // 3. RentsDetailsBanner Component (Main Component)
// // --------------------------------------------------------------------------------
// const RentsDetailsBanner: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleOpenShareModal = () => setIsShareModalOpen(true);
//   const handleCloseShareModal = () => setIsShareModalOpen(false);

//   return (
//     <div className="relative w-full h-[900px] md:h-[700px] ">
//       <div 
//         className="absolute inset-0 bg-cover bg-center" 
//         style={{ 
//           backgroundImage: `url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760228150/Properties_Container_5_tlhzwn.png')` 
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-start h-full text-white p-4">
//         <div className="text-center mt-40 mb-8">
//           <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-lg mb-2 leading-snug">
//             Seaclusion – Barbados' Platinum Coast
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-light drop-shadow-lg">
//             Masterpiece
//           </h2>
//           <div className="flex items-center justify-center mt-4 text-xl drop-shadow-lg">
//             <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
//             </svg>
//             Downtown, NY
//           </div>
//         </div>

//         <div className="bg-white absolute bottom-0 md:bottom-auto md:top-[60%] z-20 text-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto transform translate-y-1/2">
//           <div className="flex justify-around items-center text-center border-b pb-4 mb-4">
//             <div className="flex flex-col items-center">
//               <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830630/user-fill_gkf8xf.png" alt="" /></span>
//               <span className="text-sm mt-1">12 Guests </span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_3_rwdb0z.png" alt="" /></span>
//               <span className="text-sm mt-1">4 Beds</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_4_zsqcrj.png" alt="" /></span>
//               <span className="text-sm mt-1">3 Baths</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827483/Frame_5_cyajjb.png" alt="" /></span>
//               <span className="text-sm mt-1">2 Pools</span>
//             </div>
//           </div>

//           <div className="flex flex-col items-center mb-4">
//             <p className="text-lg font-medium text-green-700">
//               From USD$850,000.00/night
//             </p>
//           </div>
          
//           <div className="flex space-x-4">
//             <button 
//               onClick={handleOpenShareModal} 
//               className="flex-1 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
//             >
//               <span className="mr-2 text-xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830720/Component_2_atygpn.png" alt="" /></span> 
//               Share
//             </button>
            
//             <button 
//               onClick={handleOpenModal} 
//               className="flex-1 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
//             >
//               <span className="mr-2 text-xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830719/Component_2_1_wqngcv.png" alt="" /></span> 
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <BookingModal 
//         isOpen={isModalOpen} 
//         onClose={handleCloseModal} 
//       />
//       <ShareModal
//         isOpen={isShareModalOpen}
//         onClose={handleCloseShareModal}
//       />
//     </div>
//   );
// };

// export default RentsDetailsBanner;





import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaRedditAlien, 
  FaTelegramPlane, 
  FaEnvelope 
} from "react-icons/fa";

// --------------------------------------------------------------------------------
// 1. ShareModal Component
// --------------------------------------------------------------------------------
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF size={24} />, link: "https://www.facebook.com/sharer/sharer.php?u=YOUR_URL" },
  { name: "WhatsApp", icon: <FaWhatsapp size={24} />, link: "https://wa.me/?text=YOUR_URL" },
  { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: <FaTwitter size={24} />, link: "https://twitter.com/intent/tweet?url=YOUR_URL" },
  { name: "LinkedIn", icon: <FaLinkedinIn size={24} />, link: "https://www.linkedin.com/shareArticle?url=YOUR_URL" },
  { name: "Pinterest", icon: <FaPinterestP size={24} />, link: "https://pinterest.com/pin/create/button/?url=YOUR_URL" },
  { name: "Reddit", icon: <FaRedditAlien size={24} />, link: "https://reddit.com/submit?url=YOUR_URL" },
  { name: "Telegram", icon: <FaTelegramPlane size={24} />, link: "https://t.me/share/url?url=YOUR_URL" },
  { name: "Email", icon: <FaEnvelope size={24} />, link: "mailto:?body=YOUR_URL" },
];

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div 
      // Changed bg-opacity-30 to bg-black/30 for better readability in Tailwind
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 m-4 transform transition-all duration-300 scale-100 max-h-[80vh] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Share This Listing</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition duration-150 text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          {socialPlatforms.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-150"
            >
              <span className="text-2xl mr-3">{platform.icon}</span>
              <span className="text-gray-800 font-medium">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------------
// 2. RentsDetailsBanner Component (Main Component)
// --------------------------------------------------------------------------------
const RentsDetailsBanner: React.FC = () => {
  // Only the state for the Share Modal remains
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleOpenShareModal = () => setIsShareModalOpen(true);
  const handleCloseShareModal = () => setIsShareModalOpen(false);

  return (
    <div className="relative w-full h-[900px] md:h-[700px] ">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760228150/Properties_Container_5_tlhzwn.png')` 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative z-10  flex flex-col items-center justify-start h-full text-white p-4">
        <div className="text-center mt-50 mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-lg mb-2 leading-snug">
            Seaclusion – Barbados' Platinum Coast
          </h1>
          <h2 className="text-2xl md:text-4xl font-light drop-shadow-lg">
            Masterpiece
          </h2>
          <div className="flex items-center justify-center mt-4 text-xl drop-shadow-lg">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            Downtown, NY
          </div>
        </div>

        <div className="bg-white absolute bottom-0 md:bottom-auto md:top-[60%] z-20 text-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto transform translate-y-1/2">
          <div className="flex justify-around items-center text-center border-b pb-4 mb-4">
            {/* Guest Icon */}
            {/* <div className="flex flex-col items-center">
              <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830630/user-fill_gkf8xf.png" alt="" /></span>
              <span className="text-sm mt-1">12 Guests </span>
            </div> */}
            {/* Beds Icon */}
            <div className="flex flex-col items-center">
              <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_3_rwdb0z.png" alt="" /></span>
              <span className="text-sm mt-1">4 Beds</span>
            </div>
            {/* Baths Icon */}
            <div className="flex flex-col items-center">
              <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_4_zsqcrj.png" alt="" /></span>
              <span className="text-sm mt-1">3 Baths</span>
            </div>
            {/* Pools Icon */}
            <div className="flex flex-col items-center">
              <span className="text-2xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827483/Frame_5_cyajjb.png" alt="" /></span>
              <span className="text-sm mt-1">2 Pools</span>
            </div>
          </div>

          <div className="flex flex-col items-center mb-4">
            <p className="text-lg font-medium text-green-700">
              From USD$850,000.00/Fixed Selling Price 
            </p>
          </div>
          
          {/* Share Button container (now full width) */}
          <div className="flex justify-center"> 
            <button 
              onClick={handleOpenShareModal} 
              className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
            >
              <span className="mr-2 text-xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830720/Component_2_atygpn.png" alt="Share Icon" /></span> 
              Share
            </button>
            {/* The 'Book Now' button was removed from here */}
          </div>
        </div>
      </div>

      {/* The BookingModal component is NOT rendered here */}
      
      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
      />
    </div>
  );
};

export default RentsDetailsBanner;
