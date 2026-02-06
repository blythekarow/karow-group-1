import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import medtechStrategyImage from "@/assets/medtech-strategy-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={medtechStrategyImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
            High-Commitment Path
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Commercialization Strategy?
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's assess where you are, identify what's at risk, and build an integrated plan that gets you from FDA clearance to market adoption without expensive rework or lost time.
          </p>
          
          {/* Single CTA */}
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-lg font-semibold px-10 py-6 rounded-md shadow-lg hover:shadow-xl"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Discuss Engagement Options
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
