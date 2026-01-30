import { Target, Link, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface BenefitCard {
  icon: React.ElementType;
  title: string;
  body: string;
}

const benefits: BenefitCard[] = [
  {
    icon: Target,
    title: "Strategic Clarity to Move Forward with Confidence",
    body: "See the full picture from concept to commercialization. Make confident decisions that protect your timeline and budget.",
  },
  {
    icon: Link,
    title: "Integrated Expertise, Not Siloed Advice",
    body: "Regulatory, clinical, reimbursement, and commercial—coordinated under one strategic umbrella, not conflicting silos.",
  },
  {
    icon: Star,
    title: "Battle-Tested Guidance from Operators",
    body: "Senior expertise from startup CEOs and Fortune 50 leaders—not junior consultants learning on your dime.",
  },
  {
    icon: Clock,
    title: "Right Expertise at the Right Time",
    body: "Specialists when you need them, at the level you need. Spend lean and hit milestones without gaps.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      {/* Subtle offset decorative boxes */}
      <div className="absolute bottom-16 left-8 w-28 h-28 border-2 border-secondary/20 rounded-lg hidden lg:block" />
      <div className="absolute top-32 right-12 w-20 h-20 bg-primary/10 rounded-lg hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Clean header - no images */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Companies Work With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring Fortune 50 experience and startup agility to every engagement.
          </p>
        </div>
        
        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`group bg-card border-none shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Let's Talk About Your Needs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
