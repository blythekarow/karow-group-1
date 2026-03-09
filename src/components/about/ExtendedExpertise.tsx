import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import teamImage from "@/assets/beyond-core-team.jpg";

const ExtendedExpertise = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/15 rounded-sm" />
            <img
              src={teamImage}
              alt="Team strategy meeting"
              className="relative rounded-sm w-full h-auto object-cover shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-1 bg-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Beyond Our Core Team
            </h3>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Some engagements require capabilities beyond strategic advisory — large-scale clinical operations, eQMS, cybersecurity support, or third-party logistics. We don't execute those ourselves, but we know who does.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help you identify the right partners, ask the right questions, and integrate them into your overall strategy so nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedExpertise;
