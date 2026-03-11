import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import assessmentImage from "@/assets/strategy-whiteboard-team.jpg";

const ServicesAssessmentSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={assessmentImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Green overlay matching the StrategyCTABanner style */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/95 via-55% to-accent/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`max-w-2xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              How Ready Is Your Product for Commercialization?
            </h2>

            <p className="text-xl text-primary font-semibold mb-6">
              Take the D.E.V.I.C.E.™ Readiness Check
            </p>

            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-xl">
              Based on the D.E.V.I.C.E.™ Framework published in Device Files, this quick assessment helps you identify gaps and get a clear picture of what to prioritize next.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-white hover:text-accent transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
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

export default ServicesAssessmentSection;
