import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Headphones, Mail, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/integrations/supabase/client";
import podcastCover from "@/assets/podcast-banner.png";

const SPOTIFY_URL = "https://open.spotify.com/show/the-device-files"; // Update with actual Spotify URL
const SUBSTACK_URL = "https://blythekarow.substack.com/";

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const InsightsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('substack-feed');
        if (error) {
          console.error('Error fetching posts:', error);
          return;
        }
        if (data?.posts) {
          setPosts(data.posts.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to fetch Substack posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '';
    }
  };

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
                    The Device Files
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
                  The Device Files Newsletter
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Actionable insights on product strategy, regulatory navigation, 
                  and commercialization delivered to your inbox.
                </p>
                
                {/* Recent posts from RSS */}
                {posts.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Recent Posts
                    </p>
                    <div className="space-y-2">
                      {posts.map((post, index) => (
                        <a
                          key={index}
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-2 bg-muted/50 rounded hover:bg-muted transition-colors group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                              {post.title}
                            </p>
                            <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0 mt-1" />
                          </div>
                          {post.pubDate && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {formatDate(post.pubDate)}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {loading && (
                  <div className="mb-4 space-y-2">
                    <div className="h-10 bg-muted animate-pulse rounded" />
                    <div className="h-10 bg-muted animate-pulse rounded" />
                  </div>
                )}
                
                {/* Substack subscribe embed */}
                <iframe
                  src="https://blythekarow.substack.com/embed"
                  width="100%"
                  height="150"
                  style={{ border: "1px solid #EEE", background: "white", borderRadius: "8px" }}
                  frameBorder="0"
                  scrolling="no"
                  title="The Device Files Newsletter Subscription"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
