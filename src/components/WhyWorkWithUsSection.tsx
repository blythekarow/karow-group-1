import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Big Picture AND Critical Details",
    description: "We identify blind spots before they're expensive, coordinate the right specialists at the right time, and help you invest strategically for each milestone.",
  },
  {
    title: "Integrated Expertise, Not Siloed Advice",
    description: "We coordinate regulatory, reimbursement, clinical, and commercial experts together under one strategic umbrella, so their work reinforces a strong, unified strategy instead of conflicting recommendations that create more confusion.",
  },
  {
    title: "Battle-Tested Guidance from Operators",
    description: "Senior-level expertise from people who've launched products as startup CEOs and Fortune 50 product leaders, not junior consultants learning on your dime.",
  },
  {
    title: "Right Expertise at the Right Time",
    description: "We bring in senior-level specialists when you need them, at the level you need, helping you spend lean and reach each milestone without over-investing or missing critical gaps.",
  },
];

const WhyWorkWithUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What You Get Working With Us
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
              From concept to market, startups to Fortune 50, we provide the strategic clarity and operational insights to move forward with confidence.
            </p>
          </div>

          {/* Benefits list - single column */}
          <div className="grid grid-cols-1 gap-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 80 + 200}ms` }}
              >
                <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center shrink-0 mt-0.5">
                  <svg 
                    className="w-3 h-3 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-sm md:text-base">
                  <span className="font-bold text-foreground">{benefit.title}</span>
                  <span className="text-muted-foreground"> - {benefit.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-sm font-semibold px-6 py-3 rounded-md"
            >
              <Link to="/services">
                Explore a Strategic Engagement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
