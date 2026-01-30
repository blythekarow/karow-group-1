import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import womanMedtechImage from "@/assets/woman-medtech-strategy.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const painPoints = [
  "You're burning runway making decisions instead of building.",
  "Product, regulatory, and commercial plans aren't aligned.",
  "You need senior leadership but can't afford a full-time hire.",
  "The launch is coming and no one is actually managing it.",
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Offset decorative elements for visual depth */}
      <div className="absolute top-16 left-8 w-24 h-24 border-2 border-cream rounded-lg hidden lg:block" />
      <div className="absolute bottom-20 left-1/4 w-16 h-1 bg-primary/30 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Sound Familiar?
            </h2>
            
            <div className="space-y-4 mb-10">
              {painPoints.map((point, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl text-muted-foreground flex items-start gap-3"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-primary mt-1 shrink-0 text-2xl">•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-secondary font-medium italic mb-10">
              You don't need more advisors. You need a team that makes things happen.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get Strategic Clarity
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right side - Layered Image */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Subtle offset decorative box - top-left, 30% size */}
            <div className="absolute -top-4 -left-4 w-[30%] h-[30%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={womanMedtechImage}
                alt="Professional woman reviewing medical device strategy"
                className="w-full rounded-lg shadow-2xl object-cover h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
