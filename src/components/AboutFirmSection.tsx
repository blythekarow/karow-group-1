import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutFirmSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About the Firm
          </h2>
          
          <div className="space-y-6 text-lg text-accent-foreground/90 leading-relaxed">
            <p>
              <span className="font-semibold text-accent-foreground">The Karow Advisory Group</span> is a boutique MedTech strategy practice helping device, wearable, and digital therapeutics companies make high-stakes product and portfolio decisions.
            </p>
            
            <p>
              Led by Founder & Principal <span className="font-semibold text-primary">Blythe Karow</span>, we partner with C-suite leaders, investors, and corporate strategy teams navigating complex development, investment, and commercialization challenges. We bring in specialized experts as needed—from regulatory strategists to reimbursement specialists—ensuring you get exactly the right expertise for your challenge.
            </p>
            
            <p>
              From billion-dollar ecosystems to early-stage launches, we lead product innovation, build winning strategies, drive commercial execution, and support raises and exits.
            </p>
            
            <p className="text-xl font-medium text-accent-foreground border-l-4 border-primary pl-6 mt-8">
              Our approach: get aligned, move fast, and make the right things happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirmSection;
