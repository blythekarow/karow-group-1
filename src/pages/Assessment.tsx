import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Calendar, Mail, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Answer = "yes" | "partially" | "no" | null;

interface Dimension {
  letter: string;
  title: string;
  subtitle: string;
  questions: string[];
}

const dimensions: Dimension[] = [
  {
    letter: "D",
    title: "Development",
    subtitle: "Design History & Development Discipline",
    questions: [
      "Do you have documented user needs that drive your product specifications?",
      "Have you started a Design History File (DHF) or equivalent development documentation?",
      "Is risk management (ISO 14971) integrated into your design and development process?",
      "Do you have a plan for post-market surveillance and feedback loops back into design?",
    ],
  },
  {
    letter: "E",
    title: "Engagement & Economics",
    subtitle: "FDA Engagement & Reimbursement Strategy",
    questions: [
      "Have you spoken with the FDA to confirm your regulatory pathway?",
      "Have you explored and determined whether any special FDA programs (e.g., Breakthrough Device Designation, the TAP program) could benefit your product pathway?",
      "Is your business model built around a clear understanding of who pays and how?",
      "Do you fully understand your clinical workflow and the health economic impact your product will create for the purchaser?",
    ],
  },
  {
    letter: "V",
    title: "Verification & Validation",
    subtitle: "Verification & Validation",
    questions: [
      "Have you defined clear pass/fail criteria for health-impacting features?",
      "Are you validating the actual system you will ship, not just isolated components?",
      "Do your test conditions reflect real-world use, including edge cases and misuse?",
      "Is your V&V plan connected to your regulatory submission requirements?",
    ],
  },
  {
    letter: "I",
    title: "Intelligence & Information",
    subtitle: "Intelligence & Information Governance",
    questions: [
      "Do you know exactly what data you collect, where it comes from, and how it is used?",
      "Have you defined rules for what data can and cannot be used for analytics, ML training, or new features?",
      "Is PHI/PII separated and protected with documented retention and deletion policies?",
      "Are you confident your cybersecurity strategy is current, comprehensive, and fully built out — covering authentication, encryption, vulnerability management, and safe update mechanisms?",
    ],
  },
  {
    letter: "C",
    title: "Claims & Category",
    subtitle: "Claims & Category Boundaries",
    questions: [
      "Do you have a formal claims library that defines what you can and cannot say for each feature?",
      "Have you fully documented the evidence that backs up each claim?",
      "Is your claims strategy aligned with your intended FDA indication for use?",
      "Is the claims library actively used by marketing, sales, product, and partnerships as a working standard — not just a document that exists?",
    ],
  },
  {
    letter: "E",
    title: "Evidence",
    subtitle: "Evidence Strategy",
    questions: [
      "Do you know what level of evidence each of your claims requires?",
      "Is your evidence strategy aligned with both your regulatory pathway and your market access goals?",
      "Have you mapped out how studies will build on each other over time rather than being one-offs?",
      "Does your validation data actually reflect the populations and environments you claim to serve?",
    ],
  },
];

const scoringGuide = [
  { range: "80–100%", level: "Strong", description: "Solid foundations across most dimensions. Focus on closing remaining gaps." },
  { range: "60–79%", level: "Developing", description: "Meaningful progress but notable gaps that could create expensive problems at later stages." },
  { range: "40–59%", level: "Early Stage", description: "Critical gaps exist across multiple dimensions that need structured attention before moving forward." },
  { range: "0–39%", level: "Foundation Needed", description: "Significant foundational work is required. A strategic roadmap would help prioritize next steps." },
];

