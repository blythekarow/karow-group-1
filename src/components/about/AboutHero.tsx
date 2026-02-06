import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-building.jpg";

const AboutHero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subheadline / Eyebrow */}
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
            About The Karow Advisory Group
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Where Strategy Meets Execution in{" "}
            <span className="text-primary">MedTech, Wearables, & DTx.</span>
          </h1>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            From concept to commercialization, strategic advisory for the teams shaping what's next in MedTech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
