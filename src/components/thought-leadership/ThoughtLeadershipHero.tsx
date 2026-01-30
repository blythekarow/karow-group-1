import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const ThoughtLeadershipHero = () => {
  const scrollToArticles = () => {
    const element = document.getElementById("recent-articles");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-accent text-accent-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Label */}
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-6">
            Thought Leadership
          </p>
          
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The Device Files: Trusted Insights for MedTech & Wearables Leaders
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-accent-foreground/90 mb-6 font-medium">
            Engaging 1,500+ MedTech and wearables leaders weekly with strategic insights 
            on what it really takes to bring medical devices to market.
          </p>
          
          {/* Body */}
          <p className="text-lg text-accent-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            Launched on Substack in July 2024, The Device Files quickly established itself 
            as must-read content for CEOs, investors, and founders navigating commercialization challenges.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-2 border-accent-foreground bg-accent-foreground/10 text-accent-foreground hover:bg-accent-foreground/20 transition-all duration-200 text-base font-semibold px-8 py-4"
            >
              Explore Recent Articles
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipHero;
