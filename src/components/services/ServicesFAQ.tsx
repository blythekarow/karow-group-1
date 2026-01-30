import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Can I have an initial discussion before engaging your services?",
    answer: "Absolutely. We offer a free discovery call to discuss your goals and challenges. This helps us understand your situation and determine how we can best support you.",
  },
  {
    question: "What stage companies do you work with?",
    answer: "From pre-revenue startups to Fortune 50 companies launching new products. Our approach scales to meet you where you are in your commercialization journey.",
  },
  {
    question: "How do you structure your engagements?",
    answer: "We offer flexible engagement models including project-based work, retainer-based advisory, or fractional executive leadership. We'll recommend the best fit based on your needs.",
  },
  {
    question: "What makes you different from large consulting firms?",
    answer: "Senior-level experts who've actually brought products to market, not junior consultants learning on your dime. We provide hands-on guidance and execution support, not just slide decks.",
  },
  {
    question: "Do you provide regulatory submission services?",
    answer: "Yes, regulatory submission support is part of our Commercialization Planning & Execution service. We can guide you through 510(k), De Novo, and other FDA pathways.",
  },
];

const ServicesFAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
