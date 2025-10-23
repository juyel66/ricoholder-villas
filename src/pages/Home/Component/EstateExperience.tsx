const EstateExperience = () => {
  return (
    <div className="bg-teal-800 mt-20 p-5 text-white py-16 md:py-24">
      <div className="container mx-auto  ">
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
  <div className="flex flex-col items-center text-center w-full sm:w-1/3">
    <div className="flex flex-col items-center text-center w-full">
      <img
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815143/Frame_48095987_luvjtw.png"
        alt=""
        className="w-48 h-48 object-contain sm:w-56 sm:h-56 md:w-64 md:h-64"
      />
    </div>
  </div>

  {/* Stat 2 */}
  <div className="flex flex-col items-center text-center w-full sm:w-1/3">
    <div className="flex flex-col items-center text-center w-full">
      <img
        src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815180/Frame_48095988_1_iqjop1.png"
        alt=""
        className="w-48 h-48 object-contain sm:w-56 sm:h-56 md:w-64 md:h-64"
      />
    </div>
  </div>

  {/* Stat 3 */}
  <div className="flex flex-col items-center text-center w-full sm:w-1/3">
    <img
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760389542/Frame_48095990_nt2hfo.png"
      alt=""
      className="w-48 h-48 object-contain sm:w-56 sm:h-56 md:w-64 md:h-64"
    />
  </div>
</div>

          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="flex mx-auto">
            <img
              src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png"
              alt="Estate"
              className=" l"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateExperience;
