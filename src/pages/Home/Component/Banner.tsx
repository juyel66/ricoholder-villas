import { Link } from "react-router";


const FeaturedBadge = () => (
  <div className="flex items-center lg:w-2/8 space-x-2 px-4 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
    <span className="text-yellow-400">Q</span>
    <span className=''>Barbados's #1 Luxury Villa Platform</span>
  </div>
);

const CallToActionButtons = () => (
  <div className="flex space-x-4 mt-8">
    {/* Explore Button */}
    <Link to="/rents" className="flex items-center space-x-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-xl hover:bg-teal-600 transition duration-300">
     <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760834990/Component_2_3_qinbrf.png" alt="" />
      <span>Explore Listings</span>
    </Link>
    {/* Consultation Button (Ghost/Outline) */}
    <button className="flex items-center space-x-2 px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg bg-black/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
      <span className="text-xl"><img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760834917/Component_2_2_bxvubj.png" alt="" /></span>
      <span>Get a Free Consultation</span>
    </button>
  </div>
);

const ClientAvatars = () => (
  <div className="flex items-center mt-6">
    {/* Placeholder for Client Avatars (Adjust classes for actual images) */}
    <div className="relative flex -space-x-2">
      <img src='https://res.cloudinary.com/dqkczdjjs/image/upload/v1760822107/Ellipse_21_kiaox1.png' className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></img>
      <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760822107/Ellipse_22_ep1nmp.png" className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></img>
      <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760822107/Ellipse_23_e3oi10.png" className="w-8 h-8  rounded-full bg-gray-500 border-2 border-white"></img>
<img src="public/images/Ellipse 24.png" alt="" />
    </div>
    <span className="ml-4 text-white text-sm font-medium">Join with thousands of Satisfied Clients</span>
  </div>
);

// Main Component
const Banner = () => {
  // Use the specified video path
  const videoSource = "https://res.cloudinary.com/dqkczdjjs/video/upload/v1760120464/d_v_jsxaky.mp4"; 

  return (
    <div className="relative p-5  rounded-xl h-screen max-h-[800px] w-full overflow-hidden">
      
      {/* 1. Background Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSource}
        autoPlay // Start playing automatically
        loop // Loop the video
        muted // Mute the video for autoplay compatibility
        playsInline // Required for autoplay on some mobile devices
      />

        {/* Optional: Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      

      {/* 2. Content Container (Positioned on the left) */}
      <div className="relative h-full flex flex-col justify-center  container mx-auto z-10"> 
        {/* Added z-10 to ensure content is above the video/overlay */}

        {/* Top-Left Badge */}
        <FeaturedBadge />

        {/* Client Avatars & Text */}
        <ClientAvatars />

        {/* Main Headline */}
        <h1 className="mt-8 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Find Your Dream Space
          <br />
          with <span className="text-teal-400 drop-shadow-lg italic">Eastmond Villas</span>
        </h1>

        {/* Sub-text */}
        <p className="mt-4 text-lg md:text-xl text-white/90 font-light ">
          Welcome To The Signature Standard Of Refined Luxury
        </p>


        {/* CTA Buttons */}
        <CallToActionButtons />
      </div>
    </div>
  );
};

export default Banner;