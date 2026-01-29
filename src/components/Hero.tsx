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
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cream opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content - Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              MedTech Strategy That{" "}
              <span className="text-primary">Actually Ships.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl">
              20+ years helping device and digital health companies navigate from 
              concept to commercialization—without the enterprise consulting price tag.
            </p>
            
            {/* Differentiator line */}
            <p className="text-lg text-secondary font-medium italic border-l-4 border-primary pl-4 mb-8">
              Big consulting delivers slide decks. I deliver traction.
            </p>
            
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

          {/* Right content - Image with layered effect */}
          <div className="relative lg:order-last order-first">
            {/* Offset background box */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-tan rounded-lg opacity-60" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Blythe Karow - MedTech Strategy Consultant"
                className="w-full h-auto rounded-lg shadow-2xl object-cover aspect-square"
              />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
