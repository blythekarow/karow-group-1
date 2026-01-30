import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Headphones, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import podcastCover from "@/assets/podcast-banner.png";

const SPOTIFY_URL = "https://open.spotify.com/show/the-device-files"; // Update with actual Spotify URL
const SUBSTACK_URL = "https://blythekarow.substack.com/";

const InsightsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold tracking-[2px] uppercase text-primary mb-4 block">
            Stay Ahead of the Curve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            MedTech Strategy Insights
          </h2>
        </div>

        {/* Two equal cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: The Device Files Podcast */}
          <Card
            className={`overflow-hidden border-0 shadow-lg transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardContent className="p-0">
              {/* Podcast cover image */}
              <div className="aspect-video bg-accent overflow-hidden">
                <img
                  src={podcastCover}
                  alt="The Device Files Podcast"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Headphones className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Podcast
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  The Device Files Podcast
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategic insights on MedTech, wearables, and digital therapeutics. 
                  Real conversations with industry leaders driving innovation.
                </p>
                
                {/* Spotify embed placeholder */}
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/show/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="The Device Files Spotify Player"
                  />
                </div>
                
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-secondary transition-all duration-200"
                >
                  <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                    Listen on Spotify
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Substack Newsletter */}
          <Card
            className={`overflow-hidden border-0 shadow-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardContent className="p-0">
              {/* Newsletter header visual */}
              <div className="aspect-video bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center">
                <div className="text-center px-6">
                  <Mail className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
                  <p className="text-primary-foreground font-bold text-2xl">
                    The Karow Advisory
                  </p>
                  <p className="text-primary-foreground/80 text-lg">
                    Newsletter
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Newsletter
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  The Karow Advisory Newsletter
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Actionable insights on product strategy, regulatory navigation, 
                  and commercialization delivered to your inbox.
                </p>
                
                {/* Recent post previews */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Recent Posts
                  </p>
                  <div className="space-y-2">
                    <a
                      href={SUBSTACK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-muted rounded-lg hover:bg-tan/30 transition-colors"
                    >
                      <p className="text-sm font-medium text-foreground line-clamp-2">
                        Why Speed Without Strategy Is the #1 Killer of MedTech Startups
                      </p>
                    </a>
                    <a
                      href={SUBSTACK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-muted rounded-lg hover:bg-tan/30 transition-colors"
                    >
                      <p className="text-sm font-medium text-foreground line-clamp-2">
                        The Regulatory Roadmap Every DTx Founder Needs
                      </p>
                    </a>
                  </div>
                </div>
                
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                >
                  <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                    Subscribe Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
