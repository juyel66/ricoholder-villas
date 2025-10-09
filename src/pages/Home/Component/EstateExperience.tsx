const EstateExperience = () => {
  return (
    <div className="bg-teal-800 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Text Content & Stats */}
          <div className="lg:pr-12">
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight mb-8">
              Where Estate Expertise Meets Aesthetic Excellence
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Eastmond Villas, a multi-award-winning luxury real estate and villa
              rental service in Barbados, epitomizes excellence in elevated living.
              With a focus on timeless beauty and personalized client experiences,
              we craft tailored residences and premium vacation properties for those
              who seek the exceptional. Our portfolio showcases our signature approach:
              understated luxury, flawlessly executed.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center">
               <div className="flex flex-col items-center text-center">
                <img src="/public/images/tenpercent.png" alt="" />
              </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center text-center">
                <img src="/public/images/Frame 48095988.png" alt="" />
              </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center">
                <img  src="/public/images/Frame 48095990.png" alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="flex justify-end">
            <img
              src="/images/estateImage.png"
              alt="Estate"
              className="w-full max-w-md rounded-lg  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateExperience;
