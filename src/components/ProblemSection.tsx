import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const painPoints = [
  "You're burning runway making decisions instead of building.",
  "Product, regulatory, and commercial plans aren't aligned.",
  "You need senior leadership but can't afford a full-time hire.",
  "The launch is coming and no one is actually managing it.",
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Sound Familiar?
          </h2>
          
          <div className="space-y-4 mb-10">
            {painPoints.map((point, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-muted-foreground flex items-start gap-3 text-left"
              >
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{point}</span>
              </p>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-secondary font-medium italic mb-10">
            You don't need more advisors. You need someone who makes things happen.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get Strategic Clarity
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
