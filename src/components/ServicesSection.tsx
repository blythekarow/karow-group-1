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
      "Demonstrate you understand whose pain point you're addressing and how. Product definition, market positioning, value proposition development, regulatory pathway optimization.",
    cta: "Explore Product Strategy",
    image: executiveBoardroomImage,
    link: "/services",
  },
  {
    title: "Commercialization Planning & Execution",
    description:
      "Go-to-market planning, health economics and reimbursement, evidence strategy, market access, and clinical workflow integration.",
    cta: "Explore Commercialization Planning",
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
          className={`flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl md:text-right">
            Comprehensive commercialization support tailored to your stage and needs, from assessment to strategy development to hands-on execution.
          </p>
        </div>

        {/* Tall Image Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative h-[500px] rounded-lg overflow-hidden shadow-xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                  {service.description}
                </p>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 text-sm font-semibold px-6 py-3 rounded-md"
                >
                  <a href={service.link}>
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
