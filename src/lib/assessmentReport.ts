// Builds the D.E.V.I.C.E.™ Readiness Report email HTML.
// Ported from the former Supabase edge function so the assessment can send
// reports directly to Zapier without a server middleman.

export interface QuestionResult {
  question: string;
  answer: string;
  score: number;
}

export interface DimensionResult {
  letter: string;
  title: string;
  subtitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  readinessLevel: string;
  questions: QuestionResult[];
}

export interface ReportData {
  email: string;
  percentageScore: number;
  readinessLevel: string;
  readinessDescription: string;
  dimensions: DimensionResult[];
  totalScore: number;
  maxTotalScore: number;
}

function getAnswerIcon(answer: string): string {
  if (answer === "yes") return "✅";
  if (answer === "partially") return "🟡";
  return "❌";
}

function getAnswerLabel(answer: string): string {
  if (answer === "yes") return "Yes (2/2)";
  if (answer === "partially") return "Partially (0.5/2)";
  return "No (0/2)";
}

function getLevelEmoji(level: string): string {
  switch (level) {
    case "Strong": return "🟢";
    case "Developing": return "🔵";
    case "Early Stage": return "🟠";
    default: return "🔴";
  }
}

const TIER_GUIDANCE: Record<string, Record<string, string>> = {
  "0": {
    "found": "Strong documentation discipline is the foundation everything else in MedTech is built on, and right now it looks like that work hasn't started. It needs to happen early, beginning with documented product specifications and your Design History File. Building it now keeps you on track; retrofitting it later adds real cost to your business and creates delays in your development timeline.",
    "early": "Strong documentation discipline is the foundation everything else is built on, and you've made a start, though significant gaps remain. Now is the time to buckle down and fully commit to the quality systems successful MedTech companies rely on: documented user needs, a living Design History File, and integrated risk management (ISO 14971). Where you are in your own product development should tell you how much of this should already be in place.",
    "dev": "Strong documentation discipline is the foundation everything else is built on, and you're clearly building it as you go, with most pieces in place. The work now is to tighten what's only partially done and connect it: keep your Design History File current, fully integrate risk management, and build a real post-market surveillance loop back into design. Depending on where you are in development, this is likely just your next phase.",
    "strong": "Strong documentation discipline is the foundation everything else is built on, and yours shows it. Congratulations, you clearly know what's needed to execute here and you're working in the right direction. Keep this discipline consistent as your product and team scale."
  },
  "1": {
    "found": "Most teams know they need to engage the FDA; the harder question this early is how to start. Start by developing your regulatory strategy: your pathway, classification, and predicate. Only once you have that strategy is it time for the next step, a Pre-Submission (Q-Sub) meeting to confirm it, because you should never go to the FDA without knowing your strategy first. The part people most underestimate is the economics: who actually pays for this, how, and what the clinical workflow looks like. You don't need a full reimbursement study yet, but you do need to start understanding these questions now, because they shape everything that follows.",
    "early": "By now you likely know you need the FDA; the gap is usually the economics. Many teams know they need a reimbursement strategy but treat it as expensive and put it off. You don't have to run a full reimbursement landscape or market-access plan to make progress: you can start by being able to show investors you understand your clinical workflow and the health-economics argument you'll make. What you shouldn't delay is beginning an evidence-generation plan, because waiting is where millions of dollars get misspent and years get added to your commercialization timeline.",
    "dev": "You've got a real handle on your pathway and the basics of who pays; the next phase is turning the economics from a someday task into an active plan. You still don't need a full market-access build-out, but you should be steadily working toward an evidence-generation plan that satisfies both the FDA and the people who pay, and pressure-testing your clinical workflow and health-economics argument with real stakeholders. Doing this earlier is how you avoid expensive rework and protect your commercialization timeline.",
    "strong": "You clearly understand both your regulatory path and your economic model, and how they shape each other. Congratulations. Keep validating your reimbursement assumptions and health-economics argument with payers and providers as you go, so there are no surprises at launch."
  },
  "2": {
    "found": "Here's the basic distinction, because it's often misunderstood: verification confirms you built the product to its specifications (largely bench testing), while validation confirms the product actually meets the user's needs in the real world (the one that typically involves real users). The exact testing depends on your FDA product code. People routinely underestimate how much verification testing is required, how long it takes, and what it adds to your timeline and budget, so getting proactive here early pays off. And the user needs you write into your very first product spec are exactly what your final validation testing has to prove.",
    "early": "Verification confirms you built to spec; validation confirms you meet the user's needs in the real world. You've started defining your testing, but there are gaps. Get clear on the verification and validation expectations for your specific FDA product code, since they vary widely device to device, and don't underestimate the amount, time, and cost of verification testing, which you can plan for proactively. Most importantly, connect the thread: the user needs in your product spec should map directly to your validation testing.",
    "dev": "Verification confirms you built to spec; validation confirms you meet user needs in the real world. Your V&amp;V approach is taking real shape. The next phase is making it airtight: define clear pass/fail criteria for every health-impacting feature, validate the actual system you'll ship rather than isolated components, and make sure your test conditions reflect real-world use, edge cases, and misuse. Tie each test back to a regulatory requirement and to the user need it proves.",
    "strong": "Verification confirms you built to spec; validation confirms you meet user needs in the real world, and your plan connects the two end to end, from user needs through to the system you'll ship and the claims you'll make. Congratulations. Keep that traceability tight as the design evolves so nothing drifts out of scope."
  },
  "3": {
    "found": "In medical devices, everything traces back to one question: is this safe for the patient? Keeping their data safe is part of that. Right now this area needs foundational attention: you should know exactly what data you collect, where it comes from, and how it's used, and make sure personally identifiable information is protected and can't be accessed or hacked. This isn't just IT hygiene; it's patient safety, and the FDA treats it that way.",
    "early": "In medical devices, everything traces back to one question: is this safe for the patient, and keeping their data safe is part of that. You've started on data governance, but significant gaps remain. Nail down what data you collect and the rules for how it can be used, and separate and protect PII with clear retention and deletion policies. Build out your cybersecurity in earnest, and remember the FDA now expects you to be able to push software updates remotely, which means you need the security architecture to do that safely.",
    "dev": "In medical devices, everything traces back to one question: is this safe for the patient, and keeping their data safe is part of that. You've got real data governance in place; the next phase is hardening it. Confirm your rules for analytics and any ML or AI use are documented, your PII protections and retention policies are airtight, and your cybersecurity covers authentication, encryption, vulnerability management, and safe remote updates. Regulators are scrutinizing exactly this as AI becomes more central to devices.",
    "strong": "In medical devices, everything traces back to one question: is this safe for the patient, and your data governance and security reflect the standard the FDA expects, including safe remote-update capability. Congratulations. Keep it current as threats and AI expectations evolve."
  },
  "4": {
    "found": "Everything starts with your claims, the clear statement of who you help and how. Your regulatory strategy, your evidence, and your marketing all stem from it, which is why this gap matters so much. Right now that foundation isn't defined. Begin by writing down exactly what you want to be able to say about your product and why, before you build anything else around it.",
    "early": "Everything starts with your claims, the statement of who you help and why; your regulatory, evidence, and marketing all stem from it. You've started articulating them, but there's significant work to do. Build a formal claims library that defines what you can and can't say for each feature, and tie each claim to the evidence that backs it and to your intended FDA indication. Claims aren't a marketing afterthought; they're the spine everything downstream depends on.",
    "dev": "Everything starts with your claims, the statement of who you help and why, and yours are well underway. The next phase is making it a living standard: document the evidence behind every claim, align it tightly with your FDA indication for use, and get marketing, sales, product, and partnerships all working from the same claims library rather than a document that just exists. That alignment keeps your whole commercialization effort consistent.",
    "strong": "Everything starts with your claims, the statement of who you help and why, and yours are clearly defined, evidence-backed, and actually used as the strategic spine across your teams. Congratulations. Keep the library current as your indication and evidence expand."
  },
  "5": {
    "found": "Evidence is how you prove every claim you make, to the FDA, to payers, and to clinicians, and right now there's no strategy behind it. Start by listing each claim you intend to make and the level of evidence it will require. Planning this before you design any studies is the cheapest time to get it right; figuring it out afterward means redoing work.",
    "early": "Evidence is how you prove every claim you make, to the FDA, to payers, and to clinicians. You've begun thinking about it, but it isn't yet aligned. Make sure your evidence strategy maps to both your regulatory pathway and your market-access goals, so one body of work serves the FDA and your payers. Without that alignment, you risk running studies that don't support clearance or don't satisfy the people who decide whether to pay.",
    "dev": "Evidence is how you prove every claim you make, to the FDA, to payers, and to clinicians, and your strategy is taking shape. The next phase is sequencing it: map how your studies build on each other over time rather than running one-offs, and confirm your data reflects the populations and environments you actually claim to serve. Tie each study back to a specific claim and pathway requirement.",
    "strong": "Evidence is how you prove every claim you make, to the FDA, to payers, and to clinicians, and yours is aligned to your pathway, your claims, and your market-access goals, building logically over time. Congratulations. Keep it synced as your claims evolve."
  }
};

