import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import businessOfficeTeamImage from "@/assets/business-office-team.jpg";
import businessHandshakeImage from "@/assets/business-handshake.jpg";
import dueDiligenceImage from "@/assets/due-diligence-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ServiceArea {
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
}

const serviceAreas: ServiceArea[] = [
  {
    title: "Product & Business Case Definition",
    description: "Product definition, market positioning, value proposition development, regulatory pathway optimization, and understanding whose pain point you're addressing and how.",
    items: [
      "Product strategy and roadmap development",
      "Market analysis and competitive positioning",
      "Value proposition and business case development",
      "Regulatory pathway assessment (510(k), De Novo, PMA, Breakthrough)",
      "Target market identification and pain point validation",
      "Claims strategy foundation",
    ],
    image: executiveBoardroomImage,
    imageAlt: "Executive strategy session for product definition",
  },
  {
    title: "Commercialization Planning & Execution",
    description: "Go-to-market planning, channel strategy, reimbursement planning, health economics and reimbursement, evidence strategy, market access, and clinical workflow integration.",
    items: [
      "Go-to-market strategy and launch planning",
      "Channel strategy and partnership development",
      "Reimbursement and payer strategy",
      "Health economics and outcomes research",
      "Clinical evidence planning",
      "Market access strategy",
      "Clinical workflow and adoption planning",
      "Regulatory submission coordination",
    ],
    image: businessHandshakeImage,
    imageAlt: "Team workshop for commercialization planning",
  },
  {
    title: "Strategic Advisory & Leadership",
    description: "Fractional leadership and ongoing strategic advisory to guide complex decision-making and enable sustainable growth.",
    items: [
      "Fractional CPO/CCO/COO leadership",
      "Strategic planning and decision support",
      "Cross-functional team coordination",
      "Ongoing strategic advisory",
      "Executive guidance through commercialization",
      "Investor and board readiness support",
      "Strategic partnership facilitation",
    ],
    image: dueDiligenceImage,
    imageAlt: "Strategic leadership meeting",
  },
];

const ServiceAreas = () => {
  return (
    <div>
      {serviceAreas.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-background" : "bg-cream";
        
        return (
          <ServiceAreaSection
            key={index}
            service={service}
            imageLeft={!isEven}
            bgClass={bgClass}
          />
        );
      })}
    </div>
  );
};

interface ServiceAreaSectionProps {
  service: ServiceArea;
  imageLeft: boolean;
  bgClass: string;
}

const ServiceAreaSection = ({ service, imageLeft, bgClass }: ServiceAreaSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className={`py-16 ${bgClass} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Image */}
          <div
            className={`relative ${imageLeft ? "lg:order-1" : "lg:order-2"} transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : imageLeft ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative z-10 w-3/4 mx-auto">
              {/* Offset decorative box */}
              <div className="absolute -top-3 -left-3 w-[25%] h-[25%] bg-primary rounded-lg hidden lg:block" />
              <img
                src={service.image}
                alt={service.imageAlt}
                className="relative z-10 w-full rounded-lg shadow-2xl object-cover h-64 lg:h-72"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`${imageLeft ? "lg:order-2" : "lg:order-1"} transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {service.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {service.description}
            </p>
            
            {/* Bullet list */}
            <ul className="space-y-1.5 mb-8 pl-4">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Explore a Strategic Engagement
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
