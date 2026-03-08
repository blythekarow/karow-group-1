import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, ClipboardCheck, ArrowRight } from "lucide-react";
import medtechBg from "@/assets/medtech-abstract-bg.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface CTACard {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ctaCards: CTACard[] = [
  {
    icon: Calendar,
    title: "Book a Discovery Call",
    description: "See how we can help accelerate your MedTech commercialization journey.",
    buttonText: "Schedule Now",
    buttonLink: CALENDLY_URL,
  },
  {
    icon: ClipboardCheck,
    title: "Take the D.E.V.I.C.E. Assessment",
    description: "Assess your commercialization readiness and identify strategic gaps.",
    buttonText: "Start Assessment",
    buttonLink: "#",
  },
];

const DualCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 overflow-hidden relative">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${medtechBg})` }}
      />
      <div className="absolute inset-0 bg-accent/85" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            If You Like What You've Learned in The Device Files, Let's Talk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ctaCards.map((card, index) => (
            <Card
              key={index}
              className={`bg-background/95 backdrop-blur-sm border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 border-t-4 border-t-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {card.description}
                </p>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-6 py-3 rounded-md w-full"
                >
                  <a 
                    href={card.buttonLink} 
                    target={card.buttonLink.startsWith("http") ? "_blank" : undefined}
                    rel={card.buttonLink.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {card.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
