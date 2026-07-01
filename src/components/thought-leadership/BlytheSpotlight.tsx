import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mic2 } from "lucide-react";
import blytheMain from "@/assets/blythe-stage-main.jpg";
import lsiPanel from "@/assets/blythe-lsi-panel.jpg";
import medtechWorld from "@/assets/blythe-medtech-world.jpg";
import medtechInnovator from "@/assets/blythe-medtech-innovator.jpg";

const SPEAKING_INQUIRY = "mailto:blythe.karow@gmail.com?subject=Speaking%20Engagement%20Inquiry";

const gallery = [
  { src: lsiPanel, alt: "Blythe Karow on a panel at LSI USA" },
  { src: medtechWorld, alt: "Blythe Karow on a panel at MedTech World North America" },
  { src: medtechInnovator, alt: "Blythe Karow at MedTech Innovator" },
];

const BlytheSpotlight = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.12 });

  return (
    <section id="the-voice" ref={ref} className="py-16 md:py-20 bg-accent overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Main stage photo */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-[55%] h-[55%] bg-primary hidden lg:block" />
              <img
                src={blytheMain}
                alt="Blythe Karow speaking on stage with a microphone at MedTech World"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-5">
              Blythe Karow
            </h2>
            <p className="text-lg text-background/80 leading-relaxed mb-8">
              Beyond publishing The Device Files each week, Blythe is a sought-after speaker and panelist,
              featured on stages across Europe and the US. Look for her this year at LSI, MedTech World, MedTech
              Innovator, AdvaMed, Medica, and CES. Thousands follow her weekly, and companies and conferences
              bring her in to speak, moderate, and host.
            </p>
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

        {/* Conference gallery */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {gallery.map((g, i) => (
            <div key={i} className="overflow-hidden shadow-lg">
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlytheSpotlight;
