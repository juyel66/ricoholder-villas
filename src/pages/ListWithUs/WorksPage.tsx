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
    <section className="w-full py-16 mt-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          How It Works
        </h2>

        {/* Steps Container (Flex layout for horizontal alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 border-2 rounded-3xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="w-12 h-12 rounded-full bg-cyan-400 text-white font-bold flex items-center justify-center text-sm mb-4">
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