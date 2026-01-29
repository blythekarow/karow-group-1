import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import founderImage from "@/assets/blythe-headshot.png";

const CALENDLY_URL = "https://calendly.com/blythe-karow/new-client-introductory-meeting";

const credentials = [
  "20+ Years MedTech Experience",
  "Former Startup CEO",
  "Fortune 50 Product Leadership",
  "Wearables & Digital Therapeutics Expert",
];

const FounderSection = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image with layered effect */}
          <div className="relative order-2 lg:order-1">
            {/* Offset background box */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-tan rounded-lg opacity-60" />
            
            {/* Main image */}
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Blythe Karow - Founder & Principal"
                className="w-full h-auto rounded-lg shadow-2xl object-cover max-w-md mx-auto"
              />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20" />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Blythe Karow
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I started The Karow Advisory Group because I kept seeing the same pattern: 
                brilliant MedTech teams burning through runway and losing momentum—not because 
                their science failed, but because their strategy did.
              </p>
              <p>
                After 20+ years leading product strategy at Fortune 50 companies and as a 
                startup CEO myself, I know what it takes to get a regulated product from 
                whiteboard to market. I also know that most startups can't afford the 
                enterprise consulting firms that hoard this expertise.
              </p>
              <p className="text-foreground font-medium">
                Your mission deserves more than slide decks. It deserves traction.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((credential, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-cream text-secondary font-medium"
                >
                  {credential}
                </Badge>
              ))}
            </div>
            
            <p className="text-lg text-secondary italic mb-8">
              — Blythe Karow, Founder & Principal
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-6"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Work With Blythe
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
