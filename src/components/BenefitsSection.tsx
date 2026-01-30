import { Target, Search, Puzzle, Shield, Users } from "lucide-react";
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
    title: "Strategic Clarity",
    body: "We help you see the full picture from concept to commercialization—so you can make confident decisions that protect your timeline and budget.",
  },
  {
    icon: Search,
    title: "Blind Spots Identified Early",
    body: "Our team catches expensive mistakes before they happen. We bring in the right specialists at the right time—not after it's too late.",
  },
  {
    icon: Puzzle,
    title: "Integrated Strategy",
    body: "Regulatory, clinical, reimbursement, and commercial—coordinated under one strategic umbrella instead of conflicting silos.",
  },
  {
    icon: Users,
    title: "The Right Experts, When You Need Them",
    body: "Access senior leadership and specialized expertise without the overhead. We scale our team to match your challenge.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-cream relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Why Teams Choose Us
        </h2>
        
        <p
          className={`text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We bring Fortune 50 experience and startup agility to every engagement.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
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
        
        {/* Inline CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              See If We're a Fit
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
