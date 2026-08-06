import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const MOUNTAIN_SVG = `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dfs-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0c2326"/>
      <stop offset="0.45" stop-color="#17414a"/>
      <stop offset="0.78" stop-color="#3f5a55"/>
      <stop offset="1" stop-color="#c6a568"/>
    </linearGradient>
    <radialGradient id="dfs-sun" cx="0.7" cy="0.86" r="0.5">
      <stop offset="0" stop-color="#f0d69a" stop-opacity="0.9"/>
      <stop offset="0.4" stop-color="#d8bd8b" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#d8bd8b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="dfs-mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c6a568" stop-opacity="0"/>
      <stop offset="1" stop-color="#d8c39a" stop-opacity="0.22"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="900" fill="url(#dfs-sky)"/>
  <rect width="1440" height="900" fill="url(#dfs-sun)"/>
  <path d="M0 560 L180 470 L340 540 L520 430 L700 520 L900 420 L1120 520 L1300 450 L1440 510 L1440 900 L0 900 Z" fill="#24484a" opacity="0.55"/>
  <path d="M0 640 L160 560 L300 620 L460 500 L640 610 L820 520 L1020 620 L1220 540 L1440 600 L1440 900 L0 900 Z" fill="#163b3e" opacity="0.85"/>
  <rect y="600" width="1440" height="150" fill="url(#dfs-mist)"/>
  <path d="M0 720 L200 660 L420 730 L620 640 L820 720 L1040 650 L1260 730 L1440 680 L1440 900 L0 900 Z" fill="#0e2528"/>
  <path d="M0 800 L260 760 L520 810 L780 750 L1040 810 L1300 770 L1440 800 L1440 900 L0 900 Z" fill="#081416"/>
</svg>`;

const SummitSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#081416]">
      <div className="absolute inset-0 [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: MOUNTAIN_SVG }} />
      <div className="absolute inset-0 bg-[#081416]/55" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-2xl mx-auto text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
            Inaugural &middot; By Invitation &middot; February 26, 2027
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The Device Files Summit
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-4 leading-relaxed">
            An intimate, invitation-only gathering on the convergence of consumer tech, AI and medical device
            regulation.
          </p>
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            Set in the Austrian Alps, days before the Health.tech conference in Basel, this inaugural experience
            will join together executives, thought leaders, operators, and innovators.
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
