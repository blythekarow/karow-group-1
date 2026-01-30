import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import medtechStrategyImage from "@/assets/medtech-strategy-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  body: string;
}

const steps: ProcessStep[] = [
  {
    number: "1",
    title: "Clarity",
    subtitle: "Schedule a Clarity Call",
    body: "We'll get to know your product, challenges, and goals – then we'll uncover the questions that matter the most to you.",
  },
  {
    number: "2",
    title: "Strategy",
    subtitle: "Get Your Strategic RoadMap",
    body: "We'll align your goals with the right regulatory, clinical, and market pathways—creating a tailored commercialization plan and go-to-market model.",
  },
  {
    number: "3",
    title: "Execution",
    subtitle: "Move Forward With Confidence",
    body: "With Karow Advisory driving execution, you'll accelerate your journey, pitch with clarity, and stop second-guessing what the FDA or investors expect.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[450px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medtechStrategyImage})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Accent Bar */}
          <div 
            className={`w-16 h-1 bg-primary rounded-full mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          
          {/* Heading */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Work With Us in 3 Simple Steps
          </h2>
          
          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className={`bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-700 text-base font-semibold px-8 py-6 rounded-md ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book A Discovery Call
            </a>
          </Button>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="bg-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {/* Large Number */}
                <span className="text-6xl md:text-7xl font-serif font-light text-tan leading-none shrink-0">
                  {step.number}
                </span>
                
                {/* Content */}
                <div className="pt-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  
                  {/* Body */}
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
