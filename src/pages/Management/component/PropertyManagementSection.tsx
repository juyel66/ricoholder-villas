import FeatureSection from "./FeatureSection";

const PropertyManagementSection = () => {
  return (
    <div>
      <section>
        <h1 className="text-4xl font-bold  my-8">
          Why Choose Eastmond Villas for Your Luxury <br /> Property Management?
        </h1>
        <p className="text-xl text-[#475569]  ">
          Partnering with Eastmond Villas gives your property premium exposure,
          professional management <br /> and a performance-based partnership.
        </p>
      </section>
      <section>
        <FeatureSection
          title="Tailored, White-Glove Service"
          description="Every villa is distinct, tailored to your needs. Our management plans align with your vision—be it a private getaway, luxury rental, or both."
          bullets={[
            "Tailored, White-Glove Service",
            "Elite Maintenance & Upkeep",
            "Experience the Eastmond Villas Difference",
            "Exclusive Owner Benefits",
          ]}
          imageUrl="/images/managementFeatureImage1.png"
          imageAlt="Poolside dining at sunset"
          imageSide="right" // flip to 'left' for the second layout
          onCtaClick={() => {
            /* open dialog / route to contact */
          }}
        />
        <FeatureSection
          title="Premium Rental Management"
          description="For owners who wish to generate income, our elite rental management program maximizes occupancy and revenue while safeguarding your asset. We handle:"
          bullets={[
            " Luxury Marketing & Branding - High-end photography, bespoke listings, and exclusive platform placements.",
            "Guest Vetting & Seamless Stays - Discerning clientele, 24/7 concierge, and impeccable service standards.",
            "Dynamic Pricing Strategy - Data-driven adjustments to ensure optimal returns.",
          ]}
          imageUrl="/images/managementFeatureImage2.png"
          imageAlt="Premium Rental Management"
          imageSide="left" // flip to 'left' for the second layout
          onCtaClick={() => {
            /* open dialog / route to contact */
          }}
        />
        <FeatureSection
          title="Financial Transparency & Performance"
          description="You deserve clarity and control over your investment. Our detailed financial reporting includes:"
          bullets={[
            " Monthly statements with full expenditure breakdowns.",
            "Competitive vendor pricing through preferred partnerships.",
            "Optimized revenue strategies for rental properties.",
          ]}
          imageUrl="/images/managementFeatureImage3.png"
          imageAlt="Premium Rental Management"
          imageSide="right" // flip to 'left' for the second layout
          onCtaClick={() => {
            /* open dialog / route to contact */
          }}
        />
        <FeatureSection
          title="Security & Peace of Mind"
          description="Your safety and privacy are paramount. We implement:"
          bullets={[
            " Smart home technology integration (surveillance, access control, alarm systems).",
            "Regular security audits to mitigate risks.",
            "Discreet, professional oversight to ensure your villa remains undisturbed when vacant.",
          ]}
          imageUrl="/images/managementFeatureImage4.png"
          imageAlt="Security & Peace of Mind"
          imageSide="left" // flip to 'left' for the second layout
          onCtaClick={() => {
            /* open dialog / route to contact */
          }}
        />
        <FeatureSection
          title="Exclusive Owner Benefits"
          description="As part of the Eastmond Villas family, you gain access to:"
          bullets={[
            " Priority partnerships with luxury service providers (interior designers, chefs, chauffeurs).",
            "Dedicated account management - a single point of contact for all needs.",
            "Invitations to exclusive owner events and networking opportunities.",
          ]}
          imageUrl="/images/managementFeatureImage5.png"
          imageAlt="Exclusive Owner Benefits"
          imageSide="right" // flip to 'left' for the second layout
          onCtaClick={() => {
            /* open dialog / route to contact */
          }}
        />
      </section>
    </div>
  );
};

export default PropertyManagementSection;
