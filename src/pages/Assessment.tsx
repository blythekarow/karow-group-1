import { useEffect, useState } from "react";
import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar, Mail, Loader2, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { sendReportToZapier } from "@/lib/assessmentReport";
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
    subtitle: "Product Development Discipline and Design History",
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
  { range: "85–100%", level: "Strong", description: "Solid foundations across most dimensions. Focus on closing the last few gaps." },
  { range: "70–84%", level: "On Track", description: "You're in good shape, with most of the pieces in place. A focused push on the remaining gaps gets you commercialization-ready." },
  { range: "55–69%", level: "Developing", description: "Meaningful progress, but notable gaps that could create expensive problems at later stages." },
  { range: "35–54%", level: "Early Stage", description: "Critical gaps exist across multiple dimensions that need structured attention before moving forward." },
  { range: "0–34%", level: "Foundation Needed", description: "Significant foundational work is required. A strategic roadmap would help prioritize next steps." },
];

const Assessment = () => {
  usePageSEO({
    title: "Commercialization Readiness Assessment | The Karow Advisory Group",
    description: "Take our free MedTech commercialization readiness assessment. Evaluate your strategy, market access, and go-to-market preparedness in minutes.",
  });

  const [currentDimension, setCurrentDimension] = useState(0);
  const [answers, setAnswers] = useState<Answer[][]>(
    dimensions.map((d) => d.questions.map(() => null))
  );
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Jump to the top whenever the dimension changes or results are shown.
  // Temporarily disables the global `scroll-behavior: smooth` so the jump is
  // instant and isn't interrupted by the layout shift on re-render.
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [currentDimension, showResults]);

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
    if (answer === "partially") return 0.75;
    return 0;
  };

  const dimensionScores = dimensions.map((_, i) =>
    answers[i].reduce((sum, a) => sum + getScore(a), 0)
  );
  const totalScore = dimensionScores.reduce((a, b) => a + b, 0);
  const maxScore = 48;
  const percentageScore = Math.round((totalScore / maxScore) * 100);

  const getReadinessLevel = (pct: number) => {
    if (pct >= 85) return scoringGuide[0];
    if (pct >= 70) return scoringGuide[1];
    if (pct >= 55) return scoringGuide[2];
    if (pct >= 35) return scoringGuide[3];
    return scoringGuide[4];
  };

  const readiness = getReadinessLevel(percentageScore);

  const allCurrentAnswered = answers[currentDimension].every((a) => a !== null);
  const allAnswered = answers.flat().every((a) => a !== null);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Strong": return "text-green-600";
      case "On Track": return "text-sky-600";
      case "Developing": return "text-yellow-600";
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

      await sendReportToZapier(reportData);

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
    const dimData = dimensions.map((dim, i) => {
      const score = dimensionScores[i];
      const pct = Math.round((score / 8) * 100);
      return { letter: dim.letter, title: dim.title, subtitle: dim.subtitle, score, pct, level: getReadinessLevel(pct).level, questions: dim.questions, answers: answers[i] };
    });
    const gaps = [...dimData].sort((a, b) => a.pct - b.pct).slice(0, 2);
    const previewDim = dimData[0];
    const levelDot = (lvl: string) => lvl === "Strong" ? "🟢" : lvl === "On Track" ? "🔵" : lvl === "Developing" ? "🟡" : lvl === "Early Stage" ? "🟠" : "🔴";
    const ansIcon = (a: Answer) => a === "yes" ? "✅" : a === "partially" ? "🟡" : "❌";
    const ansLabel = (a: Answer) => a === "yes" ? "Yes" : a === "partially" ? "Partially" : "No";
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Your D.E.V.I.C.E.™ Readiness Score
              </h1>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-1">
                {percentageScore}%
              </div>
              <p className={`text-xl font-semibold ${getLevelColor(readiness.level)}`}>
                {readiness.level}
              </p>
            </div>

            {/* Report preview + email gate (equal height) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-stretch">
              {/* LEFT: live preview of the full report */}
              <div className="flex flex-col">
                <p className="text-xs uppercase tracking-[2px] text-secondary font-semibold mb-3 text-center">
                  A peek at your full report
                </p>
                <div className="relative bg-white border border-border rounded-xl overflow-hidden shadow-xl flex-1" style={{ maxHeight: 430 }}>
                  <div className="text-center py-5 px-4" style={{ backgroundColor: "#0e4f4f" }}>
                    <h3 className="font-bold text-lg" style={{ color: "#C8E842" }}>D.E.V.I.C.E.™ Readiness Report</h3>
                    <p className="text-xs mt-1" style={{ color: "#cfe0df" }}>The Karow Advisory Group</p>
                  </div>
                  <div className="p-5">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold" style={{ color: "#0e4f4f" }}>{percentageScore}%</div>
                      <div className={`font-bold text-sm ${getLevelColor(readiness.level)}`}>{levelDot(readiness.level)} {readiness.level}</div>
                    </div>
                    <div className="text-sm leading-relaxed mb-4 p-3 rounded-r-md" style={{ backgroundColor: "#eef3f2", borderLeft: "4px solid #0e4f4f", color: "#333" }}>
                      <span style={{ color: "#0e4f4f", fontWeight: 700 }}>Your biggest gaps:</span> the areas with the most room to grow are <strong>{gaps[0].title}</strong> and <strong>{gaps[1].title}</strong>. You will find tailored guidance for these and every dimension inside.
                    </div>
                    <table className="w-full border-collapse" style={{ fontSize: "12.5px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#f3f4f6" }}>
                          <th className="text-left p-2" style={{ color: "#374151" }}>Dimension</th>
                          <th className="text-left p-2" style={{ color: "#374151" }}>Score</th>
                          <th className="text-left p-2" style={{ color: "#374151" }}>Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dimData.map((d, i) => (
                          <tr key={i} className="border-t border-border">
                            <td className="p-2" style={{ color: "#333" }}>{d.letter} &middot; {d.title}</td>
                            <td className="p-2" style={{ color: "#333" }}>{d.score}/8</td>
                            <td className="p-2" style={{ color: "#333" }}>{levelDot(d.level)} {d.level}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4 px-3 py-2 rounded-t-md text-white text-xs font-bold" style={{ backgroundColor: "#0e4f4f" }}>
                      <span>{previewDim.letter} &mdash; {previewDim.title}</span>
                      <span style={{ color: "#C8E842" }}>{previewDim.score}/8 &middot; {levelDot(previewDim.level)}</span>
                    </div>
                    {previewDim.questions.slice(0, 3).map((q, i) => (
                      <div key={i} className="flex justify-between gap-2 px-3 py-2 border border-t-0 border-border" style={{ fontSize: "11px", color: "#444" }}>
                        <span>{ansIcon(previewDim.answers[i])} {q}</span>
                        <span className="font-semibold whitespace-nowrap">{ansLabel(previewDim.answers[i])}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-white pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-4 text-center px-4">
                    <Lock className="w-6 h-6 mx-auto mb-1" style={{ color: "#0e4f4f" }} />
                    <p className="font-bold text-sm" style={{ color: "#0e4f4f" }}>Full breakdown across all 6 dimensions</p>
                    <p className="text-xs text-muted-foreground">with tailored &ldquo;where to focus&rdquo; guidance for every gap</p>
                  </div>
                </div>
              </div>

              {/* RIGHT: email gate (stretches to match preview height) */}
              <div className="flex flex-col">
                <p className="text-xs uppercase tracking-[2px] font-semibold mb-3 text-center" aria-hidden="true">&nbsp;</p>
                <div className="rounded-xl p-7 text-white flex-1 flex flex-col justify-center" style={{ backgroundColor: "#0e4f4f" }}>
                  {!emailSent ? (
                    <>
                      <Mail className="w-8 h-8 mb-2" style={{ color: "#C8E842" }} />
                      <h3 className="text-xl font-bold mb-2">Get your complete report</h3>
                      <p className="text-sm mb-4" style={{ color: "#d5e4e3" }}>
                        Enter your email and we will send the full D.E.V.I.C.E.™ breakdown you are previewing, yours to keep and share.
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {[
                          "All 6 dimensions scored question by question",
                          "Tailored where-to-focus guidance for every gap",
                          "Your biggest priorities, called out first",
                        ].map((t, i) => (
                          <li key={i} className="text-sm pl-6 relative" style={{ color: "#eaf3f2" }}>
                            <span className="absolute left-0 font-bold" style={{ color: "#C8E842" }}>{"✓"}</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-foreground mb-3"
                      />
                      <Button
                        onClick={handleSendReport}
                        disabled={sendingEmail || !email}
                        className="w-full font-bold"
                        style={{ backgroundColor: "#BFB431", color: "#0E0E0E" }}
                      >
                        {sendingEmail ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send My Full Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-8 h-8 mb-2" style={{ color: "#C8E842" }} />
                      <h3 className="text-xl font-bold mb-2">Report Sent!</h3>
                      <p className="text-sm" style={{ color: "#d5e4e3" }}>
                        Check your inbox at <strong>{email}</strong> for your full D.E.V.I.C.E.™ Readiness Report.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Discovery call callout (full width, elevated) */}
            <div
              className="rounded-xl p-6 md:p-7 mb-8 shadow-lg border-l-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              style={{ backgroundColor: "#F5F1E8", borderLeftColor: "#BFB431" }}
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#0e4f4f" }}>
                  <Calendar className="w-6 h-6" style={{ color: "#C8E842" }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">Ready to close the gaps?</h4>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    If this surfaced gaps you were not sure how to address, that is exactly where The Karow Advisory Group can help.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="shrink-0 font-bold text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: "#0e4f4f" }}
              >
                <a href="https://calendly.com/blythe-karow/new-client-introductory-meeting">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Discovery Call
                </a>
              </Button>
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
      <section className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              D.E.V.I.C.E.™ Readiness Assessment
            </h1>
            <p className="text-base md:text-lg font-semibold text-secondary mb-2">
              How Ready Is Your Product for Commercialization?
            </p>
            <p className="text-muted-foreground text-sm whitespace-nowrap overflow-x-auto">
              Answer 4 questions across each of the 6 dimensions to identify gaps in your commercialization readiness.
            </p>
          </div>

          {/* Dimension tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
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
          <div className="bg-cream rounded-xl p-4 md:p-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                {dim.letter}
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">{dim.title}</h2>
                <p className="text-sm text-muted-foreground">{dim.subtitle}</p>
              </div>
            </div>

            <div className="mt-4 divide-y divide-border">
              {dim.questions.map((q, qi) => (
                <div key={qi} className="py-3 first:pt-0">
                  <p className="font-medium text-foreground mb-2">
                    {qi + 1}. {q}
                  </p>
                  <div className="flex gap-3">
                    {(["yes", "partially", "no"] as const).map((val) => (
                      <button
                        key={val}
                        onClick={() => setAnswer(qi, val)}
                        className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all border-2 ${
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
                onClick={() => setShowResults(true)}
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
