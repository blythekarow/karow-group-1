import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const ThoughtLeadershipHero = () => {
  const scrollToArticles = () => {
    const element = document.getElementById("recent-articles");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                Thought Leadership
              </p>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background leading-tight mb-6">
                The Device Files: Trusted Insights for{" "}
                <span className="text-primary">MedTech & Wearables Leaders</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl">
                Engaging 1,500+ MedTech and wearables leaders weekly with strategic insights
                on what it really takes to bring medical devices to market.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
                >
                  <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                    Subscribe to The Device Files
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToArticles}
                  className="border-2 border-background bg-background/10 text-background hover:bg-background/20 transition-all duration-200 text-base font-semibold px-8 py-4"
                >
                  Explore Recent Articles
                  <ArrowDown className="ml-2 h-5 w-5" />
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

export default ThoughtLeadershipHero;
