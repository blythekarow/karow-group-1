import { Target, Search, Puzzle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCard {
  icon: React.ElementType;
  title: string;
  body: string;
}

const benefits: BenefitCard[] = [
  {
    icon: Target,
    title: "Strategic Clarity",
    body: "See the full picture from concept to commercialization. Make confident decisions that protect your timeline and budget.",
  },
  {
    icon: Search,
    title: "Blind Spots Identified Early",
    body: "Catch expensive mistakes before they happen. Get the right specialists at the right time—not after it's too late.",
  },
  {
    icon: Puzzle,
    title: "Integrated Strategy",
    body: "Regulatory, clinical, reimbursement, and commercial—coordinated under one strategic umbrella instead of conflicting silos.",
  },
  {
    icon: Shield,
    title: "Operator Experience",
    body: "Guidance from someone who's launched products as a startup CEO and Fortune 50 leader—not junior consultants learning on your dime.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Why Companies Choose Karow Advisory
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group bg-card border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
      </div>
    </section>
  );
};

export default BenefitsSection;