function tierKey(level: string): string {
  if (level === "Strong") return "strong";
  if (level === "Developing") return "dev";
  if (level === "Early Stage") return "early";
  return "found";
}

function getDimensionGuidance(index: number, readinessLevel: string): string {
  const d = TIER_GUIDANCE[String(index)];
  return d ? (d[tierKey(readinessLevel)] || "") : "";
}

export function buildReportHtml(data: ReportData, isAdmin = false): string {
  const dimensionRows = data.dimensions.map((dim, idx) => {
    const questionRows = dim.questions.map((q) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;color:#555;">
          ${getAnswerIcon(q.answer)} ${q.question}
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;text-align:center;color:#333;font-weight:600;">
          ${getAnswerLabel(q.answer)}
        </td>
      </tr>
    `).join("");

    const guidance = getDimensionGuidance(idx, dim.readinessLevel);
    const isStrong = dim.readinessLevel === "Strong";
    const guidanceBlock = guidance ? `
      <div style="background:${isStrong ? "#E8F5E9" : "#FFF8E1"};border-left:4px solid ${isStrong ? "#16a34a" : "#F59E0B"};padding:12px 16px;margin-top:0;border-radius:0 0 8px 8px;font-size:14px;color:#555;line-height:1.6;">
        ${isStrong ? "" : '<strong style="color:#333;">Where to focus:</strong> '}${guidance}
      </div>
    ` : "";

    return `
      <div style="margin-bottom:24px;">
        <div style="background:#004D51;color:white;padding:12px 16px;border-radius:8px 8px 0 0;">
          <div style="font-weight:700;font-size:16px;">
            ${dim.letter} – ${dim.title}
            <span style="float:right;font-size:14px;">${dim.score}/8 (${dim.percentage}%) – ${getLevelEmoji(dim.readinessLevel)} ${dim.readinessLevel}</span>
          </div>
          ${dim.subtitle && dim.subtitle !== dim.title ? `<div style="font-size:12px;font-weight:400;color:rgba(255,255,255,0.82);margin-top:3px;">${dim.subtitle}</div>` : ""}
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-top:none;">
          ${questionRows}
        </table>
        ${guidanceBlock}
      </div>
    `;
  }).join("");

  const FRAMING = "Everything in MedTech starts with one thing: knowing who you're helping and how. That single idea – your user need – flows into the claims you make, the evidence and testing required to prove them, and ultimately the marketing you're allowed to do. The D.E.V.I.C.E. framework follows that chain end to end, from your first product spec to the marketing claims in your sales documents, so you understand not just your product but how you're expected to operate as a manufacturer.";
  const lowestSet = [...data.dimensions].sort((a, b) => a.percentage - b.percentage).slice(0, 2);
  const lowTwo = data.dimensions.filter((d) => lowestSet.includes(d)).map((d) => `<strong>${d.title.replace(/&/g, "&amp;")}</strong>`);
  const lowTwoStr = lowTwo.length >= 2 ? `${lowTwo[0]} and ${lowTwo[1]}` : (lowTwo[0] || "");
  const allStrong = data.dimensions.every((d) => d.readinessLevel === "Strong");
  const summaryBody = allStrong
    ? `<p style="margin:0 0 10px;"><strong style="color:#004D51;">Your biggest gaps:</strong> You're in strong shape across the board. Your lowest areas are:</p>
              <p style="margin:0 0 10px;">${lowTwoStr}</p>
              <p style="margin:0;">These are worth a final pass. The breakdown below has tailored guidance for each.</p>`
    : `<p style="margin:0 0 10px;"><strong style="color:#004D51;">Your biggest gaps:</strong> We've identified the areas of your readiness with the most room to grow:</p>
              <p style="margin:0 0 10px;">${lowTwoStr}</p>
              <p style="margin:0;">You'll find tailored guidance for these and every dimension in the breakdown below.</p>`;
  const prioritySummary = `
            <div style="background:#F2F7F7;border-left:4px solid #004D51;border-radius:8px;padding:16px 18px;margin-bottom:32px;font-size:15px;color:#444;line-height:1.6;">
              ${summaryBody}
            </div>`;

  const adminNote = isAdmin
    ? `<div style="background:#FFF3CD;padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:14px;"><strong>📬 New Assessment Submission</strong> from <strong>${data.email}</strong></div>`
    : "";

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;padding:20px;">
        <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          <div style="background:#004D51;padding:32px 24px;text-align:center;">
            <h1 style="color:#C8E842;margin:0;font-size:24px;">D.E.V.I.C.E.™ Readiness Report</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">The Karow Advisory Group</p>
          </div>

          <div style="padding:32px 24px;">
            ${adminNote}

            <p style="color:#555;font-size:15px;line-height:1.6;margin:0 0 28px;">${FRAMING}</p>

            <div style="text-align:center;margin-bottom:32px;">
              <div style="font-size:64px;font-weight:800;color:#004D51;">${data.percentageScore}%</div>
              <div style="font-size:20px;font-weight:700;color:${
                data.readinessLevel === "Strong" ? "#16a34a" :
                data.readinessLevel === "Developing" ? "#004D51" :
                data.readinessLevel === "Early Stage" ? "#f97316" : "#ef4444"
              };">${getLevelEmoji(data.readinessLevel)} ${data.readinessLevel}</div>
              <p style="color:#666;margin-top:8px;font-size:15px;">${data.readinessDescription}</p>
              <p style="color:#999;font-size:13px;margin-top:4px;">Total: ${data.totalScore} out of ${data.maxTotalScore} points</p>
            </div>

            ${prioritySummary}

            <div style="margin-bottom:32px;">
              <h2 style="font-size:18px;color:#333;margin-bottom:16px;">Your Scores</h2>
              <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
                <thead>
                  <tr style="background:#f5f5f5;">
                    <th style="padding:10px 12px;text-align:left;font-size:14px;color:#333;">Dimension</th>
                    <th style="padding:10px 12px;text-align:center;font-size:14px;color:#333;">Score</th>
                    <th style="padding:10px 12px;text-align:left;font-size:14px;color:#333;">Level</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.dimensions.map((dim) => `
                    <tr>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;font-size:14px;color:#555;"><strong>${dim.letter}</strong> ${dim.title}</td>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;text-align:center;font-size:14px;font-weight:600;color:#333;">${dim.score}/8</td>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;text-align:left;font-size:14px;">${getLevelEmoji(dim.readinessLevel)} ${dim.readinessLevel}</td>
                    </tr>
                  `).join("")}
                  <tr style="background:#f5f5f5;font-weight:700;">
                    <td style="padding:10px 12px;border-top:2px solid #ccc;font-size:14px;">OVERALL TOTAL</td>
                    <td style="padding:10px 12px;border-top:2px solid #ccc;text-align:center;font-size:14px;">${data.totalScore}/${data.maxTotalScore}</td>
                    <td style="padding:10px 12px;border-top:2px solid #ccc;text-align:left;font-size:14px;">${getLevelEmoji(data.readinessLevel)} ${data.readinessLevel}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">Detailed Breakdown</h2>
            ${dimensionRows}

            <div style="text-align:center;margin-top:32px;padding:24px;background:#f9f9f9;border-radius:8px;">
              <h3 style="color:#333;margin:0 0 8px;">Ready to close the gaps?</h3>
              <p style="color:#666;font-size:14px;margin:0 0 16px;">If this assessment surfaced gaps you weren't sure how to address, that's exactly where The Karow Advisory Group can help.</p>
              <a href="https://calendly.com/blythe-karow/new-client-introductory-meeting" style="display:inline-block;background:#004D51;color:#C8E842;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">Schedule a Discovery Call</a>
            </div>
          </div>

          <div style="padding:16px 24px;background:#f5f5f5;text-align:center;font-size:12px;color:#999;">
            © ${new Date().getFullYear()} The Karow Advisory Group | www.thekarowgroup.com
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// The Zapier "Catch Hook" URL that receives the assessment data and sends the
// emails. Previously this lived in the Supabase edge function.
export const ZAPIER_WEBHOOK_URL =
  "https://hooks.zapier.com/hooks/catch/26739173/uxtp5t4/";

// Sends the report straight to Zapier from the browser.
// Uses a form-encoded, no-cors POST so the request always reaches Zapier
// (Zapier catch hooks don't return CORS headers for browser reads). Because the
// response is opaque in no-cors mode, success here means "the request was sent."
export async function sendReportToZapier(data: ReportData): Promise<void> {
  const userReportHtml = buildReportHtml(data, false);
  const adminReportHtml = buildReportHtml(data, true);

  const payload: Record<string, string> = {
    email: data.email,
    percentageScore: String(data.percentageScore),
    readinessLevel: data.readinessLevel,
    readinessDescription: data.readinessDescription,
    totalScore: String(data.totalScore),
    maxTotalScore: String(data.maxTotalScore),
    dimensions: JSON.stringify(data.dimensions),
    userReportHtml,
    adminReportHtml,
    userEmailSubject: `Your D.E.V.I.C.E.™ Readiness Score: ${data.percentageScore}% – ${data.readinessLevel}`,
    adminEmailSubject: `New D.E.V.I.C.E.™ Assessment: ${data.email} – ${data.percentageScore}% (${data.readinessLevel})`,
    timestamp: new Date().toISOString(),
  };

  await fetch(ZAPIER_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(payload),
  });
}
