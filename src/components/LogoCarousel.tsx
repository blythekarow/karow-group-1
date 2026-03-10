import { useEffect, useRef } from "react";

// Import logo images
import johnsonJohnsonLogo from "@/assets/logos/johnson-johnson.webp";
import neurogenecesLogo from "@/assets/logos/neurogeneces.png";
import whinLogo from "@/assets/logos/whin.png";
import hdoHealthLogo from "@/assets/logos/hdo-health.jpg";
import tivicLogo from "@/assets/logos/tivic.png";
import surgivanceLogo from "@/assets/logos/surgivance.png";
import evrenLogo from "@/assets/logos/evren.png";
import corvivoLogo from "@/assets/logos/corvivo.png";
import smithNephewLogo from "@/assets/logos/smith-nephew.webp";

const logos = [
  { name: "Johnson & Johnson", src: johnsonJohnsonLogo },
  { name: "NeuroGeneces", src: neurogenecesLogo },
  { name: "WHIN", src: whinLogo },
  { name: "HDO Health", src: hdoHealthLogo },
  { name: "Tivic", src: tivicLogo },
  { name: "SurgiVance", src: surgivanceLogo },
  { name: "Evren Technologies", src: evrenLogo },
  { name: "Corvivo", src: corvivoLogo },
  { name: "Smith & Nephew", src: smithNephewLogo },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += speed;
      
      // Reset scroll position when we've scrolled past half the content
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="pt-16 pb-8 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Experience Trusted Across the MedTech Ecosystem
        </h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap items-center"
        style={{ scrollBehavior: "auto" }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-16 px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="h-10 md:h-12 w-auto max-w-[150px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
