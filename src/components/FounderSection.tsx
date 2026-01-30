import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import founderImage from "@/assets/blythe-headshot.png";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const credentials = [
  "20+ Years MedTech Experience",
  "Former Startup CEO",
  "Fortune 50 Product Leadership",
  "Wearables & Digital Therapeutics Expert",
];

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 bg-background scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image with layered effect */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Offset background box */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-tan rounded-lg opacity-60" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Blythe Karow - Founder & Principal"
                className="w-full h-auto rounded-lg shadow-2xl object-cover max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Text content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
              Leadership
            </p>
            
            <h2 className="text-4xl md:text-[42px] font-bold text-foreground mb-6">
              Meet Blythe Karow
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                <span className="font-semibold text-foreground">The Karow Advisory Group</span> is led by Blythe Karow, a strategic advisor with 20+ years of MedTech and wearables experience. From startup CEO to Fortune 50 product leader, Blythe brings hands-on expertise in product strategy, commercialization, regulatory navigation, and go-to-market execution.
              </p>
            </div>
            
            {/* Personal quote */}
            <p className="text-lg italic text-secondary border-l-4 border-primary pl-4 mb-8">
              "I'm not here to advise from the sidelines. I'm here to make things happen."
            </p>
            
            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((credential, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-cream text-secondary font-medium border border-tan"
                >
                  {credential}
                </Badge>
              ))}
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Work With Blythe
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
