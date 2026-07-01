import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mic2 } from "lucide-react";
import blythePhoto from "@/assets/blythe-white-blazer.png";

const SPEAKING_INQUIRY = "mailto:blythe.karow@thekarowgroup.com?subject=Speaking%20Engagement%20Inquiry";
const conferences = ["LSI", "MedTech World", "MedTech Innovator", "AdvaMed", "Medica", "CES"];

const BlytheSpotlight = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="the-voice" ref={ref} className="py-16 md:py-20 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-[55%] h-[50%] bg-primary hidden lg:block" />
              <img
                src={blythePhoto}
                alt="Blythe Karow, speaker and voice in MedTech"
                className="relative z-10 w-full max-w-md mx-auto shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
              The voice behind The Device Files
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Blythe Karow, a voice in MedTech
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond publishing The Device Files each week, Blythe is a sought-after speaker and panelist,
              featured on stages across Europe and the US, and a regular voice on industry podcasts. Thousands
              follow her weekly, and companies and conferences bring her in to speak, moderate, and host.
            </p>

            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">Look for her this year at:</p>
              <div className="flex flex-wrap gap-2">
                {conferences.map((c, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium text-secondary bg-cream border border-border rounded-full px-3 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={SPEAKING_INQUIRY}>
                <Mic2 className="mr-2 h-5 w-5" />
                Book Blythe to Speak
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlytheSpotlight;
