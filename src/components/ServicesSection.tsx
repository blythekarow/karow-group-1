import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Zap, TrendingUp, BarChart3 } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team.jpg";
import scientistImage from "@/assets/scientist-lab.jpg";
import dnaImage from "@/assets/dna-research.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ServiceCard {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  outcomes: string[];
  image: string;
}

const services: ServiceCard[] = [
  {
    icon: Zap,
    label: "FOR ESTABLISHED COMPANIES",
    title: "Executive Strategy Intensive",
    description:
      "Define the path. Get aligned. Move forward with confidence. A focused, senior-level engagement designed to help you tackle a strategic decision point with speed, clarity, and a plan built for execution.",
    outcomes: ["Strategic alignment", "Clear roadmap", "Faster decisions"],
    image: medicalTeamImage,
  },
  {
    icon: TrendingUp,
    label: "FOR GROWTH STAGE",
    title: "Strategic Consulting",
    description:
      "When you have a strategic or execution gap that needs expert leadership for the short term. Hands-on support to drive initiatives forward, align teams, and translate plans into progress.",
    outcomes: ["Embedded expertise", "Team alignment", "Execution support"],
    image: scientistImage,
  },
  {
    icon: BarChart3,
    label: "FOR INVESTORS",
    title: "Investor / M&A Support",
    description:
      "Trusted insight for critical investment and acquisition decisions. From due diligence to market validation to exit prep, this engagement helps investors and operators evaluate, refine, and act with clarity.",
    outcomes: ["Due diligence", "Market validation", "Exit readiness"],
    image: dnaImage,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-cream scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-[42px] font-bold text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three ways to work together tailored to your stage, team, and goals. From strategy definition to execution leadership to investor support, each engagement is designed to cut through complexity and move your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 overflow-hidden border-t-4 border-t-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image header with overlay */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <Badge
                    className="text-[10px] font-semibold tracking-widest uppercase bg-accent text-accent-foreground border-none"
                  >
                    {service.label}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
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
                      className="text-xs bg-cream text-secondary px-3 py-1.5 rounded-full font-medium border border-tan"
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

        {/* Bottom CTA */}
        <div
          className={`relative bg-accent rounded-xl p-8 md:p-12 max-w-5xl mx-auto transition-all duration-700 delay-500 overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative z-20 text-center">
            <p className="text-xl md:text-2xl text-accent-foreground font-medium mb-6">
              Not sure which engagement model is right for you?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
