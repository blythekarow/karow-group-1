import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Linkedin } from "lucide-react";
import blytheHeadshot from "@/assets/blythe-headshot-new.png";
import thomasMoore from "@/assets/thomas-moore.png";
import natalieFreels from "@/assets/natalie-freels.png";
import adamSteadman from "@/assets/adam-steadman.png";
import donnaDiGangi from "@/assets/donna-digangi.png";
import rachelOffenburg from "@/assets/rachel-offenburg.png";

const teamMembers = [
  {
    name: "Blythe Karow",
    title: "Product & Commercialization Strategy",
    image: blytheHeadshot,
    linkedin: "https://www.linkedin.com/in/blythekarow/",
  },
  {
    name: "Donna DiGangi",
    title: "Regulatory Strategy & Submissions",
    image: donnaDiGangi,
    linkedin: "https://www.linkedin.com/in/donna-digangi/",
  },
  {
    name: "Kai Carter, MPH",
    title: "Reimbursement & Market Access",
    image: null,
    linkedin: "https://www.linkedin.com/in/kai-carter/",
  },
  {
    name: "Natalie Freels, PA-C",
    title: "Clinical Operations Strategy",
    image: natalieFreels,
    linkedin: "https://www.linkedin.com/in/natalie-freels/",
  },
  {
    name: "Adam Steadman",
    title: "General Operations & Manufacturing",
    image: adamSteadman,
    linkedin: "https://www.linkedin.com/in/adam-steadman/",
  },
  {
    name: "Thomas Moore, PhD",
    title: "Product Development & Manufacturing",
    image: thomasMoore,
    linkedin: "https://www.linkedin.com/in/thomas-moore-phd/",
  },
  {
    name: "Eirik Lima",
    title: "Legal, Regulatory Compliance & Quality",
    image: null,
    linkedin: "https://www.linkedin.com/in/eirik-lima/",
  },
  {
    name: "Erica Breese",
    title: "Payer & Provider Strategy",
    image: null,
    linkedin: "https://www.linkedin.com/in/erica-breese/",
  },
  {
    name: "Daniel Stoller",
    title: "Quality & Regulatory Strategy",
    image: null,
    linkedin: "https://www.linkedin.com/in/daniel-stoller/",
  },
  {
    name: "Rachel Offenburg",
    title: "Marketing, Pricing, & PR Strategy",
    image: rachelOffenburg,
    linkedin: "https://www.linkedin.com/in/roff/",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Led by Blythe Karow, The Karow Advisory Group brings together a curated network of senior-level experts across regulatory affairs, reimbursement strategy, clinical operations, and quality systems. Every team member has deep experience bringing medical devices to market - not as consultants working from textbooks, but as operators who've done it.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              {/* Photo */}
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden bg-muted relative">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Name & Title */}
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 leading-snug">
                {member.title}
              </p>

              {/* LinkedIn Link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
