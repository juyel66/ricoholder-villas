import HeroSection from "./component/HeroSection";
import PropertyManagementSection from "./component/PropertyManagementSection";

const Management = () => {
  return (
    <div
    
    >
      <HeroSection className="mt-26"
        title="Property Management, Perfected"
        subtitle="Emphasize luxury villas as assets, sanctuaries, reflections of taste."
        ctaLabel="Contact Our Team"
        onCtaClick={() => {
          /* route to contact, open modal, etc. */
        }}
        imageUrl="/images/managementHeroSection.png" // place your image in /public/assets
      />
    <PropertyManagementSection/>

    </div>
  );
};

export default Management;
