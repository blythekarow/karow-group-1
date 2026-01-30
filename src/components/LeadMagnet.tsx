import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const LeadMagnet = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            MedTech Strategy Insights
          </h2>
          
          <p className="text-lg text-accent-foreground/80 mb-8">
            Join executives getting insights on product strategy, regulatory navigation, 
            and commercialization for MedTech, wearables, and digital therapeutics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
            >
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                Subscribe to the Newsletter
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 transition-all duration-200 text-base font-semibold px-8 py-6"
            >
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                Read Recent Issues
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
