import { CiShare2 } from "react-icons/ci";
import React from "react";

const propertyData = {
  id: 2,
  title: "Skyline Residences",
  location: "Downtown, NY",
  price: "850,000",
  rateType: "/night", // New data point to match the design
  rating: 4.9,
  reviewCount: 127,
  beds: 4,
  baths: 3,
  pool: 2,

  imageUrl: "https://i.ibb.co.com/ZpG7JcPk/img-5.png",
};

const ActionButton = ({ icon }) => (
  <button className="w-9 h-9 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition duration-150 ">
    <span className="text-lg">{icon}</span>
  </button>
);

const PropertyCard = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  }).format(property.price);

  const amenities = [
    { icon: "🛏️", value: `${property.beds} Beds` },
    { icon: "🛁", value: `${property.baths} Baths` },
    { icon: "🏊", value: `${property.pool} Pool` },
  ];

  return (
    <div className="max-w-7xl  mx-auto my-10 bg-white p-2.5 rounded-[2rem]  border-4 border-green-200/50 overflow-hidden font-sans">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl">
        <div
          className="md:w-[60%] relative h-80 md:h-[450px] bg-gray-200 bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${property.imageUrl})` }}
        >
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl font-semibold text-sm flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-gray-800">{property.rating}</span>
            <span className="text-gray-400 font-normal">
              ({property.reviewCount})
            </span>
          </div>

          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className=" text-black rounded-full w-8 h-8 flex items-center justify-center  bg-white">
              <CiShare2 /> {/* Share Icon */}
            </div>
          </div>

          <div className="absolute bottom-4 lg:flex hidden  right-4 flex-shrink-0 w-12 h-12  rounded-full  items-center justify-center text-2xl font-light ">
            <span
              className=" mb-100 ml-[70px]  p-3 bg-white rounded-full  "
              role="img"
              aria-label="home icon"
            >
              🏠
            </span>
          </div>
        </div>

        <div className=" px-15 items-center mt-20">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mt-0">
              {property.title}
            </h3>
            <p className="text-base text-gray-500 mb-6 flex items-center font-medium">
              <span className="mr-1 text-lg">📍</span> {property.location}
            </p>

            <div className="mb-8">
              <p className="text-xl text-emerald-700 m-0 font-bold">
                From <span className="text-2xl">${formattedPrice}</span>
                {property.rateType}
              </p>
            </div>

            <div className="flex flex-wrap items-center text-gray-500 text-sm font-medium space-x-4 mb-8">
              {amenities.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>

                  {index < amenities.length - 1 && (
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <button className="w-full py-3 bg-gray-100 text-emerald-700 font-semibold text-lg border-2 border-emerald-500/50 rounded-xl hover:bg-gray-200 transition duration-150  mt-4 md:mt-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const RentsCard = () => (
  <div className=" bg-gray-50  ">
    <PropertyCard property={propertyData} />
  </div>
);

export default RentsCard;
