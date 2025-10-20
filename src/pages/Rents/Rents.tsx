// File: Rents.tsx
import React, { useState } from "react";
import RentsCard from "./RentsCard";
import FilterSystem from "@/shared/FilterSystem";
// import { villaData } from "@/FakeJson";


const villaData = [
  {
        id: 1,
        title: "Skyline Residences",
        location: "Downtown, NY",
        price: "850,000",
        rating: 4.9,
        reviewCount: 127,
        beds: 4,
        baths: 3,
        pool: 2,
        amenities: ["Ocean View", "Private Pool", "Chef Available"],
        imageUrl: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760924064/img_5_sd6ueh.png" // Placeholder URL for image 1
    },
    
]


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
    <div className="flex  flex-col sm:flex-row justify-between items-center py-6 container mx-auto">
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

const  Rents = () => {
  const resultsPerPage = 2;
  const totalResults = villaData.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentVillas = villaData.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const backgroundImg = {
    backgroundImage:
      "url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760812885/savba_k7kol1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Full screen height
  };

  return (
    <div style={backgroundImg} className="">
      <div className="mb-10 mt-16 container mx-auto">
        <FilterSystem />
      </div>

      <Pagination
        totalResults={totalResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="space-y-8 container mx-auto">
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
