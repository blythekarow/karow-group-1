import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AssessmentSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-tan relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <ClipboardCheck className="h-10 w-10 text-foreground" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Ready Is Your Product for Commercialization?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-6">
            Take the D.E.V.I.C.E. Readiness Check
          </p>
          
          {/* Body */}
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Based on the D.E.V.I.C.E. Framework, this quick assessment helps you identify 
            potential gaps across Development, Economics, Verification, Intelligence, Claims, 
            and Evidence. Get your readiness score and discover what to prioritize next.
          </p>
          
          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-lg font-semibold px-10 py-6 rounded-md shadow-lg hover:shadow-xl"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Take the Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
