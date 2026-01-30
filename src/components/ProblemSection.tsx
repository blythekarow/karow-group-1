import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import executiveStrategyImage from "@/assets/executive-strategy-whiteboard.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Every Decision Matters in MedTech—Don't Let Uncertainty Burn Money and Slow You Down
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Without a clear commercialization roadmap, you risk choosing the wrong regulatory pathway, running studies that don't support reimbursement, and missing critical investor or market access milestones.
              </p>
              <p>
                In MedTech, moving fast without integrated strategy doesn't accelerate success. It leads to stalled clearances, wasted capital, and lost competitive opportunities.
              </p>
            </div>
            
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

          {/* Right side - Image with subtle offset box */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Subtle offset decorative box - top-left, smaller */}
            <div className="absolute -top-3 -left-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={executiveStrategyImage}
                alt="Executive leading strategy session at whiteboard"
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
