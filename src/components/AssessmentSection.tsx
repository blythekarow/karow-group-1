import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import newsletterMockupImage from "@/assets/newsletter-mockup.jpg";

const AssessmentSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Image with offset rectangle */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Offset decorative box */}
            <div className="absolute -top-3 -left-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            
            {/* Main image (laptop mockup) */}
            <div className="relative z-10">
              <img
                src={newsletterMockupImage}
                alt="D.E.V.I.C.E. Assessment on laptop"
                className="w-full rounded-lg shadow-2xl object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Ready Is Your Product for Commercialization?
            </h2>
            
            <p className="text-xl text-primary font-semibold mb-6">
              Take the D.E.V.I.C.E.™ Readiness Check
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Based on the D.E.V.I.C.E. Framework published in Device Files, this quick assessment helps you identify potential gaps across Development, Engagement & Economics, Verification & Validation, Intelligence & Information Governance, Claims & Category Boundaries, and Evidence. Get your readiness score and discover what to prioritize next.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <Link to="/assessment">
                Take the Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
