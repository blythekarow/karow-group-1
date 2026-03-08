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
    answer: "Absolutely. We offer a free discovery call to discuss your goals, challenges, and how we might help. Click here to schedule a call or fill out our contact form. This conversation is not a working session and does not include detailed strategy or recommendations. If there is alignment, we will outline next steps and potential engagement options.",
  },
  {
    question: "What stage companies do you work with?",
    answer: "We work with medical device and wearables companies from concept through to market launch - from pre-revenue startups to Fortune 50 companies launching new products. Our approach is tailored to your stage, budget, and specific needs.",
  },
  {
    question: "Do you only work with U.S.-based companies?",
    answer: "No. We work with companies globally, though our expertise is focused on U.S. market entry, FDA pathways, and U.S. reimbursement strategy. Many of our clients are international companies entering the U.S. market.",
  },
  {
    question: "How do you structure your engagements?",
    answer: "We offer several engagement models depending on your needs: discrete project-based work (assessments, strategic plans), retainer-based advisory, and fractional executive leadership. We tailor the engagement to fit your stage, budget, and goals.",
  },
  {
    question: "What makes you different from large consulting firms or specialized regulatory consultants?",
    answer: "We provide integrated product and commercialization strategy - not siloed regulatory or reimbursement advice. We're a boutique firm led by senior-level experts who've actually brought products to market, not junior consultants learning on your dime. You get big-firm expertise with personalized attention and strategic integration across all workstreams.",
  },
  {
    question: "Do you provide regulatory submission services?",
    answer: "Yes. We can lead regulatory submissions, coordinate with regulatory specialists, and provide strategic oversight to ensure submissions align with your broader commercialization strategy.",
  },
  {
    question: "What's your typical response time?",
    answer: "We respond to inquiries within 48 hours. For active projects, response time depends on engagement structure but typically within 24 hours.",
  },
  {
    question: "Do you work with investors or provide due diligence support?",
    answer: "Yes. We provide strategic assessment and due diligence support for investors evaluating medical device, Wearable, and DTx companies.",
  },
];

const ServicesFAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-background overflow-hidden">
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
