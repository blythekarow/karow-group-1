import { useScrollAnimation } from "@/hooks/use-scroll-animation";


const NewsletterSignup = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Never Miss an Insight
          </h2>
          
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Join 10,000+ MedTech leaders getting monthly insights on product strategy, 
            regulatory navigation, and commercialization.
          </p>
          
          {/* Substack embed */}
          <div className="max-w-md mx-auto">
            <iframe
              src="https://blythekarow.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: "1px solid rgba(255,255,255,0.2)", background: "white", borderRadius: "12px" }}
              frameBorder="0"
              scrolling="no"
              title="The Device Files Newsletter Subscription"
            />
          </div>
          
          <p className="text-sm text-accent-foreground/60 mt-4">
            Free. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
