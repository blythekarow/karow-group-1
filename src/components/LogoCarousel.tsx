import { useEffect, useRef } from "react";

// Placeholder company names - replace with actual logos when available
const companies = [
  "Medtronic",
  "Abbott",
  "Boston Scientific", 
  "Stryker",
  "Johnson & Johnson",
  "Philips",
  "GE Healthcare",
  "Siemens Healthineers",
  "Dexcom",
  "Intuitive Surgical",
  "Edwards Lifesciences",
  "Zimmer Biomet",
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
  const allLogos = [...companies, ...companies];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <p className="text-center text-sm uppercase tracking-[2px] text-muted-foreground font-medium">
          Experience Trusted Across the MedTech Ecosystem
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {allLogos.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-12 px-8 hover:opacity-100 transition-all duration-300"
          >
            {/* Styled text placeholders - replace with actual logo images when available */}
            <span className="text-sm md:text-base font-semibold text-border whitespace-nowrap tracking-wide">
              {company}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
