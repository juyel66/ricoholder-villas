import { villaData } from "@/FakeJson"; 
import RentsCard from "./RentsCard";
import FilterSystem from "@/shared/FilterSystem";

// --- New Pagination Component ---
const Pagination = ({ totalResults, resultsPerPage, currentPage, totalPages }) => {
    // Determine the range of results being shown
    const start = (currentPage - 1) * resultsPerPage + 1;
    const end = Math.min(currentPage * resultsPerPage, totalResults);

    // Array of page numbers to display (e.g., [1, 2, 3, ..., 6])
    const pagesToShow = [];
    // Start with the current page
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 3);

    // If we're near the end, show more previous pages
    if (currentPage > totalPages - 3) {
        startPage = Math.max(1, totalPages - 5);
    }
    // If we're near the start, show more next pages
    if (currentPage < 3) {
        endPage = Math.min(totalPages, 6);
    }

    for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
    }


    const PageNumberButton = ({ number, isActive, isEllipsis }) => (
        <button 
            className={`w-10 h-10 mx-1 flex items-center justify-center rounded-lg text-sm font-semibold transition duration-150 
                ${isActive 
                    ? 'bg-white text-gray-900 border border-gray-200 shadow-md' 
                    : isEllipsis 
                        ? 'text-gray-500' // Styling for the '...'
                        : 'text-gray-600 hover:bg-gray-100'
                }`
            }
            disabled={isActive || isEllipsis}
        >
            {isEllipsis ? '...' : String(number).padStart(2, '0')}
        </button>
    );

    const NavButton = ({ direction, isDisabled }) => (
        <button 
            className={`px-4 py-2 mx-1 flex items-center justify-center rounded-lg text-sm font-semibold transition duration-150 ${
                isDisabled 
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-100'
            }`}
            disabled={isDisabled}
        >
            {direction === 'Previous' && (
                <>
                    <span className="mr-1">←</span> Previous
                </>
            )}
            {direction === 'Next' && (
                <>
                    Next <span className="ml-1">→</span>
                </>
            )}
        </button>
    );

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 container mx-auto">
            {/* Left side: Results Count */}
            <div className="text-sm font-medium text-gray-600 mb-4 sm:mb-0">
                Showing {start} to {end} of {totalResults} results
            </div>

            {/* Right side: Pagination Controls */}
            <div className="flex items-center">
                <NavButton direction="Previous" isDisabled={currentPage === 1} />

                {/* Render page numbers */}
                {pagesToShow[0] > 1 && <PageNumberButton number={1} isActive={false} />}
                {pagesToShow[0] > 2 && <PageNumberButton isEllipsis={true} />}

                {pagesToShow.map((page) => (
                    <PageNumberButton 
                        key={page} 
                        number={page} 
                        isActive={page === currentPage} 
                    />
                ))}

                {pagesToShow[pagesToShow.length - 1] < totalPages - 1 && <PageNumberButton isEllipsis={true} />}
                {pagesToShow[pagesToShow.length - 1] < totalPages && <PageNumberButton number={totalPages} isActive={false} />}
                
                <NavButton direction="Next" isDisabled={currentPage === totalPages} />
            </div>
      
        </div>
    );
};
// --- End of New Pagination Component ---


const Rents = () => {
    const signatureCardData = villaData;

    // Hardcoded Pagination Values to match your image and scenario (54 results total)
    const totalResults = 54;
    const resultsPerPage = 8;
    const currentPage = 1; // Assuming we are on the first page
    const totalPages = Math.ceil(totalResults / resultsPerPage); // totalPages = 7

    return (
        <div className=" ">
           <div className="mb-20">
             <FilterSystem />
           </div>
            
            {/* PAGINATION ADDED AT THE TOP */}
            <Pagination 
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
           

            <div className=" w-full">
                
                {/* Card Grid */}
                <div className="  ">
                    {/* NOTE: You would typically map over a *slice* of villaData based on 'currentPage' and 'resultsPerPage' */}
                    {signatureCardData.map((villa) => (
                        <RentsCard 
                            key={villa.id}
                            villa={villa} 
                        />
                    ))}
                </div>
            </div>
            
            {/* PAGINATION ADDED AT THE BOTTOM */}
            <Pagination 
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        

        </div>
    );
};

export default Rents;