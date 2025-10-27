import React from "react";

const HERO_BACKGROUND_IMAGE =
  "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760205040/Properties_Container_3_etpnse.png";
const BUTTON_ICON_URL =
  "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760205396/Vector_2_xyjwdm.png";

interface Props {
  onSubmitClick?: () => void;
}

const ListWithUsBannerPage: React.FC<Props> = ({ onSubmitClick }) => {
  const benefits = ["Zero Setup Fees", "24/7 Support", "Global Marketing"];

  const backgroundStyle = {
    backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
  };

  return (
    <section
      className="relative w-full h-[420px] sm:h-[500px] md:h-[580px] lg:h-[620px] xl:h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-none md:rounded-[30px] shadow-none md:shadow-2xl transition-all duration-300"
      style={backgroundStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 sm:px-8 md:px-14 lg:px-20 xl:px-28 container mx-auto text-white h-full flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 leading-tight">
          List Your Villa With <br className="hidden sm:block" /> Eastmond Villas
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light mb-8 opacity-95 max-w-3xl">
          Turn your property into a profitable investment while offering
          unforgettable luxury experiences.
        </p>

        {/* Button */}
        <button
          onClick={onSubmitClick}
          id="submitProperty"
          className="inline-flex items-center px-5 sm:px-7 md:px-8 lg:px-9 py-2.5 sm:py-3 md:py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-xl transition duration-300 w-fit focus:outline-none focus:ring-4 focus:ring-teal-500/50"
        >
          <img
            className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5"
            src={BUTTON_ICON_URL}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'/></svg>";
            }}
            alt="Upload icon"
          />
          Submit Your Property
        </button>

        {/* Benefits */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm md:text-base lg:text-lg opacity-80 font-medium flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
          {benefits.map((benefit, index) => (
            <React.Fragment key={benefit}>
              <span
                className={`${
                  index < benefits.length - 1 ? "sm:mr-3 md:mr-4" : ""
                }`}
              >
                {benefit}
              </span>
              {index < benefits.length - 1 && (
                <span className="hidden sm:inline mx-2 md:mx-3 opacity-70">
                  &bull;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListWithUsBannerPage;
