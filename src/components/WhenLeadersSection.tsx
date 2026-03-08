import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const painPoints = [
  "When long-term strategy needs sharper definition and operational alignment",
  "When they're burning time making decisions instead of building",
  "When product, market, and regulatory plans aren't aligned",
  "When they need someone to lead but can't afford to hire full-time",
  "When the launch is coming and no one is actually managing it",
  "When messaging isn't landing and the pipeline is slowing down",
];

const WhenLeadersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            When Leaders Reach Out to Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative bg-background rounded-md p-6 border-l-4 border-l-primary border border-border/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <span className="text-3xl font-bold text-primary/15 absolute top-3 right-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-muted-foreground leading-relaxed pr-6">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenLeadersSection;
