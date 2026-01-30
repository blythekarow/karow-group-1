import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Link, 
  Heart, 
  FileText, 
  Microscope, 
  Target, 
  Lightbulb 
} from "lucide-react";

interface CoverageArea {
  icon: React.ElementType;
  title: string;
  description: string;
}

const coverageAreas: CoverageArea[] = [
  {
    icon: Link,
    title: "Integration Over Silos",
    description: "How regulatory, reimbursement, and commercial strategy must align",
  },
  {
    icon: Heart,
    title: "Medical Device vs. Wellness",
    description: "Navigating the wellness carve-out for wearables",
  },
  {
    icon: FileText,
    title: "Regulatory & Reimbursement Updates",
    description: "Real-time analysis of FDA and payer changes",
  },
  {
    icon: Microscope,
    title: "Disease State Deep Dives",
    description: "Category-specific insights for targeted conditions",
  },
  {
    icon: Target,
    title: "Strategic Clarity",
    description: "Identifying blind spots before they become expensive",
  },
  {
    icon: Lightbulb,
    title: "Operator Insights",
    description: "Real lessons from 25 years bringing devices to market",
  },
];

const WhyItResonates = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why 1,500+ Leaders Read The Device Files Weekly
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coverageAreas.map((area, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItResonates;
