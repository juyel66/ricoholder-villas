import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

/**
 * HeroSection
 * - Shadcn + Tailwind (TSX)
 * - Drop into any React/Vite project with Tailwind v3/v4
 * - Uses an image background with a dark overlay, rounded corners, and centered copy
 *
 * Usage:
 * <HeroSection
 * title="Property Management, Perfected"
 * subtitle="Emphasize luxury villas as assets, sanctuaries, reflections of taste."
 * ctaLabel="Contact Our Team"
 * onCtaClick={() => console.log("CTA clicked")}
 * imageUrl="/assets/managementHeroSection.jpg"
 * />
 */

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  imageUrl: string; // public path or imported asset
  className?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaLabel = "Get Started",
  onCtaClick,
  imageUrl,
  className,
}) => {
  return (
    <section
      className={[
        "relative w-full flex justify-center items-center",
        // height scales by breakpoint; adjust to taste
        "min-h-[340px] md:min-h-[440px] lg:min-h-[520px]",
        // rounded container look
        "overflow-hidden rounded-3xl",
        className ?? "",
      ].join(" ")}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label="Luxury modern villa with pool"
      />

      {/* Subtle dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content container */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white  md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base text-white/85 md:mt-4 md:text-xl">
            {subtitle}
          </p>
        ) : null}

        {ctaLabel ? (
          <div className="mt-6">
            <Link to="/contact">
            <Button
              size="lg"
              className="rounded-xl h-15 px-6 py-5 font-semibold shadow-lg bg-[#009689] hover:bg-[#007f7a] text-white text-lg"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </Button>
            </Link>

          </div>
        ) : null}
      </div>

      {/* Decorative vignette to match reference look */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
