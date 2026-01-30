import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import newsletterMockup from "@/assets/newsletter-mockup.jpg";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const benefits = [
  "Strategic frameworks and playbooks",
  "Industry trends and analysis",
  "Lessons from 20+ years in MedTech",
];

const LeadMagnet = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Newsletter Mockup with offset box */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Offset decorative box - top-left, 25% size */}
            <div className="absolute -top-4 -left-4 w-[25%] h-[25%] bg-primary rounded-lg" />
            
            {/* Main mockup image */}
            <div className="relative z-10">
              <img
                src={newsletterMockup}
                alt="MedTech Strategy newsletter preview"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-semibold tracking-[2px] uppercase text-primary mb-4 block">
              Stay Ahead of the Curve
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MedTech Strategy Insights
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join executives getting actionable insights on product strategy, 
              regulatory navigation, and commercialization for MedTech, wearables, 
              and digital therapeutics.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Also catch Blythe on <span className="font-medium text-foreground">The Device Files</span> podcast.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                Subscribe Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
