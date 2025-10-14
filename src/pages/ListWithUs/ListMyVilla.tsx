import { Link } from "react-router-dom";


const ListMyVilla: React.FC = () => {

    

    
  return (
    <div className="relative mt-14 mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Banner Image */}
      <img
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760212482/Properties_Container_4_ou2czf.png" // Replace with your actual image path
        alt="Luxury Property Banner"
        className="w-full h-auto object-cover object-center"
      />

      {/* Overlay with Content */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
          Let's Turn Your Property Into <br className="hidden md:block" /> a Luxury Investment
        </h1>
        <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl">
          Join our network of premier villa owners and unlock your property's full potential.
        </p>
        <Link to="/"  className="px-8 py-3 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">
          List My Villa
        </Link>
      </div>
    </div>
  );
};

export default ListMyVilla;