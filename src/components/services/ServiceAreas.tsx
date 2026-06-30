import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import businessOfficeTeamImage from "@/assets/business-office-team.jpg";
import commercializationPlanningImage from "@/assets/commercialization-planning.jpg";
import strategicAdvisoryImage from "@/assets/strategic-advisory-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface ServiceArea {
  title: string;
  description: string;
  items?: string[];
  steps?: { name: string; items: string[] }[];
  image: string;
  imageAlt: string;
  id: string;
}

const serviceAreas: ServiceArea[] = [
    {
    title: "Product & Business Case Definition",
    description:
      "Built around your company and your technology, never a template. We work through two structured steps to give you a deliberate market choice and the case to act on it, whether your next move is raising capital, partnering, or entering the market on your own terms.",
    steps: [
      {
        name: "Beachhead Market Prioritization",
        items: [
          "Your strategic goals and your technology's real-world potential",
          "Market opportunity and competitive landscape",
          "Regulatory and economic signals for each option",
          "Initial channel and adoption exploration",
          "A clear, defensible recommendation",
        ],
      },
      {
        name: "Business Case",
        items: [
          "Market sizing for your beachhead",
          "Go-to-market plan and timeline",
          "Capital and resources required",
          "Regulatory pathway recommendation",
          "A case ready for investors, your board, or partners",
        ],
      },
    ],
    image: businessOfficeTeamImage,
    imageAlt: "Executive strategy session for product definition",
    id: "product-definition",
  },
  {
    title: "Go-to-Market Strategy",
    description: "The work that decides whether your product will actually sell, and the part investors expect you to have figured out early, not after clearance. We define who buys it, whether it fits their clinical workflow, who pays and through what pathway, and the economic case you'll need to make. Getting this right early is what keeps you from spending years and millions proving the wrong thing. It's also where our Market Access Fundamentals modules give you an affordable, defined place to start.",
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
    image: commercializationPlanningImage,
    imageAlt: "Team workshop for commercialization planning",
    id: "go-to-market",
  },
  {
    title: "Strategic Advisory & Leadership",
    description: "Sometimes what you need isn't a project, it's ongoing guidance from someone who has done this before. We provide continued advice and support, either as a strategic advisor weighing in on the decisions that matter, or as a more embedded part of your team with dedicated hours, closer to fractional leadership. Either way, you get senior commercialization experience in your corner, and the confidence that gives your team, your board, and your investors.",
    items: [
      "Fractional CPO/CCO/COO leadership",
      "Strategic planning and decision support",
      "Cross-functional team coordination",
      "Ongoing strategic advisory",
      "Executive guidance through commercialization",
      "Investor and board readiness support",
      "Strategic partnership facilitation",
    ],
    image: strategicAdvisoryImage,
    imageAlt: "Strategic leadership meeting",
    id: "strategic-advisory",
  },
];

const blockColors = ["bg-primary", "bg-accent", "bg-secondary"];

const ServiceAreas = () => {
  return (
    <div>
      {serviceAreas.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-background" : "bg-cream";
        const blockColor = blockColors[index % blockColors.length];
        
        return (
          <ServiceAreaSection
            key={index}
            service={service}
            imageLeft={!isEven}
            bgClass={bgClass}
            blockColor={blockColor}
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
  blockColor: string;
}

const ServiceAreaSection = ({ service, imageLeft, bgClass, blockColor }: ServiceAreaSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={service.id} ref={ref} className={`py-16 ${bgClass} overflow-hidden scroll-mt-20`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Image */}
          <div
            className={`relative ${imageLeft ? "lg:order-1" : "lg:order-2"} transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : imageLeft ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Bold background block */}
              <div className={`absolute -top-8 ${imageLeft ? "-left-8" : "-right-8"} w-[55%] h-[50%] ${blockColor} hidden lg:block`} />
              <img
                src={service.image}
                alt={service.imageAlt}
                className="relative z-10 w-full shadow-2xl object-cover h-72 lg:h-96"
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
            
            {/* Steps (when present) or flat bullet list */}
            {service.steps ? (
              <div className="space-y-6 mb-8">
                {service.steps.map((step, sIdx) => (
                  <div key={sIdx}>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      <span className="text-primary">{sIdx + 1}.</span> {step.name}
                    </h3>
                    <ul className="space-y-1.5 pl-4">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-1.5 mb-8 pl-4">
                {service.items?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
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
