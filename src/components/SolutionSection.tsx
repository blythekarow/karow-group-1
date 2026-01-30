import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import scientistLabImage from "@/assets/scientist-lab.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Image with subtle offset box */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Subtle offset decorative box - top-left, smaller */}
            <div className="absolute -top-3 -left-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={scientistLabImage}
                alt="Strategic advisor in professional setting"
                className="w-full rounded-lg shadow-2xl object-cover h-[450px]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategic Leadership Grounded in Real-World Experience
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <span className="font-semibold text-foreground">The Karow Advisory Group</span> is led by Blythe Karow, a strategic advisor with 20+ years navigating the MedTech and wearables landscape—from startup CEO to Fortune 50 product leader.
              </p>
              <p>
                We don't just advise—we've done it. From launching products to scaling portfolios to guiding exits, we bring hands-on expertise in product strategy, regulatory pathways, commercialization planning, and go-to-market execution.
              </p>
              <p>
                Our approach is simple: Get aligned on what matters, cut through complexity, and make the right things happen—fast.
              </p>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Work With Blythe
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
