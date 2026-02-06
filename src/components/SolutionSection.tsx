import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import blytheProfessional from "@/assets/blythe-professional.png";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              You Need Strategic Clarity to Move Forward with Confidence
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <span className="font-semibold text-foreground">The Karow Advisory Group</span> helps medical device and wearables companies navigate commercialization with integrated strategy from day one, so product commercial, regulatory, and reimbursement plans don't just coexist, they reinforce each other.
              </p>
              <p>
                <span className="font-semibold text-foreground">Our approach:</span> We provide product & commercialization guidance from concept to market launch. That means understanding how product design, marketing claims, regulatory strategy, reimbursement requirements, clinical evidence, quality systems, and commercial execution need to align and coordinating the right specialists to make it happen. We help you identify what needs attention now versus later, invest strategically to reach each milestone, and avoid the blind spots that create expensive problems down the road.
              </p>
              <p>
                Led by Blythe Karow, who's brought products to market as a startup CEO, management consultant, and Fortune 50 strategist and product leader, our team knows what it takes because we've done it. Not as academics with frameworks, but as operators who've launched products, navigated FDA, and built commercialization strategies that actually work in the real world.
              </p>
              <p>
                We see the big picture and ensure you cover all the details. From concept to product launch, whether you're a Fortune 50 managing a product portfolio or a single-product startup, we provide the strategic clarity and operational insights that come from having been there before.
              </p>
              <p className="font-medium text-foreground">
                What makes us different: We're not a large firm that pitches you senior partners then hands you off to junior analysts. Every engagement is led by senior-level experts who've been in the trenches. Boutique scale, big-firm expertise, without the overhead.
              </p>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <Link to="/about">
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right side - Image with subtle offset box */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Subtle offset decorative box - top-right */}
            <div className="absolute -top-3 -right-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={blytheProfessional}
                alt="Blythe Karow - Strategic Advisor"
                className="w-full rounded-lg shadow-2xl object-cover h-[550px] object-top"
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden relative">
            <div className="absolute -top-3 -right-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            <img
              src={blytheProfessional}
              alt="Blythe Karow - Strategic Advisor"
              className="w-full rounded-lg shadow-xl object-cover aspect-[3/4] object-top relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
