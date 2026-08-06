import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const SUMMIT_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80";

const SummitSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={SUMMIT_IMAGE} alt="The Austrian Alps" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/50" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
            Inaugural &middot; By Invitation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The Device Files Summit
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            An intimate, invitation-only gathering on the future of MedTech commercialization, set in the
            Austrian Alps. Founders, operators, and partners, together for a few days that matter.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-white hover:text-accent transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href="/device-files-summit">
              Explore the Summit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SummitSection;
