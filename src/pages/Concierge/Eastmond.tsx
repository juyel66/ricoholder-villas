
const LuxuryFeatureCard = ({ imageUrl, brandName, tagline, description }) => {
  return (
    <div className=" bg-white shadow-xl rounded-xl overflow-hidden my-10">
      {/* 1. Image Section - Full Width */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        {/* Replace this with an actual image tag and source */}
        {/* For a direct visual match, you'd need the exact image */}
        <img
          src={imageUrl} 
          alt={`${brandName} interior`}
          className="w-full h-full object-cover"
        />
        
        {/* Optional: Dark gradient overlay for text readability (if text was on image) */}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
      </div>

      {/* 2. Content Card Section */}
      <div className="p-6 md:p-8 border-t">
        {/* Header - Icon, Brand Name, and Tagline */}
        <div className="flex items-center mb-4">
          {/* Icon (Simulated green crown/logo icon) */}
          <div className="w-6 h-6 mr-3 flex items-center justify-center bg-green-700 rounded-md">
            {/* Crown/Logo Icon - Using a simple SVG or a library icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-white" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 2a1 1 0 011 1v1h2a1 1 0 011 1v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1h-1a1 1 0 01-1 1h-2a1 1 0 01-1-1h-2a1 1 0 01-1-1h-1v-1H5a1 1 0 01-1-1V7a1 1 0 011-1h1V5a1 1 0 011-1h2V3a1 1 0 011-1z" 
                clipRule="evenodd" 
              />
              <path 
                d="M10 16a6 6 0 100-12 6 6 0 000 12z" 
                opacity="0.2"
              />
            </svg>
          </div>
          
          <div>
            <p className="text-gray-900 font-semibold text-lg leading-none">{brandName}</p>
            <p className="text-gray-500 text-sm">{tagline}</p>
          </div>
        </div>

        {/* Description Text - Large, Bold, and Impactful */}
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug pt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

// Example Usage (in your main App.js or page component)
const App = () => {
  const exampleData = {
    imageUrl: 'https://res.cloudinary.com/dqkczdjjs/image/upload/v1760215120/bannnnner_jrc9uz.png', // **Replace with your image path**
    brandName: 'Eastmond as a Standard',
    tagline: 'The Curatorium of Distinction',
    description: 'True luxury anticipates your needs before they arise'
  };

  return (
    <div className=" ">
      {/* Centering the card for presentation */}
      <LuxuryFeatureCard 
        imageUrl={exampleData.imageUrl}
        brandName={exampleData.brandName}
        tagline={exampleData.tagline}
        description={exampleData.description}
      />
    </div>
  );
};

export default App;