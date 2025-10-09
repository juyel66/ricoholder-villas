import React from 'react';

const FilterSystem = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-5xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">

        {/* Check-In */}
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-2">Check-In</label>
          <div className="relative">
            <input
              type="date" 
              id="check-in"
              name="check-in"
              placeholder="mm/dd/yyyy"
              className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              defaultValue="mm/dd/yyyy" // Static value for design
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Check-Out */}
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-2">Check-Out</label>
          <div className="relative">
            <input
              type="text" // Using text to avoid default date picker functionality
              id="check-out"
              name="check-out"
              placeholder="mm/dd/yyyy"
              className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              defaultValue="mm/dd/yyyy" // Static value for design
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Villa Name */}
        <div>
          <label htmlFor="villa-name" className="block text-sm font-medium text-gray-700 mb-2">Villa Name</label>
          <input
            type="text"
            id="villa-name"
            name="villa-name"
            placeholder="Search by name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        {/* Min Beds */}
        <div>
          <label htmlFor="min-beds" className="block text-sm font-medium text-gray-700 mb-2">Min Beds</label>
          <select
            id="min-beds"
            name="min-beds"
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            <option>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        {/* Min Baths */}
        <div>
          <label htmlFor="min-baths" className="block text-sm font-medium text-gray-700 mb-2">Min Baths</label>
          <select
            id="min-baths"
            name="min-baths"
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            <option>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
          <select
            id="guests"
            name="guests"
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
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
          <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
          <input
            type="text" // Keeping as text as per design, but could be "number" for functionality
            id="min-price"
            name="min-price"
            defaultValue="10000"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        {/* Max Price */}
        <div>
          <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
          <input
            type="text" // Keeping as text as per design, but could be "number" for functionality
            id="max-price"
            name="max-price"
            defaultValue="1000000"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm h-[42px]" // Adjusted height to match inputs
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Search
          </button>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:text-sm h-[42px]" // Adjusted height
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12c0 2.21.81 4.209 2.192 5.765M18 9.5V14m-12-2.5h10"></path>
            </svg>
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default FilterSystem;