import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, ExternalLink } from "lucide-react";

const SUBSTACK_URL = "https://blythekarow.substack.com/";

// Placeholder articles - in production, these would be fetched from Substack RSS
interface Article {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

const placeholderArticles: Article[] = [
  {
    title: "The Wellness Carve-Out: When Your Wearable Doesn't Need FDA Clearance",
    excerpt: "Understanding the strategic implications of positioning your device as a wellness product vs. a regulated medical device.",
    date: "Jan 2026",
    url: SUBSTACK_URL,
  },
  {
    title: "Why Your Regulatory Strategy Shouldn't Live in a Silo",
    excerpt: "The hidden costs of treating regulatory, reimbursement, and commercial strategy as separate workstreams.",
    date: "Jan 2026",
    url: SUBSTACK_URL,
  },
  {
    title: "The Evidence Gap: What Most MedTech Startups Miss",
    excerpt: "Building a clinical evidence strategy that supports both regulatory clearance and payer coverage.",
    date: "Dec 2025",
    url: SUBSTACK_URL,
  },
  {
    title: "Reimbursement Readiness: A Framework for Early-Stage Devices",
    excerpt: "How to think about payer strategy before you even have a product on the market.",
    date: "Dec 2025",
    url: SUBSTACK_URL,
  },
  {
    title: "From Prototype to Commercialization: The Integration Imperative",
    excerpt: "Why the most successful device companies think about commercialization from day one.",
    date: "Nov 2025",
    url: SUBSTACK_URL,
  },
  {
    title: "The Investor Pitch That Actually Works",
    excerpt: "What sophisticated MedTech investors are really looking for in your commercialization story.",
    date: "Nov 2025",
    url: SUBSTACK_URL,
  },
];

const RecentArticles = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="recent-articles" ref={ref} className="py-24 bg-cream overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Articles & Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic insights on what it really takes to bring medical devices to market.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {placeholderArticles.map((article, index) => (
            <Card
              key={index}
              className={`bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="p-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-3">
                  {article.date}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a
                  href={article.url}
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
