// WorksPage.jsx

const WorksPage = () => {
  // Define the steps data
  const steps = [
    {
      id: 1,
      title: "Submit Property",
      description: "Provide details, photos and calendar access.",
    },
    {
      id: 2,
      title: "We Review & Onboard",
      description: "Verification, staging, and premium listing creation.",
    },
    {
      id: 3,
      title: "Earn & Relax",
      description: "We handle bookings, guests and operations—no hassle.",
    },
  ];

  return (
    // The main container with full width
    <section className="w-full py-16 mt-10  bg-white">
      <div className=" ">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          How It Works
        </h2>

        {/* Steps Container (Flex layout for horizontal alignment) */}
        <div className="flex flex-col md:flex-row justify-center  space-y-10 md:space-y-0 md:space-x-12 lg:space-x-16">
          
          {steps.map((step) => (
            <div key={step.id} className="flex border-2 p-5 rounded-3xl flex-col items-center text-center max-w-xs mx-auto">
              
              {/* Step Number (No Line) */}
              {/* I've simplified the container and removed the -mt-10 which was used to align the line */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400 text-white font-bold flex items-center justify-center text-sm mb-4">
                {step.id}
              </div>
              
              {/* Step Title */}
              <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorksPage;