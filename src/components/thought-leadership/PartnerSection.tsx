import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail } from "lucide-react";

const PARTNER_EMAIL = "mailto:thedevicefiles@gmail.com?subject=Partnership%20Inquiry%20-%20The%20Device%20Files";

interface Tier {
  name: string;
  lead?: string;
  items: string[];
  note?: string;
}

const tiers: Tier[] = [
  {
    name: "Annual Partner",
    items: [
      "Highlighted in every weekly issue, with a callout and link",
      "Listing on the Substack partner page",
      "Included in LinkedIn posts tied to the content",
      "Referrals, when appropriate, to readers and Karow Advisory clients",
    ],
  },
  {
    name: "Strategic Partner",
    lead: "Everything in Annual Partner, plus:",
    items: [
      "Featured in an article",
      "Two podcast appearances",
      "A moderated virtual webinar or panel",
      "Reusable content assets",
    ],
    note: "Content collaborations are limited, aligned to editorial themes, and at the author's discretion.",
  },
  {
    name: "Premier Podcast Partner",
    lead: "A standalone podcast sponsorship, separate from the publication partnerships:",
    items: [
      "Exclusive podcast sponsor, with a verbal advertisement in every episode",
      "Logo in podcast emails and visuals",
      "Category exclusivity in podcast content",
    ],
    note: "Available only to companies serving the MedTech community.",
  },
];

const PartnerSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="partner" ref={ref} className="py-16 md:py-20 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">Limited spots available</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partner with The Device Files</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Device Files is selective about partnerships, working only with companies whose values align with the
            quality and independence of the publication. A limited number of partnership spots open each year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`bg-cream rounded-xl border border-border p-7 flex flex-col transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{t.name}</h3>
              {t.lead && <p className="text-sm font-semibold text-primary mb-3">{t.lead}</p>}
              <ul className="space-y-2 mb-4">
                {t.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              {t.note && <p className="text-xs italic text-muted-foreground/70 mt-auto pt-2">{t.note}</p>}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
          >
            <a href={PARTNER_EMAIL}>
              <Mail className="mr-2 h-5 w-5" />
              Discuss a Partnership
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
