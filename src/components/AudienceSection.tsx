import wearableImage from "@/assets/wearable-device-testing.jpg";
import techImage from "@/assets/medtech-abstract-bg.jpg";
import investorImage from "@/assets/business-handshake.jpg";

const audiences = [
  {
    title: "For Medtech & Wearable Companies",
    body: "US commercialization planning: which market and payer path to pursue, the pipeline behind it, and the specialists who execute.",
    image: wearableImage,
  },
  {
    title: "For Consumer Tech & AI Companies",
    body: "Moving into connected health or the quantified self? We sit in your strategy meetings so you see a hot zone before you are in it.",
    image: techImage,
  },
  {
    title: "For Investors",
    body: "Evaluation of opportunities at the convergence: product viability, regulatory exposure, and how risky the path really is.",
    image: investorImage,
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Where We Help
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="relative rounded-lg overflow-hidden min-h-[420px] flex flex-col justify-end group">
              <img
                src={a.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/70 to-accent/20" />
              <div className="relative z-10 p-8">
                <div className="w-12 h-1 bg-primary mb-4" />
                <h3 className="text-xl font-bold text-background mb-3">{a.title}</h3>
                <p className="text-background/85 leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
