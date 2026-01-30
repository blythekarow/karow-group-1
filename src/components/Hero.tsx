import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medtech.jpg";
import blytheHeadshot from "@/assets/blythe-headshot.png";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MedTech Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/70" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
          {/* Left side - Content */}
          <div className="animate-fade-in-up">
            {/* Accent line */}
            <div className="w-16 h-1 bg-primary mb-8" />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background leading-tight mb-6">
              Strategic Leadership that Accelerates{" "}
              <span className="text-primary">Execution</span> in MedTech, Wearables, and DTx.
            </h1>
            
            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl">
              From concept to commercialization, we provide integrated strategy and expertise for companies navigating regulated pathways.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
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
                className="border-2 border-background bg-background/10 text-background hover:bg-background/20 transition-all duration-200 text-base font-semibold px-8 py-6"
              >
                See How We Work
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Founder highlight */}
            <div className="flex items-center gap-4 pt-6 border-t border-background/20">
              <img
                src={blytheHeadshot}
                alt="Blythe Karow"
                className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-primary/50"
              />
              <div>
                <p className="text-background font-semibold">Blythe Karow</p>
                <p className="text-background/60 text-sm">Founder & Principal Advisor</p>
              </div>
            </div>
          </div>

          {/* Right side - Decorative elements */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Offset decorative boxes */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 border-2 border-primary/30 rounded-lg" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg" />
            <div className="absolute top-1/2 right-0 w-20 h-1 bg-primary/50" />
            <div className="absolute bottom-1/4 -left-8 w-16 h-16 border-2 border-background/20 rounded-full" />
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
