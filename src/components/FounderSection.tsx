import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blytheHeadshot from "@/assets/blythe-headshot-new.png";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="founder" ref={ref} className="py-16 bg-background scroll-mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left side: Headshot with quote card */}
          <div
            className={`relative order-2 lg:order-1 flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Dark gold offset rectangle - same size as headshot */}
              <div className="absolute top-7 left-7 w-full max-w-md bg-secondary rounded-lg">
                <img src={blytheHeadshot} className="invisible w-full rounded-lg" alt="" aria-hidden="true" />
              </div>

              {/* Headshot */}
              <img
                src={blytheHeadshot}
                alt="Blythe Karow, Founder & CEO of The Karow Advisory Group"
                className="relative z-10 w-full max-w-md rounded-lg shadow-xl object-cover"
              />

              {/* Quote card - overlapping bottom-right */}
              <div className="relative z-20 -mt-16 ml-8 max-w-md md:max-w-[380px] bg-[hsl(186,100%,16%)] text-white p-6 rounded-lg shadow-xl">
                <p className="text-base md:text-lg italic font-medium leading-relaxed">
                  "Regulatory, clinical, and commercial can't be separated. Your claims are woven through everything – from your first product spec to your FDA submission to your customer conversations. Get one thread wrong early, and the whole fabric can unravel."
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
                I started my career as a nerdy biomedical engineer at Johns Hopkins, and quickly realized I wasn't made for the research world. But I also realized I had something many in my cohort lacked – I understand people, can translate their needs into clear product solutions and claims, and know how to get all the pieces of medical device commercialization to fit together.
              </p>
              <p>
                Over 25 years, I've led corporate and product strategies and launched or relaunched 35+ products across startups, growth-stage companies, and Fortune 50 MedTech. I know what it takes to get a device to market that delights the customer while navigating technical limitations, regulatory compliance, reimbursement requirements, and quality systems. It's a complex puzzle, and I'm good at solving it.
              </p>
              <p>
                I kept watching great products fail for entirely preventable reasons. Startups hiring and firing a variety of specialists – all with differing opinions – and cobbling together advice from 500 sources, not knowing when to spend money, on what, with whom, or at what stage.
              </p>
              <p>
                Getting a medical device to market is not something that can be solved solo, and your reimbursement or regulatory advisor cannot figure out your entire Go-to-Market strategy. What you need is a leader and a team who can help you captain the ship and navigate the full journey.
              </p>
              <p className="font-medium text-foreground">
                The Karow Advisory Group provides that leadership & expertise.
              </p>
            </div>
            
            {/* Signature */}
            <p className="text-foreground font-semibold">
              — Blythe Karow, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
