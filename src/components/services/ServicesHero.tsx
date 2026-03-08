import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-accent text-accent-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Label */}
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-6">
            Our Services
          </p>
          
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Comprehensive Product & Commercialization Support for Medical Device & Wearables Companies
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-accent-foreground/90 mb-6 font-medium">
            From product strategy to market launch, we provide the integrated expertise and 
            strategic leadership that gets medical devices cleared, adopted, and paid for.
          </p>
          
          {/* Body */}
          <p className="text-lg text-accent-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            We provide product & commercialization guidance from concept to market launch. 
            That means understanding how product design, marketing claims, regulatory strategy, 
            reimbursement requirements, clinical evidence, quality systems, and commercial 
            execution need to align - and coordinating the right specialists to make it happen. 
            We help you identify what needs attention now versus later, invest strategically 
            to reach each milestone, and avoid the blind spots that create expensive problems 
            down the road.
          </p>
          
          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Discuss Your Strategic Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
