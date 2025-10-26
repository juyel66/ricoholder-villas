import React, { useState } from "react";

const FilterSystem = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Format number with commas (U.S. style)
  const formatNumber = (value) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle price change and formatting
  const handlePriceChange = (e, setter) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(rawValue)) setter(formatNumber(rawValue));
  };

  const handleReset = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setMinPrice("");
      setMaxPrice("");
    }, 1000);
  };

  return (
    <div className="pt-6 px-4">
      <div className="bg-white container p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Check-In */}
          <div>
            <label htmlFor="check-in" className="block text-sm font-semibold text-gray-800 mb-2">
              Check-In
            </label>
            <div className="relative">
              <input
                type="date"
                id="check-in"
                name="check-in"
                placeholder="mm/dd/yyyy"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Check-Out */}
          <div>
            <label htmlFor="check-out" className="block text-sm font-semibold text-gray-800 mb-2">
              Check-Out
            </label>
            <div className="relative">
              <input
                type="date"
                id="check-out"
                name="check-out"
                placeholder="mm/dd/yyyy"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Villa Name */}
          <div>
            <label htmlFor="villa-name" className="block text-sm font-semibold text-gray-800 mb-2">
              Villa Name
            </label>
            <input
              type="text"
              id="villa-name"
              name="villa-name"
              placeholder="Search by name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            />
          </div>

          {/* Min Beds */}
          <div>
            <label htmlFor="min-beds" className="block text-sm font-semibold text-gray-800 mb-2">
              Min Beds
            </label>
            <select
              id="min-beds"
              name="min-beds"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Min Baths */}
          <div>
            <label htmlFor="min-baths" className="block text-sm font-semibold text-gray-800 mb-2">
              Min Baths
            </label>
            <select
              id="min-baths"
              name="min-baths"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label htmlFor="guests" className="block text-sm font-semibold text-gray-800 mb-2">
              Guests
            </label>
            <select
              id="guests"
              name="guests"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label htmlFor="min-price" className="block text-sm font-semibold text-gray-800 mb-2">
              Min Price (USD)
            </label>
            <input
              type="text"
              id="min-price"
              name="min-price"
              value={minPrice}
              onChange={(e) => handlePriceChange(e, setMinPrice)}
              placeholder="e.g., 1,000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            />
          </div>

          {/* Max Price */}
          <div>
            <label htmlFor="max-price" className="block text-sm font-semibold text-gray-800 mb-2">
              Max Price (USD)
            </label>
            <input
              type="text"
              id="max-price"
              name="max-price"
              value={maxPrice}
              onChange={(e) => handlePriceChange(e, setMaxPrice)}
              placeholder="e.g., 10,000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 h-[42px]"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-200 h-[42px]"
            >
              <img
                className={`mr-2 h-5 w-5 ${isSpinning ? "animate-spin" : ""}`}
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760830343/Vector_fpsm2o.png"
                alt="reset-icon"
              />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSystem;
