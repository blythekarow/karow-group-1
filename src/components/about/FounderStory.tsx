import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import blytheHeadshot from "@/assets/blythe-headshot-new.png";

const FounderStory = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left side: Headshot with quote */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
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
                  "Regulatory, clinical, and commercial can't be separated. Your claims are woven through everything - from your first product specification to your FDA submission to your customer conversation at market. Get one thread wrong early, and the whole fabric unravels."
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

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I started The Karow Advisory Group because I kept watching great products fail for entirely preventable reasons. I started my career as a nerdy biomedical engineer at Johns Hopkins, and quickly realized I wasn't made for the research world, but I also realized that I had the street smarts that some of my cohort lacked. I understand people, can translate their needs into clear product solutions and claims, and know how to get all of the pieces of medical device commercialization to fit together.
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
            <p className="mt-8 text-foreground font-semibold">
              - Blythe Karow, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
