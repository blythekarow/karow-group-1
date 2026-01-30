import { Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import podcastBanner from "@/assets/podcast-banner.png";

const PODCAST_LINKS = {
  spotify: "https://open.spotify.com/show/the-device-files",
  apple: "https://podcasts.apple.com/podcast/the-device-files",
  website: "https://thedevicefiles.com",
};

const PodcastSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Podcast Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-xl" />
            <img
              src={podcastBanner}
              alt="The Device Files Podcast"
              className="relative z-10 w-full max-w-md mx-auto rounded-xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Headphones className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Podcast
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Device Files
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Join Blythe as she dives deep into the world of MedTech innovation. 
              Each episode features candid conversations with industry leaders, 
              regulatory experts, and founders who are shaping the future of 
              medical devices and digital health.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
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
                size="lg"
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
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <a
                  href={PODCAST_LINKS.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Podcasts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
