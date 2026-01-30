import { Check } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Finding the Right Strategic Partner Saves You Time, Momentum, and Money
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              With The Karow Advisory Group, you can:
            </p>
            
            {/* Checkmark list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{benefit.title}</span>
                    <span className="text-muted-foreground"> — {benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image with offset rectangle */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Offset decorative box */}
            <div className="absolute -top-3 -right-3 w-[20%] h-[20%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={consultingWorkshopImage}
                alt="Professional team collaboration"
                className="w-full rounded-lg shadow-2xl object-cover h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
