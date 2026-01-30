import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Zap, Shield, CheckCircle, BarChart3, Link } from "lucide-react";

interface OutcomeCard {
  icon: React.ElementType;
  title: string;
  body: string;
}

const outcomes: OutcomeCard[] = [
  {
    icon: Zap,
    title: "Accelerate time-to-market",
    body: "By aligning regulatory, reimbursement, and commercial strategy from day one",
  },
  {
    icon: Shield,
    title: "Avoid costly rework and missed milestones",
    body: "By identifying blind spots before they derail your timeline or budget",
  },
  {
    icon: CheckCircle,
    title: "Make confident strategic decisions",
    body: "With battle-tested guidance on regulatory pathways and evidence planning",
  },
  {
    icon: BarChart3,
    title: "Present investor-ready plans",
    body: "That demonstrate you understand the full commercialization picture",
  },
  {
    icon: Link,
    title: "Integrate everything seamlessly",
    body: "Product design, claims, evidence, and quality systems—nothing falls through the cracks",
  },
];

const OutcomesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Right Strategy Saves You Time, Money, and Momentum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With The Karow Advisory Group, you can:
          </p>
        </div>

        {/* 3+2 layout with centered bottom row */}
        <div className="max-w-5xl mx-auto">
          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {outcomes.slice(0, 3).map((outcome, index) => (
              <Card
                key={index}
                className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bottom row - 2 cards properly centered under top row */}
          <div className="flex justify-center gap-6">
            {outcomes.slice(3).map((outcome, index) => (
              <Card
                key={index + 3}
                className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 w-full md:w-[calc(33.333%-0.5rem)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100 + 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
