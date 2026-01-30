import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={medicalTeamImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Clients Say
          </h2>
          
          {/* Large quote icon */}
          <Quote className="h-16 w-16 text-primary mx-auto mb-8 fill-primary" />
          
          {/* Quote text */}
          <div className="min-h-[200px] flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-background leading-relaxed font-light italic">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>
          
          {/* Attribution */}
          <div className="mb-12">
            <p className="text-lg font-bold text-background">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-primary font-medium">
              {testimonials[currentIndex].title && `${testimonials[currentIndex].title}, `}
              {testimonials[currentIndex].company}
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors border border-background/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-background" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary scale-110" 
                      : "bg-background/30 hover:bg-background/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors border border-background/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-background" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
