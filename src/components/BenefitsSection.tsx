import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import consultingWorkshopImage from "@/assets/consulting-workshop.jpg";

const benefits = [
  {
    title: "Save money",
    description: "Avoid unnecessary and costly missteps",
  },
  {
    title: "Gain strategic confidence",
    description: "Winning plans are built with cross-functional alignment that makes your strategy bulletproof",
  },
  {
    title: "Accelerate time-to-market",
    description: "Move faster with clear milestones and coordinated execution",
  },
  {
    title: "Win investor confidence",
    description: "Prove you understand the path, the risks, and how to execute",
  },
  {
    title: "Know what to build and when",
    description: "Identify blind spots before they become expensive problems",
  },
  {
    title: "Drive real adoption",
    description: "Ensure your market plans deliver revenue, not just regulatory approval",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Accent line above headline */}
            <div className="w-12 h-1 bg-primary mb-6" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Finding the Right Strategic Partner Saves You Time, Momentum, and Money
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              With The Karow Advisory Group, you can:
            </p>
            
            {/* Checkmark list - outlined square checkmarks like RLS */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {/* Outlined square checkmark */}
                  <div className="w-6 h-6 border-2 border-primary rounded flex items-center justify-center shrink-0 mt-0.5">
                    <svg 
                      className="w-4 h-4 text-primary" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="text-base md:text-lg">
                    <span className="font-bold text-foreground">{benefit.title}</span>
                    <span className="text-muted-foreground"> — {benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image with L-shaped offset rectangle */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* L-shaped offset rectangle - vertical portion on right */}
            <div className="absolute -top-4 right-0 w-20 h-[calc(100%+48px)] bg-tan/60 rounded-sm" />
            {/* L-shaped offset rectangle - horizontal portion at top */}
            <div className="absolute -top-4 right-0 left-[40%] h-12 bg-tan/60 rounded-sm" />
            
            {/* Main image */}
            <div className="relative z-10 mr-6">
              <img
                src={consultingWorkshopImage}
                alt="Professional team collaboration"
                className="w-full rounded-sm shadow-xl object-cover h-[500px]"
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden relative">
            <div className="absolute -top-3 -right-3 w-[20%] h-[20%] bg-tan/60 rounded-sm" />
            <img
              src={consultingWorkshopImage}
              alt="Professional team collaboration"
              className="w-full rounded-sm shadow-xl object-cover aspect-[4/3] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