const Assessment = () => {
  const [currentDimension, setCurrentDimension] = useState(0);
  const [answers, setAnswers] = useState<Answer[][]>(
    dimensions.map((d) => d.questions.map(() => null))
  );
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const totalQuestions = dimensions.reduce((sum, d) => sum + d.questions.length, 0);
  const answeredCount = answers.flat().filter((a) => a !== null).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  const setAnswer = (qIndex: number, value: Answer) => {
    setAnswers((prev) => {
      const next = prev.map((d) => [...d]);
      next[currentDimension][qIndex] = value;
      return next;
    });
  };

  const getScore = (answer: Answer) => {
    if (answer === "yes") return 2;
    if (answer === "partially") return 0.5;
    return 0;
  };

  const dimensionScores = dimensions.map((_, i) =>
    answers[i].reduce((sum, a) => sum + getScore(a), 0)
  );
  const totalScore = dimensionScores.reduce((a, b) => a + b, 0);
  const maxScore = 48;
  const percentageScore = Math.round((totalScore / maxScore) * 100);

  const getReadinessLevel = (pct: number) => {
    if (pct >= 80) return scoringGuide[0];
    if (pct >= 60) return scoringGuide[1];
    if (pct >= 40) return scoringGuide[2];
    return scoringGuide[3];
  };

  const readiness = getReadinessLevel(percentageScore);

  const allCurrentAnswered = answers[currentDimension].every((a) => a !== null);
  const allAnswered = answers.flat().every((a) => a !== null);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Strong": return "text-green-600";
      case "Developing": return "text-primary";
      case "Early Stage": return "text-orange-500";
      default: return "text-red-500";
    }
  };

  const handleSendReport = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSendingEmail(true);
    try {
      const reportData = {
        email,
        percentageScore,
        readinessLevel: readiness.level,
        readinessDescription: readiness.description,
        dimensions: dimensions.map((dim, i) => ({
          letter: dim.letter,
          title: dim.title,
          subtitle: dim.subtitle,
          score: dimensionScores[i],
          maxScore: 8,
          percentage: Math.round((dimensionScores[i] / 8) * 100),
          readinessLevel: getReadinessLevel(Math.round((dimensionScores[i] / 8) * 100)).level,
          questions: dim.questions.map((q, qi) => ({
            question: q,
            answer: answers[i][qi],
            score: getScore(answers[i][qi]),
          })),
        })),
        totalScore,
        maxTotalScore: maxScore,
      };

      const { error } = await supabase.functions.invoke("send-assessment-report", {
        body: reportData,
      });

      if (error) throw error;

      setEmailSent(true);
      toast.success("Your detailed report has been sent! Check your inbox.");
    } catch (err) {
      console.error("Error sending report:", err);
      toast.error("There was an issue sending the report. Please try again.");
    } finally {
      setSendingEmail(false);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your D.E.V.I.C.E. Readiness Score
              </h1>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                {percentageScore}%
              </div>
              <p className={`text-2xl font-semibold ${getLevelColor(readiness.level)}`}>
                {readiness.level}
              </p>
              <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
                {readiness.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email capture for full report */}
              <div className="bg-accent/10 rounded-xl p-8 text-center space-y-4 flex flex-col">
                {!emailSent ? (
                  <>
                    <Mail className="w-10 h-10 text-primary mx-auto" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Want to know where to focus first?
                    </h3>
                    <p className="text-muted-foreground">
                      Enter your email and we'll send you a detailed breakdown of your scores by dimension — with guidance on what each gap means and where to start.
                    </p>
                    <div className="flex flex-col gap-3 max-w-md mx-auto mt-auto w-full">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleSendReport}
                        disabled={sendingEmail || !email}
                        className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                      >
                        {sendingEmail ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send My Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                    <h3 className="text-xl font-semibold text-foreground">Report Sent!</h3>
                    <p className="text-muted-foreground">
                      Check your inbox at <strong>{email}</strong> for your detailed D.E.V.I.C.E. Readiness Report.
                    </p>
                  </>
                )}
              </div>

              {/* Discovery call CTA */}
              <div className="bg-cream rounded-xl p-8 text-center space-y-4 flex flex-col">
                <Calendar className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Ready to close the gaps?</h3>
                <p className="text-muted-foreground">
                  If this assessment surfaced gaps you weren't sure how to address, that's exactly where The Karow Advisory Group can help.
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all"
                  >
                    <a href="https://calendly.com/blythe-karow/new-client-introductory-meeting">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Discovery Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setShowResults(false);
                  setEmailSent(false);
                  setEmail("");
                  setCurrentDimension(0);
                  setAnswers(dimensions.map((d) => d.questions.map(() => null)));
                }}
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const dim = dimensions[currentDimension];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[2px] text-primary font-semibold mb-3">
              D.E.V.I.C.E. Readiness Assessment
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Ready Is Your Product for Commercialization?
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Answer 24 questions across 6 dimensions to identify gaps in your commercialization readiness.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{answeredCount} of {totalQuestions} questions</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>

          {/* Dimension tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {dimensions.map((d, i) => {
              const dimAnswered = answers[i].every((a) => a !== null);
              return (
                <button
                  key={i}
                  onClick={() => setCurrentDimension(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    i === currentDimension
                      ? "bg-accent text-accent-foreground"
                      : dimAnswered
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span className="w-6 h-6 rounded-md bg-background flex items-center justify-center text-xs font-bold">
                    {d.letter}
                  </span>
                  <span className="hidden md:inline">{d.title}</span>
                  {dimAnswered && <CheckCircle2 className="w-4 h-4 text-primary" />}
                </button>
              );
            })}
          </div>

          {/* Current dimension */}
          <div className="bg-cream rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                {dim.letter}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{dim.title}</h2>
                <p className="text-sm text-muted-foreground">{dim.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              {dim.questions.map((q, qi) => (
                <div key={qi} className="bg-background rounded-lg p-5">
                  <p className="font-medium text-foreground mb-4">
                    {qi + 1}. {q}
                  </p>
                  <div className="flex gap-3">
                    {(["yes", "partially", "no"] as const).map((val) => (
                      <button
                        key={val}
                        onClick={() => setAnswer(qi, val)}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border-2 ${
                          answers[currentDimension][qi] === val
                            ? val === "yes"
                              ? "bg-green-50 border-green-500 text-green-700"
                              : val === "partially"
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-red-50 border-red-400 text-red-600"
                            : "border-muted bg-background text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        {val === "yes" ? "Yes" : val === "partially" ? "Partially" : "No"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentDimension((prev) => prev - 1)}
              disabled={currentDimension === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentDimension < dimensions.length - 1 ? (
              <Button
                onClick={() => setCurrentDimension((prev) => prev + 1)}
                disabled={!allCurrentAnswered}
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowResults(true);
                  window.scrollTo(0, 0);
                }}
                disabled={!allAnswered}
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                See My Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Assessment;
