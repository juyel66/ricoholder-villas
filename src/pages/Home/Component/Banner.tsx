import { Link } from "react-router-dom";

const FeaturedBadge = () => (
  <div className="flex items-center xl:w-1/3 lg:w-2/5 md:w-2/3 w-4/5 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-[2vw] sm:text-xs md:text-sm font-semibold border border-white/20 relative whitespace-nowrap transition-all duration-500 ease-in-out">
    <img
      className="w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6"
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760898796/Icon_22_fqdcfj.png"
      alt=""
    />
    <span className="ml-1">Barbados's #1 Luxury Villa Platform</span>
  </div>
);

const CallToActionButtons = () => (
  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-[4vw] sm:mt-8 transition-all duration-500 ease-in-out">
    <Link
      to="/rents"
      className="flex items-center justify-center space-x-2 px-[5vw] sm:px-6 py-[2vw] sm:py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-xl hover:bg-teal-600 transition duration-300 text-[2.5vw] sm:text-sm md:text-base"
    >
      <img
        className="w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6"
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760834990/Component_2_3_qinbrf.png"
        alt=""
      />
      <span>Explore Listings</span>
    </Link>

    <button className="flex items-center justify-center space-x-2 px-[5vw] sm:px-6 py-[2vw] sm:py-3 border-2 border-teal-500 text-white font-semibold rounded-lg bg-black/10 backdrop-blur-sm hover:bg-white/10 transition duration-300 text-[2.5vw] sm:text-sm md:text-base">
      <img
        className="w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6"
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760834917/Component_2_2_bxvubj.png"
        alt=""
      />
      <span>Get a Free Consultation</span>
    </button>
  </div>
);

const ClientAvatars = () => (
  <div className="flex flex-col sm:flex-row sm:items-center mt-[3vw] sm:mt-6 transition-all duration-500 ease-in-out">
    <div className="relative flex -space-x-2 mb-2 sm:mb-0">
      {["Ellipse_21_kiaox1", "Ellipse_22_ep1nmp", "Ellipse_23_e3oi10"].map((img, i) => (
        <img
          key={i}
          src={`https://res.cloudinary.com/dqkczdjjs/image/upload/v1760822107/${img}.png`}
          className="w-[6vw] h-[6vw] sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-white transition-all duration-500 ease-in-out"
          alt={`Client ${i + 1}`}
        />
      ))}
    </div>
    <span className="text-white text-[2.5vw] sm:text-sm md:text-base font-medium ml-0 sm:ml-4 whitespace-nowrap">
      Join with thousands of Satisfied Clients
    </span>
  </div>
);

const Banner = () => {
  const videoSource =
    "https://res.cloudinary.com/dqkczdjjs/video/upload/v1760120464/d_v_jsxaky.mp4";

  return (
    <div className="relative w-full h-[70vh] md:h-[66vh] lg:h-[66vh] max-h-[800px] overflow-hidden transition-all duration-700 ease-in-out">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto  p-2  transition-all duration-700 ease-in-out">
        <FeaturedBadge />
        <ClientAvatars />

        <h1 className="mt-[5vw] sm:mt-8 text-[5vw] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight transition-all duration-700 ease-in-out">
          Find Your Dream Space <br /> with{" "}
          <span className="text-teal-400 drop-shadow-lg italic">Eastmond Villas</span>
        </h1>

        <p className="mt-[2vw] text-[2.5vw] sm:text-base md:text-lg text-white/90 font-light max-w-2xl transition-all duration-700 ease-in-out">
          Welcome To The Signature Standard Of Refined Luxury
        </p>

        <CallToActionButtons />
      </div>
    </div>
  );
};

export default Banner;
