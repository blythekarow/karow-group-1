import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import podcastBanner from "@/assets/podcast-banner.png";

const PODCAST_LINKS = {
  spotify: "https://open.spotify.com/show/the-device-files",
  apple: "https://podcasts.apple.com/podcast/the-device-files",
  website: "https://thedevicefiles.com",
};

const SUBSTACK_URL = "https://blythekarow.substack.com/";

const InsightsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      {/* Offset decorative elements */}
      <div className="absolute top-12 left-8 w-32 h-32 border-2 border-secondary/20 rounded-lg hidden lg:block" />
      <div className="absolute bottom-12 right-8 w-24 h-24 bg-primary/10 rounded-lg hidden lg:block" />
      <div className="absolute top-1/3 right-16 w-16 h-1 bg-secondary/30 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            MedTech Strategy & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two ways to stay ahead of the curve in MedTech, wearables, and digital therapeutics. 
            Get insights from Blythe and the team.
          </p>
        </div>

        {/* Two-column layout for Podcast and Newsletter */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Podcast Card */}
          <Card
            className={`bg-card border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Background offset box effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-tan/40 rounded-t-lg" />
              <img
                src={podcastBanner}
                alt="The Device Files Podcast"
                className="relative z-10 w-full h-48 object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                <Headphones className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Podcast
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                The Device Files
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Candid conversations with industry leaders, regulatory experts, and founders 
                shaping the future of medical devices and digital health.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 font-semibold"
                >
                  <a
                    href={PODCAST_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <a
                    href={PODCAST_LINKS.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <a
                    href={PODCAST_LINKS.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Card */}
          <Card
            className={`bg-accent text-accent-foreground border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full mb-4">
                  <Mail className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Newsletter
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                  Strategy Insights on Substack
                </h3>
                
                <p className="text-accent-foreground/80 mb-6 leading-relaxed">
                  Join executives getting actionable insights on product strategy, 
                  regulatory navigation, and commercialization for MedTech, wearables, 
                  and digital therapeutics. Delivered straight to your inbox.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-accent-foreground/80 text-sm">
                    <span className="text-primary">✓</span>
                    Strategic frameworks and playbooks
                  </li>
                  <li className="flex items-center gap-2 text-accent-foreground/80 text-sm">
                    <span className="text-primary">✓</span>
                    Industry trends and analysis
                  </li>
                  <li className="flex items-center gap-2 text-accent-foreground/80 text-sm">
                    <span className="text-primary">✓</span>
                    Lessons from 20+ years in MedTech
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-semibold flex-1"
                >
                  <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                    Subscribe Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                    Read Archive
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
