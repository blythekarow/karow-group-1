import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import blytheWhiteBlazer from "@/assets/blythe-white-blazer.png";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Finding the Right Partner Makes All the Difference
            </h2>
            
            <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
              Meet The Karow Advisory Group
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                We help medical device and wearables companies navigate commercialization with integrated strategy from day one - so regulatory, reimbursement, and commercial plans don't just coexist, they reinforce each other.
              </p>
              <p>
                Led by Blythe Karow - startup CEO, Fortune 50 product leader, and management consultant - we guide companies from concept to market launch, helping you identify what needs attention now versus later, invest strategically at each milestone, and avoid the blind spots that create expensive problems down the road.
              </p>
              <p>
                Whether you're a Fortune 500 managing a portfolio or a single-product startup, we bring clarity that comes from having been there before.
              </p>
              <p className="font-medium text-foreground">
                Boutique scale, big-firm expertise, without the overhead.
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

          {/* Right side - Image with bold offset block */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Bold background block — extends above and to the left */}
            <div className="absolute -top-8 -left-8 w-[55%] h-[50%] bg-secondary" />
            {/* Main image */}
            <div className="relative z-10 ml-8">
              <img
                src={blytheWhiteBlazer}
                alt="Blythe Karow - Strategic Advisor"
                className="w-full shadow-2xl object-cover h-[550px] object-top"
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden relative">
            <div className="absolute -top-4 -left-4 w-[40%] h-[30%] bg-accent" />
            <img
              src={blytheWhiteBlazer}
              alt="Blythe Karow - Strategic Advisor"
              className="w-full shadow-xl object-cover aspect-[3/4] object-top relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
