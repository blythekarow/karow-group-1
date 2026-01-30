import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Zap, TrendingUp, BarChart3 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ServiceCard {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  outcomes: string[];
}

const services: ServiceCard[] = [
  {
    icon: Zap,
    label: "ESTABLISHED COMPANIES",
    title: "Executive Strategy Intensive",
    description:
      "Tackle a strategic decision point with speed and clarity. We get your team aligned, define the path forward, and deliver an actionable plan built for execution.",
    outcomes: ["Strategic alignment", "Clear roadmap", "Faster decisions"],
  },
  {
    icon: TrendingUp,
    label: "GROWTH STAGE",
    title: "Strategic Consulting",
    description:
      "Hands-on support when you need expert leadership for the short term. We drive initiatives forward, align teams, and translate plans into measurable progress.",
    outcomes: ["Embedded expertise", "Team alignment", "Execution support"],
  },
  {
    icon: BarChart3,
    label: "INVESTORS & M&A",
    title: "Investment & Acquisition Support",
    description:
      "Trusted insight for critical investment decisions. Due diligence, market validation, and exit prep—we help you evaluate and act with clarity.",
    outcomes: ["Due diligence", "Market validation", "Exit readiness"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 bg-background scroll-mt-20 relative">
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-accent" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs font-semibold tracking-wider bg-accent/10 text-accent hover:bg-accent/20"
                  >
                    {service.label}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Outcomes list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.outcomes.map((outcome, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cream text-secondary px-3 py-1 rounded-full font-medium"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  asChild
                  className="p-0 h-auto text-primary hover:text-secondary hover:bg-transparent font-semibold group/btn"
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - More prominent */}
        <div
          className={`bg-accent rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl text-accent-foreground font-medium mb-6">
            Not sure which engagement model is right for you?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Let's Figure It Out Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
