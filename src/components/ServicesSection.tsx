import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ServiceCard {
  label: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    label: "ESTABLISHED COMPANIES",
    title: "Executive Strategy Intensive",
    description:
      "Tackle a strategic decision point with speed and clarity. Get aligned, define the path, and move forward with a plan built for execution.",
  },
  {
    label: "GROWTH STAGE",
    title: "Strategic Consulting",
    description:
      "Hands-on support when you need expert leadership for the short term. Drive initiatives forward, align teams, and translate plans into progress.",
  },
  {
    label: "INVESTORS & M&A",
    title: "Investment & Acquisition Support",
    description:
      "Trusted insight for critical investment decisions. Due diligence, market validation, and exit prep—evaluate and act with clarity.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three engagement models tailored to your stage, team, and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group bg-card border-none shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Colored top border */}
              <div className="h-1 bg-primary" />
              
              <CardHeader className="pb-4">
                <Badge
                  variant="secondary"
                  className="w-fit text-xs font-semibold tracking-wider bg-accent/10 text-accent hover:bg-accent/20"
                >
                  {service.label}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  asChild
                  className="p-0 h-auto text-primary hover:text-secondary hover:bg-transparent font-semibold"
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground mb-4">
            Not sure which is right for you?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Let's Figure It Out Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
