import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

interface Module {
  number: string;
  title: string;
  question: string;
  body: string;
  price: string;
}

const modules: Module[] = [
  {
    number: "1",
    title: "Clinical Workflow Analysis",
    question:
      "Who are you selling to, and does your product solve a real pain point that fits their workflow?",
    body: "We pin down who actually buys your product, whether it solves a pain point they truly feel, and exactly where it fits in their clinical workflow. Everything downstream depends on getting this right.",
    price: "$5,000",
  },
  {
    number: "2",
    title: "Reimbursement Overview",
    question: "Who really pays for it, and is there an existing pathway to get paid?",
    body: "We determine whether healthcare coverage exists for your offering, who actually pays, and whether there's an established reimbursement pathway, so you know what you're working with before you commit.",
    price: "$10,000",
  },
  {
    number: "3",
    title: "Health Economics Strategy",
    question: "What will you have to prove to win the purchaser over?",
    body: "We define the economic story you'll need to tell, sometimes more than one, to gain traction with the people who hold the budget. It becomes the blueprint for the evidence and models you build later.",
    price: "$10,000",
  },
];

const MarketAccessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="market-access" ref={ref} className="bg-cream py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
            Market Access Fundamentals
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            The First Three Steps to Commercial Viability
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            It's tempting to put off market access and reimbursement work. It's expensive, and it
            feels like something you can sort out later. You can't. These three questions sit
            underneath every sound commercial strategy, and both investors and the market can tell
            when you haven't answered them. Skip this thinking and you can spend millions heading
            down the wrong path. So we built an affordable, entry-level way to get to the core of all
            three.
          </p>
          <p className="text-primary font-semibold mt-5 text-sm md:text-base leading-relaxed">
            These steps are completed in order. Each module builds on the one before it, and
            attempting the later work without the earlier foundations means guessing, which costs
            more to do.
          </p>
        </div>

        {/* Module cards */}
        <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {modules.map((m, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 lg:p-10 first:rounded-l-lg last:rounded-r-lg shadow-lg flex flex-col transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <span className="text-5xl md:text-6xl font-serif font-light text-tan leading-none mb-4">
                {m.number}
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">
                {m.title}
              </h3>
              <p className="text-primary font-semibold italic text-sm md:text-base mb-3 leading-snug">
                {m.question}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                {m.body}
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">{m.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing + startup note + CTA */}
        <div
          className={`text-center max-w-3xl mx-auto mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            From here the path gets clear: maybe it's clinical evidence to prove the economics, an
            evidence-generation plan, or a health-economics model. Those evolve over time. These
            three foundations can't.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4 italic">
            Early-stage and pre-funding startups: ask about reduced pricing.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketAccessSection;
