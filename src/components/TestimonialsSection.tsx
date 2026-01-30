import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import medicalTeamImage from "@/assets/medical-team.jpg";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Seamlessly directed and began a rebrand to align our messaging with our brand, prepared us for a national conference appearance, product launch, and many, many other focus areas. Blythe's powerhouse marketing knowledge and her ability to lead with excitement led to increased product sales and left a lasting impact on me personally. Simply, Blythe is a natural leader.",
    name: "Nikki Mabry",
    title: "",
    company: "Metric Medical",
  },
  {
    quote:
      "Exceptional ability to see the big picture and then translate it into a clear, actionable path forward. From building our clinician advisory board to leading go-to-market planning and early business development, she shaped how NeuroGeneces connects with both providers and patients. She has the rare ability to balance clinical nuance, regulatory context, and commercial strategy and make it all feel simple.",
    name: "Karen Crow",
    title: "CEO",
    company: "NeuroGeneces",
  },
  {
    quote:
      "Brought structure, clarity, and momentum at a critical time in our company's growth. She built a pro forma that actually reflected our commercialization path and ensured we were presenting ourselves strategically to both partners and funders. We secured funding and her work was a key part of making that happen. As a founder with limited internal resources, having someone who could plug in and deliver was a game-changer.",
    name: "Dr. Daniel Gareau",
    title: "CEO",
    company: "SurgiVance",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section ref={ref} className="relative min-h-[600px] py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={medicalTeamImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header row with headline and quote marks */}
          <div className="flex items-start justify-between mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What our clients say
            </h2>
            
            {/* Large quotation marks */}
            <div className="text-primary text-[120px] leading-none font-serif hidden md:block" style={{ marginTop: '-20px' }}>
              "
            </div>
          </div>
          
          {/* Quote content with navigation */}
          <div className="max-w-3xl">
            <div className="flex items-start gap-6">
              {/* Left arrow */}
              <button
                onClick={prevTestimonial}
                className="text-primary hover:text-primary/80 transition-colors mt-2 flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              {/* Quote text and attribution */}
              <div className="flex-1">
                <div className="min-h-[180px] mb-8">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                
                {/* Attribution */}
                <div className="text-left">
                  <p className="text-xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary italic">
                    {testimonials[currentIndex].title && `${testimonials[currentIndex].title}, `}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              {/* Right arrow */}
              <button
                onClick={nextTestimonial}
                className="text-primary hover:text-primary/80 transition-colors mt-2 flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
            
            {/* Dot navigation */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
