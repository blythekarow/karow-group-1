import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const AboutHero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex pt-16 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/70 via-50% to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex items-center">
        <div className="max-w-3xl py-12">
          <div
            className={`flex transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Vertical accent line */}
            <div className="w-1 bg-primary mr-6 flex-shrink-0 self-stretch" />

            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
                About The Karow Advisory Group
              </p>

              {/* Main Headline */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-background leading-tight mb-6">
                We're Not a Large Firm.<br />
                We're the Right Firm.
              </h1>

              {/* Body Text */}
              <p className="text-base md:text-lg text-background/80 max-w-2xl leading-relaxed">
                Medical device commercialization requires more than specialists working in silos. The Karow Advisory Group brings integrated product and commercialization strategy to MedTech and wearables companies navigating the path from concept to market — led by senior operators with real-world experience, with the boutique attention and strategic coordination that large firms can't offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ChevronDown className="h-8 w-8 text-background/50" />
      </div>
    </section>
  );
};

export default AboutHero;
