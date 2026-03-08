import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import executiveBoardroomImage from "@/assets/executive-boardroom.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const painPoints = [
  "When long-term strategy needs sharper definition and operational alignment",
  "When they're burning time making decisions instead of building",
  "When product, market, and regulatory plans aren't aligned",
  "When they need someone to lead but can't afford to hire full-time",
  "When the launch is coming and no one is actually managing it",
  "When messaging isn't landing and the pipeline is slowing down",
];

const WhenLeadersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            When Leaders Reach Out to Us
          </h2>

          {/* Bullet list */}
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => (
              <p
                key={index}
                className={`text-lg text-muted-foreground flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <span className="text-primary mt-0.5 shrink-0">•</span>
                <span>{point}</span>
              </p>
            ))}
          </div>

          {/* Closing */}
          <p
            className={`text-xl md:text-2xl text-foreground font-medium italic text-center mb-10 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            If that sounds like your team, let's talk.
          </p>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Schedule Your Strategic Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenLeadersSection;
