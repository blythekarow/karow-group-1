import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import teamMeetingImage from "@/assets/team-collaboration-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const StrategyCTABanner = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background image on the right side */}
      <div className="absolute inset-0">
        <img
          src={teamMeetingImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: solid accent on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/95 via-55% to-accent/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build the Strategy Your Innovation Deserves
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-xl">
            You've built something powerful. Now let's build a strategy that brings it to market — smarter, faster, and without setbacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-white hover:text-accent transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/15 backdrop-blur-sm text-white border border-white/40 hover:bg-white hover:text-accent transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyCTABanner;
