import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import strategyMeetingImage from "@/assets/medtech-strategy-meeting.jpg";
import wearableDeviceImage from "@/assets/wearable-device-testing.jpg";

const AboutFirmSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent text-accent-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Layered Image Composition */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Background decorative box */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-lg" />
            
            {/* Main image */}
            <div className="relative z-10 ml-8">
              <img
                src={strategyMeetingImage}
                alt="MedTech strategy meeting"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover h-80"
              />
            </div>
            
            {/* Overlapping secondary image */}
            <div className="absolute -bottom-8 -right-4 z-20 w-48 h-48">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-tan rounded-lg" />
              <img
                src={wearableDeviceImage}
                alt="Wearable device testing"
                className="relative w-full h-full rounded-lg shadow-xl object-cover"
              />
            </div>
            
            {/* Accent line */}
            <div className="absolute top-1/2 -left-8 w-16 h-1 bg-primary" />
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
