import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Hero = () => {
  const scrollToProcess = () => {
    const element = document.getElementById("process");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex pt-16 overflow-hidden">
      {/* Background image with overlay - left 50% dark for text */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MedTech Innovation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/70 via-50% to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex items-center">
        <div className="max-w-3xl py-12">
          {/* Left side - Content with vertical accent line */}
          <div className="animate-fade-in-up flex">
            {/* Vertical accent line */}
            <div className="w-1 bg-primary mr-6 flex-shrink-0 self-stretch" />
            
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background leading-tight mb-6">
                Strategic Leadership that{" "}
                <span className="text-primary">Accelerates Execution</span> in MedTech, Wearables, and DTx
              </h1>
              
              <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl">
                From concept to commercialization, we provide integrated strategy and expertise for companies navigating regulated pathways.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToProcess}
                  className="border-2 border-background bg-background/10 text-background hover:bg-background/20 transition-all duration-200 text-base font-semibold px-8 py-4"
                >
                  See How We Work
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ChevronDown className="h-8 w-8 text-background/50" />
      </div>
    </section>
  );
};

export default Hero;
