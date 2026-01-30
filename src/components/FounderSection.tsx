import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import blytheCasual from "@/assets/blythe-casual.png";
import blytheProfessional from "@/assets/blythe-professional.png";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 bg-background scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left side: Overlapping photos with quote card */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[500px] md:h-[600px]">
              {/* Chartreuse offset rectangle behind casual photo */}
              <div className="absolute top-8 left-0 w-56 md:w-72 h-72 md:h-80 bg-primary rounded-lg opacity-70" />
              
              {/* Casual photo (black turtleneck, green glass) - back/left */}
              <div className="absolute top-0 left-4 md:left-8 z-10">
                <img
                  src={blytheCasual}
                  alt="Blythe Karow - casual portrait"
                  className="w-48 md:w-64 h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
              
              {/* Professional photo (navy turtleneck, white bg) - front/right */}
              <div className="absolute top-24 md:top-32 left-48 md:left-60 z-20">
                <img
                  src={blytheProfessional}
                  alt="Blythe Karow - professional portrait"
                  className="w-52 md:w-72 h-auto rounded-lg shadow-2xl object-cover"
                />
              </div>
              
              {/* Floating quote card */}
              <div className="absolute bottom-4 md:bottom-8 left-4 right-4 md:left-0 md:right-auto md:w-80 z-30 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-lg italic font-medium leading-relaxed">
                  "Speed means nothing if you don't know where you're headed."
                </p>
                <p className="text-sm mt-3 opacity-80">— Blythe Karow</p>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-[42px] font-bold text-foreground mb-6">
              Meet Blythe Karow
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                With 25+ years of experience guiding MedTech companies from concept to market, Blythe brings a rare blend of operator expertise and strategic insight. She's launched or relaunched over 25 medical devices operating in a variety of roles from startup CEO to Fortune 50 product leader.
              </p>
              <p>
                Her superpower: navigating the technical, regulatory, and commercial hurdles while ensuring the product–and your marketing claims–actually resonate with customers who need it.
              </p>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href="/about">
                About Blythe
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
