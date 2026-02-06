import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutIntro = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Medical device commercialization requires more than specialists working in silos. That's why The Karow Advisory Group exists—to bring integrated product and commercialization strategy to MedTech and wearables companies navigating the path from concept to market. Led by Blythe Karow, we're where 25 years of operator experience meets boutique-firm attention and strategic coordination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
