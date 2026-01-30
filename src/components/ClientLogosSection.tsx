import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ClientLogosSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Placeholder logos - replace with actual client logos when available
  const clients = [
    { name: "Client 1", placeholder: true },
    { name: "Client 2", placeholder: true },
    { name: "Client 3", placeholder: true },
    { name: "Client 4", placeholder: true },
    { name: "Client 5", placeholder: true },
  ];

  return (
    <section ref={ref} className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <p
          className={`text-center text-sm uppercase tracking-widest text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by MedTech Leaders
        </p>
        <div
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="group transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            >
              {/* Placeholder box - replace with actual logo images */}
              <div className="h-10 w-28 md:h-12 md:w-32 bg-border/50 rounded flex items-center justify-center text-xs text-muted-foreground group-hover:bg-tan/30">
                {client.name}
              </div>
            </div>
          ))}
        </div>
        <p
          className={`text-center text-xs text-muted-foreground mt-6 italic transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Client logos available upon request
        </p>
      </div>
    </section>
  );
};

export default ClientLogosSection;
