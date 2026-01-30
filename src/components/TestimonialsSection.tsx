import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Blythe seamlessly directed a rebrand to align our messaging with our brand, prepared us for a national conference, and led our product launch. Her powerhouse knowledge and ability to lead with excitement led to increased product sales. Simply, Blythe is a natural leader.",
    name: "Nikki Mabry",
    title: "",
    company: "Metric Medical",
  },
  {
    quote:
      "Blythe has an exceptional ability to see the big picture and translate it into a clear, actionable path forward. She shaped how we connect with both providers and patients. She has the rare ability to balance clinical nuance, regulatory context, and commercial strategy.",
    name: "Karen Crow",
    title: "CEO",
    company: "NeuroGeneces",
  },
  {
    quote:
      "Blythe brought structure, clarity, and momentum at a critical time in our growth. She built a pro forma that reflected our commercialization path and ensured we were presenting strategically to partners and funders. We secured funding and her work was key to making that happen.",
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
          <div className="flex justify-center items-center gap-6 mb-12">
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

          {/* CTA */}
          <div>
            <p className="text-background/70 mb-4">Ready to join them?</p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Join Our Clients
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
