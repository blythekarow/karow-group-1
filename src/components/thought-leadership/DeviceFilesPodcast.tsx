import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Headphones, ExternalLink, Mic } from "lucide-react";
import podcastBanner from "@/assets/podcast-banner.png";

const SPOTIFY_URL = "https://open.spotify.com/search/the%20device%20files";

const DeviceFilesPodcast = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative hidden lg:block">
            {/* Bold background block — top-left */}
            <div className="absolute -top-8 -left-8 w-[55%] h-[50%] bg-accent" />
            <img
              src={podcastBanner}
              alt="The Device Files Podcast"
              className="relative z-10 w-full max-w-md mx-auto shadow-xl"
            />
          </div>

          {/* Mobile image */}
          <div className="lg:hidden relative">
            <div className="absolute -top-4 -left-4 w-[40%] h-[35%] bg-accent" />
            <img
              src={podcastBanner}
              alt="The Device Files Podcast"
              className="relative z-10 w-full max-w-md mx-auto shadow-xl"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Headphones className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">Podcast</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Device Files Podcast: Commercialization Confidential
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Join Blythe as she dives deep into the world of MedTech innovation.
              Each episode features candid conversations with industry leaders,
              regulatory experts, and founders who are shaping the future of
              medical devices and digital health.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
              >
                <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                  Listen Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Card className="bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] max-w-2xl mx-auto mt-8">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">Share Your Commercialization Story</h4>
              <p className="text-sm text-muted-foreground">
                Have insights to share? We're always looking for guests with unique perspectives.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="mailto:thedevicefiles@gmail.com?subject=Podcast Guest Nomination">Nominate</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeviceFilesPodcast;
