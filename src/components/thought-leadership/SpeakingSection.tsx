import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mic2, Users, BookOpen, Radio } from "lucide-react";
import conferenceAudience from "@/assets/conference-audience.jpg";

interface SpeakingTopic {
  title: string;
}

const topics: SpeakingTopic[] = [
  { title: "Where to draw the line between wellness and medical device" },
  { title: "Integrated commercialization strategy for medical devices" },
  { title: "What startups get wrong about integrating subject expertise" },
  { title: "Building investor-ready commercialization plans" },
];

interface SpeakingFormat {
  icon: React.ElementType;
  title: string;
}

const formats: SpeakingFormat[] = [
  { icon: Mic2, title: "Keynote presentations" },
  { icon: Users, title: "Panel participation" },
  { icon: BookOpen, title: "Workshops" },
  { icon: Radio, title: "Live podcast recording" },
];

const SpeakingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-16 overflow-hidden relative bg-background"
    >
      {/* Background image with gradient fade from right */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${conferenceAudience})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent) / 0) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-4">
              Speaking
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Available for Speaking Engagements & Industry Events
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Topics */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-xl font-bold text-background mb-6">
                Featured Topics
              </h3>
              <ul className="space-y-4">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary shrink-0 text-lg leading-none">•</span>
                    <span className="text-background/90">{topic.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formats */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-xl font-bold text-background mb-6">
                Available Formats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {formats.map((format, index) => (
                  <Card
                    key={index}
                    className="bg-card border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                        <format.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {format.title}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-base font-semibold px-8 py-4 rounded-md"
            >
              <a href="mailto:blythe.karow@thekarowgroup.com?subject=Speaking Engagement Inquiry">
                Inquire About Speaking
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
