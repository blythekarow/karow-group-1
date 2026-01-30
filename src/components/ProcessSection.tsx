import { Button } from "@/components/ui/button";
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
    <section ref={ref} className="relative overflow-visible">
      {/* Hero Image Section */}
      <div className="relative h-[450px] md:h-[500px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medtechStrategyImage})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content - positioned higher to make room for overhang */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pb-24">
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

      {/* Steps Grid - Overhanging Cards */}
      <div className="bg-cream pt-0 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Cards container - negative margin to overhang the hero */}
          <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto -mt-20 md:-mt-24 relative z-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 lg:p-10 border-r border-border last:border-r-0 first:rounded-l-lg last:rounded-r-lg shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="flex gap-4">
                  {/* Large Number */}
                  <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-tan leading-none shrink-0">
                    {step.number}
                  </span>
                  
                  {/* Content */}
                  <div className="pt-1">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-primary font-semibold mb-3 text-sm md:text-base">
                      {step.subtitle}
                    </p>
                    
                    {/* Body */}
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {step.body}
                    </p>
                  </div>
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
