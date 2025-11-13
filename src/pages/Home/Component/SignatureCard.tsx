import { Link } from 'react-router';

// --- Icon Components ---
const LocationIcon = () => (
    <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);
const BedIcon = () => <img className="w-5 h-5 mr-1" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_3_rwdb0z.png" alt="bed-icon" />;
const BathIcon = () => <img className="w-5 h-5 mr-1" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827484/Frame_4_zsqcrj.png" alt="bath-icon" />;
const PoolIcon = () => <img className="w-5 h-5 mr-1" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827483/Frame_5_cyajjb.png" alt="pool-icon" />;
const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>
);
const ShareIcon = () => <img className="w-5 h-5" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760923888/Icon_39_piurkh.png" alt="share-icon" />;

const SignatureCard = ({ villa }) => {
    const defaultVilla = {
        title: "Loading Villa",
        location: "Getting Location...",
        price: "N/A",
        rating: 0,
        reviewCount: 0,
        beds: 0,
        baths: 0,
        pool: 0,
        amenities: [],
        imageUrl: "https://via.placeholder.com/400x240?text=Image+Loading..."
    };
    
    const data = villa || defaultVilla;

    // ---------- helper for singular/plural ----------
    const pluralize = (count, singular) => `${count} ${count === 1 ? singular : singular + 's'}`;

    return (
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl w-full">

            {/* Image */}
            <div className="relative h-60 w-full md:h-64">
                <img className="w-full h-full object-cover" src={data.imageUrl} alt={data.title} />
                
                {/* Rating */}
                <div className="absolute top-3 left-3 flex items-center bg-white text-black text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-yellow-400 mr-1">★</span>{data.rating} ({data.reviewCount})
                </div>

                {/* Heart & Share */}
                <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="p-2 bg-white rounded-full text-black hover:text-red-500 hover:bg-white shadow-md transition duration-200">
                        <HeartIcon />
                    </button>
                    <button className="p-2 bg-white rounded-full text-black hover:text-teal-500 hover:bg-white shadow-md transition duration-200">
                        <ShareIcon />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{data.title}</h3>

                {/* Location */}
                <div className="flex items-center text-sm md:text-base text-gray-600 mb-3">
                    <img className="w-4 h-4 mr-1 md:w-5 md:h-5" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1761076568/Frame_11_cfkzkx.png" alt="location-icon" />
                    {data.location}
                </div>

                {/* Price */}
                <p className="text-teal-600 font-extrabold text-lg md:text-2xl mb-4">
                    From USD${data.price}/night
                </p>

                {/* Specs */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 border-y border-gray-100 py-3 mb-4 text-sm md:text-base">
                    <div className="flex items-center"><BedIcon /> {pluralize(data.beds, 'Bed')}</div>
                    <div className="flex items-center"><BathIcon /> {pluralize(data.baths, 'Bath')}</div>
                    <div className="flex items-center"><PoolIcon /> {pluralize(data.pool, 'Pool')}</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {data.amenities?.map((amenity, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs md:text-sm font-medium text-teal-700 bg-teal-50 border border-teal-300 rounded-full">
                            {amenity}
                        </span>
                    ))}
                </div>

                {/* View Details */}
                <Link to="/RentsDetails"
                    className="block text-center py-3 border-2 bg-teal-50 border-teal-500 font-extrabold text-teal-500 rounded-lg hover:bg-teal-100 transition duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default SignatureCard;
