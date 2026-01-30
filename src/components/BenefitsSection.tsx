import { Target, Search, Link, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import dnaImage from "@/assets/dna-research.jpg";
import researcherImage from "@/assets/researcher-pill.jpg";

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
    body: "We see the big picture from concept to commercialization and ensure you cover all the critical details along the way, so you can make decisions that protect your timeline and budget.",
  },
  {
    icon: Search,
    title: "Big Picture AND Critical Details",
    body: "We identify blind spots before they're expensive, coordinate the right specialists at the right time, and help you invest strategically for each milestone.",
  },
  {
    icon: Link,
    title: "Integrated Expertise, Not Siloed Advice",
    body: "We coordinate regulatory, reimbursement, clinical, and commercial experts together under one strategic umbrella, so their work reinforces a strong, unified strategy instead of conflicting recommendations that create more confusion.",
  },
  {
    icon: Star,
    title: "Battle-Tested Guidance from Operators",
    body: "Senior-level expertise from people who've launched products as startup CEOs and Fortune 50 product leaders, not junior consultants learning on your dime.",
  },
  {
    icon: Clock,
    title: "Right Expertise at the Right Time",
    body: "We bring in senior-level specialists when you need them, at the level you need, helping you spend lean and reach each milestone without over-investing or missing critical gaps.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with offset image */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Companies Work With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              We bring Fortune 50 experience and startup agility to every engagement.
            </p>
          </div>
          
          {/* Decorative image cluster */}
          <div
            className={`lg:col-span-5 relative hidden lg:block h-40 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="absolute top-0 right-0 w-40 h-32 rounded-lg overflow-hidden shadow-lg">
              <img
                src={dnaImage}
                alt="DNA research"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-32 w-32 h-28 rounded-lg overflow-hidden shadow-xl border-4 border-background">
              <img
                src={researcherImage}
                alt="Researcher"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute top-4 right-44 w-16 h-16 bg-primary/20 rounded-lg -z-10" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
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
