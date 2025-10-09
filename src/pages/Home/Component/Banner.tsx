

const FeaturedBadge = () => (
  <div className="flex items-center w-2/6 space-x-2 px-4 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
    <span className="text-yellow-400">Q</span>
    <span className=''>World's #1 Luxury Villa Platform</span>
  </div>
);

const CallToActionButtons = () => (
  <div className="flex space-x-4 mt-8">
    {/* Explore Button */}
    <button className="flex items-center space-x-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-xl hover:bg-teal-600 transition duration-300">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6l4 2"></path></svg>
      <span>Explore Listings</span>
    </button>
    {/* Consultation Button (Ghost/Outline) */}
    <button className="flex items-center space-x-2 px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg bg-black/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
      <span className="text-xl">📅</span>
      <span>Get a Free Consultation</span>
    </button>
  </div>
);

const ClientAvatars = () => (
  <div className="flex items-center mt-6">
    {/* Placeholder for Client Avatars (Adjust classes for actual images) */}
    <div className="relative flex -space-x-2">
      <img src='public/images/Ellipse 21.png' className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></img>
      <img src="public/images/Ellipse 22.png" className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></img>
      <img src="public/images/Ellipse 23.png" className="w-8 h-8  rounded-full bg-gray-500 border-2 border-white"></img>
<img src="public/images/Ellipse 24.png" alt="" />
    </div>
    <span className="ml-4 text-white text-sm font-medium">Join with **500K+ Satisfied Clients**</span>
  </div>
);

// Main Component
const Banner = () => {
  // Use the specified video path
  const videoSource = "public/video/bgVideo.m4v"; 

  return (
    <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
      
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
      <div className="relative h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 max-w-7xl mx-auto z-10"> 
        {/* Added z-10 to ensure content is above the video/overlay */}

        {/* Top-Left Badge */}
        <FeaturedBadge />

        {/* Client Avatars & Text */}
        <ClientAvatars />

        {/* Main Headline */}
        <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Find Your Dream Space
          <br />
          with <span className="text-teal-400 drop-shadow-lg">Eastmond Villas</span>
        </h1>

        {/* Sub-text */}
        <p className="mt-4 text-lg md:text-xl text-white/90 font-light max-w-md">
          Smart Homes, Sustainable Living, and AI-Powered Property Matching
        </p>

        {/* CTA Buttons */}
        <CallToActionButtons />
      </div>
    </div>
  );
};

export default Banner;