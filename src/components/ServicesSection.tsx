import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import executiveBoardroomImage from "@/assets/executive-boardroom.jpg";
import consultingWorkshopImage from "@/assets/consulting-workshop.jpg";
import dueDiligenceImage from "@/assets/due-diligence-meeting.jpg";

interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    title: "Product & Business Case Definition",
    description:
      "Product definition, market positioning, value proposition development, regulatory pathway optimization, and understanding whose pain point you're addressing and how.",
    cta: "Explore Product Strategy",
    image: executiveBoardroomImage,
    link: "/services",
  },
  {
    title: "Commercialization Planning & Execution",
    description:
      "Go-to-market planning, channel strategy, reimbursement planning, health economics and reimbursement, evidence strategy, market access, and clinical workflow integration.",
    cta: "Explore Commercialization Services",
    image: consultingWorkshopImage,
    link: "/services",
  },
  {
    title: "Strategic Advisory & Leadership",
    description:
      "Fractional leadership and ongoing strategic advisory to guide complex decision-making and enable sustainable growth.",
    cta: "Explore Strategic Leadership",
    image: dueDiligenceImage,
    link: "/services",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-background scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Row */}
        <div
          className={`grid md:grid-cols-[1fr_2fr] gap-8 mb-16 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            {/* Accent line */}
            <div className="w-16 h-1 bg-primary" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive commercialization support tailored to your stage and needs, from assessment to strategy development to hands-on execution.
          </p>
        </div>

        {/* Tall Image Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative h-[550px] overflow-hidden shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                <h3 className="text-2xl md:text-[1.75rem] font-bold text-white mb-4 leading-tight min-h-[4rem]">
                  {service.title}
                </h3>
                <p className="text-white/85 leading-relaxed mb-6 text-sm md:text-[0.95rem] min-h-[7rem]">
                  {service.description}
                </p>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-sm font-semibold px-6 py-3 self-start"
                >
                  <a href={service.link}>
                    {service.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
