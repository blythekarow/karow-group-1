import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import strategyMeetingImage from "@/assets/medtech-strategy-meeting.jpg";

const AboutFirmSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-accent text-accent-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Single Image with subtle offset box */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Subtle offset decorative box - top-left, 25% size */}
            <div className="absolute -top-4 -left-4 w-[25%] h-[25%] bg-primary rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={strategyMeetingImage}
                alt="MedTech strategy meeting"
                className="w-full max-w-lg rounded-lg shadow-2xl object-cover h-96"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
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
      </div>
    </section>
  );
};

export default AboutFirmSection;
