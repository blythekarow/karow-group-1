import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategic Clarity",
    description: "Cut through complexity with frameworks that align your team and accelerate decisions.",
  },
  {
    icon: Zap,
    title: "Execution Speed",
    description: "Move from strategy to action faster with hands-on leadership that drives results.",
  },
  {
    icon: Users,
    title: "Deep Expertise",
    description: "20+ years navigating MedTech, wearables, and DTx—from startup to Fortune 50.",
  },
  {
    icon: TrendingUp,
    title: "Proven Outcomes",
    description: "Track record of successful launches, raises, and exits across the industry.",
  },
];

const WhyWorkWithUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
            The Difference
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Companies Work With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Big consulting delivers slide decks. We deliver traction.
          </p>
        </div>

        {/* Reasons Grid - Asymmetric Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isLarge = index === 0 || index === 3;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-cream rounded-xl p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${isLarge ? "md:row-span-1" : ""}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Big Picture & Critical Details - Placeholder for content */}
          <div
            className={`mt-12 grid md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-accent text-accent-foreground rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                Big Picture
              </h3>
              <p className="text-accent-foreground/80 leading-relaxed">
                {/* Content to be added */}
                We see the full landscape—market dynamics, competitive positioning, regulatory pathways, and commercial realities—to help you make decisions that compound over time.
              </p>
            </div>
            
            <div className="bg-secondary text-secondary-foreground rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                Critical Details
              </h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                {/* Content to be added */}
                The devil is in the details. We dig into the specifics—clinical evidence requirements, reimbursement nuances, go-to-market timing—that make or break your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
