import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary" />
      
      {/* Offset decorative boxes */}
      <div className="absolute top-20 left-8 w-32 h-32 bg-primary/10 rounded-lg hidden lg:block" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-2 border-secondary/20 rounded-lg hidden lg:block" />
      <div className="absolute top-1/3 right-16 w-16 h-1 bg-secondary/30 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p
          className={`text-sm uppercase tracking-widest text-primary font-semibold mb-4 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Client Success Stories
        </p>
        
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What Our Clients Say
        </h2>

        {/* Desktop: Show all testimonials */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-md hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-secondary">
                    {testimonial.title && `${testimonial.title}, `}
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div
          className={`lg:hidden max-w-lg mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="bg-card border-none shadow-md">
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-secondary">
                  {testimonials[currentIndex].title &&
                    `${testimonials[currentIndex].title}, `}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card shadow-md hover:bg-cream transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card shadow-md hover:bg-cream transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground mb-4">Ready to join them?</p>
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
    </section>
  );
};

export default TestimonialsSection;
