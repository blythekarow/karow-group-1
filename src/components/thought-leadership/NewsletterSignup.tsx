import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, ArrowRight } from "lucide-react";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const NewsletterSignup = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Never Miss an Insight
          </h2>
          
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Join 1,500+ MedTech leaders getting weekly insights on product strategy, 
            regulatory navigation, and commercialization.
          </p>
          
          {/* CTA - Links to Substack for signup */}
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-lg font-semibold px-10 py-6 rounded-md shadow-lg hover:shadow-xl"
          >
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              Subscribe to The Device Files
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <p className="text-sm text-accent-foreground/60 mt-4">
            Free. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
