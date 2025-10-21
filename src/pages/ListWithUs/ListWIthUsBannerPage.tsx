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
      className="relative w-full h-[500px] md:h-[600px] xl:h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-none md:rounded-[30px] shadow-none md:shadow-2xl transition-all duration-300"
      style={backgroundStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 p-10 lg:p-0 container mx-auto text-white h-full flex flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
          List Your Villa With <br /> Eastmond Villas
        </h1>

        <p className="text-xl sm:text-2xl font-light mb-10 opacity-95">
          Turn your property into a profitable investment while offering
          unforgettable luxury experiences.
        </p>

        <button
          onClick={onSubmitClick}
          id="submitProperty"
          className="inline-flex items-center px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white text-base lg:text-lg font-semibold rounded-lg shadow-xl transition duration-300 w-fit focus:outline-none focus:ring-4 focus:ring-teal-500/50"
        >
          <img
            className="mr-3 h-4 w-4"
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

        <div className="mt-12 text-lg sm:text-xl opacity-80 font-medium flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
          {benefits.map((benefit, index) => (
            <React.Fragment key={benefit}>
              <span
                className={`${
                  index < benefits.length - 1 ? "sm:mr-4" : ""
                }`}
              >
                {benefit}
              </span>
              {index < benefits.length - 1 && (
                <span className="hidden sm:inline mx-4 opacity-70">
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
