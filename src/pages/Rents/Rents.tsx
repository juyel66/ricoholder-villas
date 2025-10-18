// File: Rents.tsx
import React, { useState } from "react";

import RentsCard from "./RentsCard";
import FilterSystem from "@/shared/FilterSystem";



// File: FakeJson.ts
 const villaData = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    location: "Malibu, CA",
    price: "1,200,000",
    rateType: "/night",
    rating: 4.8,
    reviewCount: 152,
    beds: 5,
    baths: 4,
    pool: 1,
    imageUrl: "https://i.ibb.co/XYZ123/villa1.png"
  },
  {
    id: 2,
    title: "Skyline Residences",
    location: "Downtown, NY",
    price: "850,000",
    rateType: "/night",
    rating: 4.9,
    reviewCount: 127,
    beds: 4,
    baths: 3,
    pool: 2,
    imageUrl: "https://i.ibb.co/ZpG7JcPk/img-5.png"
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    location: "Miami, FL",
    price: "950,000",
    rateType: "/night",
    rating: 4.7,
    reviewCount: 98,
    beds: 3,
    baths: 2,
    pool: 1,
    imageUrl: "https://i.ibb.co/ABC456/villa3.png"
  },
  {
    id: 4,
    title: "Mountain Retreat",
    location: "Aspen, CO",
    price: "1,500,000",
    rateType: "/night",
    rating: 4.9,
    reviewCount: 205,
    beds: 6,
    baths: 5,
    pool: 1,
    imageUrl: "https://i.ibb.co/DEF789/villa4.png"
  },
  {
    id: 5,
    title: "Urban Penthouse",
    location: "Chicago, IL",
    price: "780,000",
    rateType: "/night",
    rating: 4.6,
    reviewCount: 88,
    beds: 3,
    baths: 3,
    pool: 0,
    imageUrl: "https://i.ibb.co/GHI012/villa5.png"
  },
  {
    id: 6,
    title: "Countryside Villa",
    location: "Napa Valley, CA",
    price: "1,050,000",
    rateType: "/night",
    rating: 4.8,
    reviewCount: 134,
    beds: 4,
    baths: 3,
    pool: 1,
    imageUrl: "https://i.ibb.co/JKL345/villa6.png"
  }
];




interface PaginationProps {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  resultsPerPage,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const start = (currentPage - 1) * resultsPerPage + 1;
  const end = Math.min(currentPage * resultsPerPage, totalResults);

  const pagesToShow = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 3);

  if (currentPage > totalPages - 3) startPage = Math.max(1, totalPages - 5);
  if (currentPage < 3) endPage = Math.min(totalPages, 6);

  for (let i = startPage; i <= endPage; i++) pagesToShow.push(i);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-6 container mx-auto">
      <div className="text-sm font-medium text-gray-600 mb-4 sm:mb-0">
        Showing {start} to {end} of {totalResults} results
      </div>
      <div className="flex items-center">
        <button
          className="px-4 py-2 mx-1 rounded-lg border hover:bg-gray-100 disabled:text-gray-400"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          ← Previous
        </button>

        {pagesToShow.map((page) => (
          <button
            key={page}
            className={`w-10 h-10 mx-1 flex items-center justify-center rounded-lg text-sm font-semibold ${
              page === currentPage
                ? "bg-white text-gray-900 border shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(page)}
          >
            {String(page).padStart(2, "0")}
          </button>
        ))}

        <button
          className="px-4 py-2 mx-1 rounded-lg border hover:bg-gray-100 disabled:text-gray-400"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

const Rents = () => {
  const resultsPerPage = 2; // Display 2 villas per page
  const totalResults = villaData.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Slice villaData based on current page
  const currentVillas = villaData.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="my-26">
      <div className="mb-10">
        <FilterSystem />
      </div>

      <Pagination
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="space-y-8">
        {currentVillas.map((villa) => (
          <RentsCard key={villa.id} villa={villa} />
        ))}
      </div>

      <Pagination
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Rents;
