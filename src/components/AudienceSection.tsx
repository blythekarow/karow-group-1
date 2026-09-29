const audiences = [
  {
    title: "For Medtech & Wearable Companies",
    body: "US commercialization planning: which market and payer path to pursue, the pipeline behind it, and the specialists who execute.",
  },
  {
    title: "For Consumer Tech & AI Companies",
    body: "Moving into connected health or the quantified self? We sit in your strategy meetings so you see a hot zone before you are in it.",
  },
  {
    title: "For Investors",
    body: "Evaluation of opportunities at the convergence: product viability, regulatory exposure, and how risky the path really is.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-background text-center mb-12">
          Where We Help
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="bg-background/10 border-t-4 border-primary rounded-lg p-8">
              <h3 className="text-lg font-bold text-background mb-3">{a.title}</h3>
              <p className="text-background/80 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
