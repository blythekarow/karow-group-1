import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import teamCollaborationImage from "@/assets/team-collaboration-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface UrgencyCalloutProps {
  variant?: "primary" | "secondary";
}

const UrgencyCallout = ({ variant = "primary" }: UrgencyCalloutProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const content = variant === "primary" ? {
    headline: "Every Decision Matters in MedTech - don't let uncertainty burn money and slow you down",
    body: [
      "Without a clear commercialization roadmap, you risk choosing the wrong regulatory pathway, running studies that don't support reimbursement, and missing critical investor or market access milestones.",
      "In MedTech, moving fast without integrated strategy doesn't accelerate success. It leads to stalled clearances, wasted capital, and lost competitive opportunities."
    ],
    cta: "Let's Build Your Strategy"
  } : {
    headline: "Don't Let Strategic Uncertainty Burn Capital and Momentum",
    body: [
      "Medical device companies don't fail from lack of innovation—they stall from lack of clear direction. Without integrated commercialization strategy, you risk choosing wrong pathways, misaligning evidence with reimbursement, and missing investor milestones. There's a better way."
    ],
    cta: "Explore a Strategic Engagement"
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {content.headline}
            </h2>
            
            <div className="space-y-4 mb-8">
              {content.body.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-white hover:text-accent transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {content.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Empty right side for visual balance with background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default UrgencyCallout;
