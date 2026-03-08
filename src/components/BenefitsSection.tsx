import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import teamBrainstormImage from "@/assets/team-brainstorm.jpg";

const benefits = [
  {
    description: "Accelerate time-to-market by aligning regulatory, reimbursement, and commercial strategy from day one",
  },
  {
    description: "Avoid costly rework and missed milestones by identifying blind spots before they derail your timeline or budget",
  },
  {
    description: "Make confident strategic decisions with battle-tested guidance on regulatory pathways, reimbursement requirements, and evidence planning",
  },
  {
    description: "Present investor-ready plans that demonstrate you understand the full commercialization picture, not just the technology",
  },
  {
    description: "Integrate product design, claims, evidence, and quality systems seamlessly so nothing falls through the cracks",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Image with L-shaped offset rectangle */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* L-shaped offset rectangle - vertical portion on left */}
            <div className="absolute -top-4 left-0 w-20 h-[calc(100%+48px)] bg-tan/60 rounded-sm" />
            {/* L-shaped offset rectangle - horizontal portion at top */}
            <div className="absolute -top-4 left-0 right-[40%] h-12 bg-tan/60 rounded-sm" />
            
            {/* Main image */}
            <div className="relative z-10 ml-6">
              <img
                src={consultingWorkshopImage}
                alt="Professional team collaboration"
                className="w-full rounded-sm shadow-xl object-cover h-[500px]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Accent line above headline */}
            <div className="w-12 h-1 bg-primary mb-6" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Right Strategy Saves You Time, Money, and Momentum
            </h2>
            
            <p className="text-lg text-muted-foreground mb-3">
              With The Karow Advisory Group, you can:
            </p>
            
            {/* Checkmark list */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center shrink-0 mt-0.5">
                    <svg 
                      className="w-3 h-3 text-primary" 
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
                  <p className="text-sm md:text-base text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden relative">
            <div className="absolute -top-3 -left-3 w-[20%] h-[20%] bg-tan/60 rounded-sm" />
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
