import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blytheCasual from "@/assets/blythe-casual.png";
import blytheProfessional from "@/assets/blythe-professional.png";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="founder" ref={ref} className="py-16 bg-background scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left side: Overlapping photos with quote card */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[550px] md:h-[650px]">
              {/* Chartreuse offset rectangle behind casual photo */}
              <div className="absolute top-8 left-0 w-56 md:w-72 h-72 md:h-80 bg-primary rounded-lg opacity-70" />
              
              {/* Casual photo (black turtleneck, green glass) - back/left */}
              <div className="absolute top-0 left-4 md:left-8 z-10">
                <img
                  src={blytheCasual}
                  alt="Blythe Karow - casual portrait"
                  className="w-48 md:w-64 h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
              
              {/* Professional photo (navy turtleneck, white bg) - front/right, cropped */}
              <div className="absolute top-24 md:top-32 left-48 md:left-60 z-20 w-44 md:w-56 h-56 md:h-72 rounded-lg shadow-2xl overflow-hidden">
                <img
                  src={blytheProfessional}
                  alt="Blythe Karow - professional portrait"
                  className="w-full h-full object-cover object-top scale-125"
                />
              </div>
              
              {/* Floating quote card */}
              <div className="absolute bottom-4 md:bottom-8 left-4 right-4 md:left-0 md:right-auto md:w-[340px] z-30 bg-accent text-white p-6 rounded-lg shadow-xl">
                <p className="text-base md:text-lg italic font-medium leading-relaxed">
                  "Regulatory, clinical, and commercial can't be separated. Your claims are woven through everything — from your first product specification to your FDA submission to your customer conversation at market. Get one thread wrong early, and the whole fabric unravels."
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Section Label */}
            <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
              A Note from Our Founder
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why I Founded The Karow Advisory Group
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>
                I started my career as a nerdy biomedical engineer at Johns Hopkins, and quickly realized I wasn't made for the research world, but I also realized that I had the street smarts that some of my cohort lacked. I understand people, can translate their needs into clear product solutions and claims, and know how to get all of the pieces of medical device commercialization to fit together.
              </p>
              <p>
                Over 25 years, I've led corporate and product strategies and launched or relaunched 35+ products across startups, growth-stage companies, and Fortune 50 MedTech. I know what it takes to get a device to market that delights customers while navigating technical limitations, regulatory compliance, reimbursement requirements, and quality systems. It's a complex puzzle, and I'm good at solving it.
              </p>
              <p>
                I started The Karow Advisory Group because I saw what happens when startups don't have that integrated expertise. They hire specialists in different directions, cobble together advice from 500 sources, and don't know when to spend money, on what, with whom, or at what stage.
              </p>
              <p>
                Getting a medical device to market is not something that can be solved solo, and your regulatory advisor cannot figure out your entire Go-to-Market strategy. What you need is someone who can help you captain the ship, who can navigate the full journey and knows how to coordinate a specialized crew to work in unison.
              </p>
              <p className="font-medium text-foreground">
                The Karow Advisory Group provides that leadership.
              </p>
            </div>
            
            {/* Signature */}
            <p className="text-foreground font-semibold">
              - Blythe Karow, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
