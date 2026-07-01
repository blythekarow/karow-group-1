import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import businessOfficeTeamImage from "@/assets/business-office-team.jpg";
import commercializationPlanningImage from "@/assets/commercialization-planning.jpg";
import strategicAdvisoryImage from "@/assets/strategic-advisory-meeting.jpg";

interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    title: "Product Strategy & Business Case",
    description:
      "Pick the right beachhead market to lead with, and build the investor-ready business case to fund it.",
    cta: "Explore Product Strategy",
    image: businessOfficeTeamImage,
    link: "/services#product-strategy",
  },
  {
    title: "Commercial Viability",
    description:
      "Whether your product will actually be adopted and paid for, the question that decides your whole strategy, answered early, not after clearance.",
    cta: "Explore Commercial Viability",
    image: commercializationPlanningImage,
    link: "/services#commercial-viability",
  },
  {
    title: "Strategic Advisory & Leadership",
    description:
      "Ongoing senior guidance, as an advisor or embedded in your team, through the decisions that matter most.",
    cta: "Explore Strategic Leadership",
    image: strategicAdvisoryImage,
    link: "/services#strategic-advisory",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

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
                  onClick={() => {
                    const hash = service.link.split('#')[1];
                    navigate('/services', { state: { scrollTo: hash } });
                  }}
                  className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-sm font-semibold px-6 py-3 self-start cursor-pointer"
                >
                  {service.cta}
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
