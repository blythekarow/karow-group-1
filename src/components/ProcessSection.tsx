import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ProcessStep {
  number: string;
  subheadline: string;
  body: string;
}

const steps: ProcessStep[] = [
  {
    number: "1",
    subheadline: "Know Where You Stand",
    body: "We assess your product commercialization readiness across regulatory pathway, reimbursement landscape, and commercial risks. You get a clear picture of what's working, what's at risk, and what decisions need to happen next.",
  },
  {
    number: "2",
    subheadline: "Build Your Integrated Roadmap",
    body: "We develop an integrated product commercialization plan tailored to your specific goals. Everything from regulatory and reimbursement to evidence plans—we integrate the missing pieces so everything strategically aligns.",
  },
  {
    number: "3",
    subheadline: "Move Forward with Confidence",
    body: "We execute alongside you. Whether leading submissions, coordinating specialists, or providing fractional leadership, we keep your commercialization on track.",
  },
];

const stepLabels = ["CLARITY", "STRATEGY", "EXECUTION"];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How We Work Together: A Clear Path Forward
          </h2>
          
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Step label */}
                <p className="text-xs font-semibold tracking-[2px] text-muted-foreground mb-4">
                  {stepLabels[index]}
                </p>
                
                {/* Large number */}
                <div className="text-7xl font-extrabold text-primary mb-4">
                  {step.number}
                </div>
                
                {/* Subheadline */}
                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                  {step.subheadline}
                </h3>
                
                {/* Body text */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
