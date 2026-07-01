import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import businessOfficeTeamImage from "@/assets/business-office-team.jpg";
import commercializationPlanningImage from "@/assets/commercialization-planning.jpg";
import strategicAdvisoryImage from "@/assets/strategic-advisory-meeting.jpg";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface Module {
  number: string;
  title: string;
  question: string;
  body: string;
  price: string;
}

interface ServiceArea {
  title: string;
  description: string;
  items?: string[];
  steps?: { name: string; items: string[] }[];
  modules?: Module[];
  moduleLabel?: string;
  startupNote?: string;
  image?: string;
  imageAlt?: string;
  id: string;
}

const serviceAreas: ServiceArea[] = [
  {
    title: "Product Strategy & Business Case",
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
    id: "product-strategy",
  },
  {
    title: "Commercial Viability",
    description:
      "Forget the overpriced, basic reimbursement landscapes. These three modules are laid out to give you a clear read on far more than coverage and coding: a real understanding of who actually adopts your product and the economic case behind it, the full picture of your commercial viability. It's the clarity investors look for, and it de-risks your commercial strategy before you spend years building on the wrong assumptions.",
    moduleLabel: "The First Three Steps to Commercial Viability",
    modules: [
      {
        number: "1",
        title: "Clinical Workflow Analysis",
        question:
          "Who are you selling to, and does your product solve a real pain point that fits their workflow?",
        body: "We pin down who actually buys your product, whether it solves a pain point they truly feel, and exactly where it fits in their clinical workflow.",
        price: "$5,000",
      },
      {
        number: "2",
        title: "Reimbursement Overview",
        question: "Who really pays for it, and is there an existing pathway to get paid?",
        body: "We determine whether healthcare coverage exists for your offering, who actually pays, and whether there's an established reimbursement pathway.",
        price: "$7,500",
      },
      {
        number: "3",
        title: "Health Economics Strategy",
        question: "What will you have to prove to win the purchaser over?",
        body: "We define the economic story you'll need to tell to gain traction with the people who hold the budget. It becomes the blueprint for the evidence and models you build later.",
        price: "$7,500",
      },
    ],
    image: commercializationPlanningImage,
    imageAlt: "Team mapping commercial viability and market access",
    id: "commercial-viability",
  },
  {
    title: "Strategic Advisory & Leadership",
    description:
      "Sometimes what you need isn't a project, it's ongoing guidance from someone who has done this before. We provide continued advice and support, either as a strategic advisor weighing in on the decisions that matter, or as a more embedded part of your team with dedicated hours, closer to fractional leadership. Either way, you get senior commercialization experience in your corner, and the confidence that gives your team, your board, and your investors.",
    items: [
      "Ongoing strategic advisory",
      "Fractional CPO/CCO/COO leadership",
      "Strategic planning and decision support",
      "Investor and board readiness support",
      "Cross-functional team coordination",
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

const ServiceImage = ({ service, imageLeft, blockColor, isVisible }: { service: ServiceArea; imageLeft: boolean; blockColor: string; isVisible: boolean; }) => (
  <div
    className={`relative ${imageLeft ? "lg:order-1" : "lg:order-2"} transition-all duration-700 ${
      isVisible ? "opacity-100 translate-x-0" : imageLeft ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
    }`}
  >
    <div className="relative">
      <div className={`absolute -top-8 ${imageLeft ? "-left-8" : "-right-8"} w-[55%] h-[50%] ${blockColor} hidden lg:block`} />
      <img
        src={service.image}
        alt={service.imageAlt}
        className="relative z-10 w-full shadow-2xl object-cover h-72 lg:h-96"
      />
    </div>
  </div>
);

const ServiceAreaSection = ({ service, imageLeft, bgClass, blockColor }: ServiceAreaSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Commercial Viability (modules): full-width image banner with heading over it,
  // then module cards hanging below — mirrors the "How We Work Together" section.
  if (service.modules) {
    return (
      <section id={service.id} ref={ref} className="relative overflow-visible scroll-mt-20">
        {/* Image banner */}
        <div className="relative h-[400px] md:h-[460px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-24 md:pb-28">
            <div className={`w-16 h-1 bg-primary rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} />
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {service.title}
            </h2>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mb-3 leading-relaxed">{service.description}</p>
            {service.moduleLabel && (
              <p className="text-sm uppercase tracking-[2px] text-primary font-semibold">{service.moduleLabel}</p>
            )}
          </div>
        </div>

        {/* Overhanging module cards, spaced with arrows */}
        <div className="bg-cream pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-6xl mx-auto -mt-16 md:-mt-24 relative z-20">
              {service.modules.map((m, i) => (
                <Fragment key={i}>
                  <div
                    className={`flex-1 bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 200}ms` }}
                  >
                    <span className="text-5xl md:text-6xl font-serif font-light text-tan leading-none mb-4">{m.number}</span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{m.title}</h3>
                    <p className="text-secondary font-semibold italic text-sm mb-3 leading-snug">{m.question}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{m.body}</p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-foreground">{m.price}</span>
                    </div>
                  </div>
                  {i < service.modules!.length - 1 && (
                    <div className="flex items-center justify-center text-tan shrink-0">
                      <ArrowRight className="w-7 h-7 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {service.startupNote && (
              <p className="text-center text-sm text-muted-foreground/70 italic mt-8">{service.startupNote}</p>
            )}

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Standard layout (steps or bullet items)
  return (
    <section id={service.id} ref={ref} className={`py-16 ${bgClass} overflow-hidden scroll-mt-20`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ServiceImage service={service} imageLeft={imageLeft} blockColor={blockColor} isVisible={isVisible} />
          <div
            className={`${imageLeft ? "lg:order-2" : "lg:order-1"} transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

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
