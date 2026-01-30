import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Small chartreuse bar */}
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-lg md:text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can bring strategic clarity to your MedTech journey. 
            Book a discovery call and take the first step toward execution.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-lg font-semibold px-10 py-6 rounded-md shadow-lg hover:shadow-xl"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Schedule Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
