import { useEffect, useRef } from "react";

// Company logos - styled as professional text marks
const companies = [
  { name: "Medtronic", style: "font-bold tracking-tight" },
  { name: "Abbott", style: "font-bold tracking-wide" },
  { name: "Boston Scientific", style: "font-semibold tracking-normal" },
  { name: "Stryker", style: "font-bold uppercase tracking-widest text-sm" },
  { name: "Johnson & Johnson", style: "font-medium italic" },
  { name: "Philips", style: "font-bold tracking-wide" },
  { name: "GE HealthCare", style: "font-bold tracking-tight" },
  { name: "Siemens Healthineers", style: "font-medium tracking-normal" },
  { name: "Dexcom", style: "font-bold uppercase tracking-wider text-sm" },
  { name: "Intuitive", style: "font-semibold tracking-wide" },
  { name: "Edwards", style: "font-bold italic tracking-normal" },
  { name: "Zimmer Biomet", style: "font-semibold tracking-wide" },
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
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-sm uppercase tracking-[2px] text-muted-foreground font-medium">
          Experience Trusted Across the MedTech Ecosystem
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {allLogos.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-12 px-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <span className={`text-base md:text-lg whitespace-nowrap text-foreground ${company.style}`}>
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarousel;
