import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FileCheck, DollarSign, Users } from "lucide-react";

interface CapabilityColumn {
  icon: React.ElementType;
  title: string;
  categories: {
    label: string;
    items: string[];
  }[];
}

const capabilities: CapabilityColumn[] = [
  {
    icon: FileCheck,
    title: "Regulatory Services",
    categories: [
      {
        label: "Submissions",
        items: ["Pre-Submissions (Q-Sub)", "510(k)", "De Novo"],
      },
      {
        label: "Special Programs",
        items: [
          "Breakthrough Device Designation",
          "Total Product Life Cycle Advisory Program (TAP)",
          "TEMPO Pilot Program",
        ],
      },
    ],
  },
  {
    icon: DollarSign,
    title: "Market Access Services",
    categories: [
      {
        label: "Strategic Planning",
        items: [
          "Reimbursement Landscape Analysis",
          "Full Market Access Strategic Plan",
          "Payer Strategy Development",
          "Health Economics & Outcomes",
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Clinical Services",
    categories: [
      {
        label: "Evidence & Workflow Strategy",
        items: [
          "Evidence Plan Review & Strategy",
          "Clinical Workflow Analysis",
          "Patient Journey Mapping",
          "Clinical Adoption Planning",
        ],
      },
    ],
  },
];

const SpecialtyCapabilities = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialty Deliverables Within Our Integrated Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We coordinate expert capabilities across regulatory, market access, and clinical strategy - ensuring each specialty reinforces your overall commercialization plan.
          </p>
        </div>

        {/* 3-column layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-t-4 border-t-primary transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {capability.title}
                </h3>
                
                {/* Categories */}
                <div className="space-y-4">
                  {capability.categories.map((category, catIdx) => (
                    <div key={catIdx}>
                      {category.label && (
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                          {category.label}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-primary mt-0.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyCapabilities;
