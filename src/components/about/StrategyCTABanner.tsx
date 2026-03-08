import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const StrategyCTABanner = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build the Strategy Your Innovation Deserves
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
            You've built something powerful. Now let's build a strategy that brings it to market — smarter, faster, and without setbacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href="/services">
                Explore Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyCTABanner;
