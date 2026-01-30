import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check } from "lucide-react";
import strategyMeetingImage from "@/assets/medtech-strategy-meeting.jpg";

const benefits = [
  "Avoid over 50% of unnecessary costs",
  "Accelerate time-to-market by aligning key milestones with regulatory and market expectations",
  "Win investor confidence with a credible, data-driven commercialization plan",
  "Eliminate guesswork from FDA 510(k), De Novo, and PMA submissions",
  "Drive revenue with market adoption strategies, not just regulatory approvals",
];

const WhyWorkWithUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Accent Bar */}
            <div className="w-16 h-1.5 bg-primary rounded-full mb-8" />

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-6">
              The Right Strategy Saves You Time, Money, and Momentum
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              With Karow Advisory, you can:
            </p>

            {/* Benefits Checklist */}
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-6 h-6 rounded border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image with Offset Background */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Offset decorative background */}
            <div className="absolute top-8 -right-4 lg:-right-8 w-full h-full bg-tan rounded-lg -z-10" />
            
            {/* Main image */}
            <div className="relative">
              <img
                src={strategyMeetingImage}
                alt="Strategic planning session with MedTech professionals"
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
