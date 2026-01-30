import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Handshake } from "lucide-react";

interface Partner {
  name: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "NAMSA",
    description: "Clinical trial design, management, and execution",
  },
  {
    name: "Decimal Health",
    description: "Sales readiness planning and strategic partnerships",
  },
];

const StrategicPartners = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For larger-scale implementations, we collaborate with trusted partners:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon placeholder for logo */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
