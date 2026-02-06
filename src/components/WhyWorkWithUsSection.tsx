import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Strategic Clarity to Move Forward with Confidence",
    description: "We see the big picture from concept to commercialization and ensure you cover all the critical details along the way, so you can make decisions that protect your timeline and budget.",
  },
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
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Accent line */}
            <div className="w-12 h-1 bg-primary mb-6" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What You Get Working With Us
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              From concept to market, startups to enterprise—whether you're a single-product startup or a Fortune 50 managing a portfolio, we provide the strategic clarity and operational insights to move forward with confidence.
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Checkmark */}
                <div className="w-6 h-6 border-2 border-primary rounded flex items-center justify-center shrink-0 mt-1">
                  <svg 
                    className="w-4 h-4 text-primary" 
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
                <div className="text-base md:text-lg">
                  <span className="font-bold text-foreground">{benefit.title}</span>
                  <span className="text-muted-foreground"> — {benefit.description}</span>
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
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <Link to="/services">
                Explore a Strategic Engagement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
