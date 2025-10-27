const EstateExperience = () => {
  // Cloudinary links for the images in the provided design
  const stats = [
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815143/Frame_48095987_luvjtw.png", alt: "10+ Years Stat" },
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815180/Frame_48095988_1_iqjop1.png", alt: "100% List to Rent Ratio Stat" },
    // **Updated link and sizing to perfectly match the provided image's third stat**
    { src: "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760389542/Frame_48095990_nt2hfo.png", alt: "$1Bn+ Curated Portfolio Stat" },
  ];

  // Using a custom teal color to match the image: bg-custom-teal
  // Note: Tailwind doesn't have a built-in exact match, so I'll use a strong teal shade or a custom color class if you have one defined.
  // For this example, I'll use a deep teal (bg-teal-900) which looks closer, and adjust the spacing.
  return (
    // Adjusted background color and spacing
    <div className="bg-[#00575d] mt-20 p-5 text-white py-16 md:py-24">
      <div className="container mx-auto">
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

            {/* Stats Section: Use flex-wrap to keep it aligned like the image */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-y-8 sm:gap-x-4 lg:gap-x-8 xl:gap-x-12">
              {stats.map((stat, index) => (
                // Stat 1: Made the wrapping div a flex item with fixed sizing
                <div key={index} className="flex flex-col items-center w-full sm:w-1/3 lg:w-auto">
                  {/* The image is the entire stat container (circle) */}
                  <img
                    src={stat.src}
                    alt={stat.alt}
                    // Adjusted sizing to be slightly smaller and consistent with the visual
                    className="w-44 h-44 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Image with the special effect */}
          <div className="relative flex justify-center lg:justify-end h-[500px] lg:h-[600px] mt-12 lg:mt-0">
            {/* Background element to push the image to the right and cover the gap */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[600px] bg-[#00575d] hidden lg:block"></div>

            {/* The main image container with the overflow hidden for the circular cut-out effect */}
            <div className="relative w-[300px] h-[500px] sm:w-[350px] sm:h-[550px] lg:w-[450px] lg:h-[600px] overflow-hidden rounded-full shadow-2xl">
              {/* The two stacked images for the content */}
              <img
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png"
                alt="Luxury Villa Interior and Exterior"
                // The images are vertically stacked in the original, so we stack them here
                className="absolute top-0 left-0 w-full h-1/2 object-cover"
              />
              <img
                // Assuming a second image is needed to fill the lower half, using a placeholder/found image if not provided
                // Since the original image only shows the top image, I'll use a generic placeholder for the bottom half to demonstrate the stacking effect.
                // NOTE: The uploaded image shows a single large image that appears to be two split photos (Night view & Day view).
                // I will use your single provided image and style it to fit the container.
                src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png" 
                alt="Luxury Villa Interior and Exterior"
                className="w-full h-full object-cover object-center" // Use object-cover to make the single image fill the circular container
              />
               {/* To match the image exactly, we will use a single circular image container 
                   and the background color of the main section will peek through to create the "cutout" effect. */}
               {/* Let's try the approach from the image: A single, large cropped image with a circle mask. */}
              
              <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                      backgroundImage: `url('https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      clipPath: 'circle(50% at 50% 50%)', // Creates the circular mask
                      width: '100%',
                      height: '100%',
                      // The image in the example is actually NOT a perfect circle mask, 
                      // it's a large image set into a container that's moved to the side.
                      // Let's stick to the simpler, more accurate representation for responsive Tailwind:
                      // A large image slightly cropped by its container.
                  }}
              >
                  {/* We need to use the image itself and a container that masks it */}
                   <img
                      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760815236/Rectangle_278_ocm988.png"
                      alt="Luxury Villa Interior and Exterior"
                      // Use a div with overflow hidden and a custom clip-path to achieve the look
                      className="absolute top-0 right-0 w-full h-full object-cover"
                  />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateExperience;