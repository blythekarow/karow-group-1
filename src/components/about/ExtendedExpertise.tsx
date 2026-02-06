import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ExtendedExpertise = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-1 bg-primary mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Extended Expertise
          </h3>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with a curated network of specialists in health economics, quality management systems, human factors, pricing strategy, and strategic advisory to provide comprehensive support tailored to your specific needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For larger-scale implementations or comprehensive sales readiness planning, we collaborate with trusted partners to provide enterprise-grade capabilities while maintaining strategic integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedExpertise;
