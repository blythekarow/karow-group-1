import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blythe-hero.png";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex pt-16">
      {/* Split layout container */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side - Image (like her current site) */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto relative order-1 lg:order-1">
          <img
            src={heroImage}
            alt="Blythe Karow - MedTech Strategy Consultant"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/10 hidden lg:block" />
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 flex items-center bg-background order-2 lg:order-2">
          <div className="px-6 py-12 lg:px-12 xl:px-20 w-full animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              MedTech Strategy That{" "}
              <span className="text-primary">Actually Ships.</span>
            </h1>
            
            {/* Horizontal line accent like her current site */}
            <div className="w-full h-px bg-border mb-6" />
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl">
              20+ years helping device and digital health companies navigate from 
              concept to commercialization—without the enterprise consulting price tag.
            </p>
            
            {/* Differentiator line */}
            <p className="text-lg text-secondary font-medium italic border-l-4 border-primary pl-4 mb-8">
              Big consulting delivers slide decks. I deliver traction.
            </p>
            
            {/* Horizontal line accent */}
            <div className="w-full h-px bg-border mb-8" />
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Schedule a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
              >
                See How We Work
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
