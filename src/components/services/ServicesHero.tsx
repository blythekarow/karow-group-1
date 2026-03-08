import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[80vh] flex pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/70 via-50% to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex items-center">
        <div className="max-w-3xl py-12">
          <div className="animate-fade-in-up flex">
            {/* Vertical accent line */}
            <div className="w-1 bg-primary mr-6 flex-shrink-0 self-stretch" />

            <div>
              {/* Label */}
              <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
                Our Services
              </p>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background leading-tight mb-6">
                Comprehensive Product & Commercialization Support for{" "}
                <span className="text-primary">Medical Device & Wearables Companies</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl">
                From product strategy to market launch, we provide the integrated expertise and
                strategic leadership that gets medical devices cleared, adopted, and paid for.
              </p>

              {/* CTA */}
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

export default ServicesHero;
