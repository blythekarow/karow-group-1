import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const RecentArticles = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('substack-feed');
        if (error) {
          console.error('Error fetching articles:', error);
          return;
        }
        if (data?.posts) {
          setArticles(data.posts);
        }
      } catch (err) {
        console.error('Failed to fetch Substack articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return '';
    }
  };

  return (
    <section id="recent-articles" ref={ref} className="pt-24 pb-16 bg-cream overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the 10,000+ Leaders Reading The Device Files Monthly
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recent articles and analysis: strategic insights on what it really takes to bring medical devices to market.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted animate-pulse rounded mb-3 w-20" />
                  <div className="h-6 bg-muted animate-pulse rounded mb-3" />
                  <div className="h-4 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Articles Grid */}
        {!loading && articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {articles.map((article, index) => (
              <Card
                key={index}
                className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-3">
                    {formatDate(article.pubDate)}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1 transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4"
          >
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              View All Articles on Substack
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
