import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import teamCollaborationImage from "@/assets/team-collaboration-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const SimpleCTAPanel = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={teamCollaborationImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Your Strategy Starts with One Conversation
          </h2>
          
          <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We'll help you identify what needs attention now, build an integrated plan, 
            and move forward with confidence.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-white hover:text-accent transition-all duration-200 text-lg font-semibold px-10 py-6 rounded-md"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Explore a Strategic Engagement
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTAPanel;
