import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface QuestionResult {
  question: string;
  answer: string;
  score: number;
}

interface DimensionResult {
  letter: string;
  title: string;
  subtitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  readinessLevel: string;
  questions: QuestionResult[];
}

interface ReportData {
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

function getDimensionGuidance(letter: string, index: number): string {
  const guidance: Record<string, string> = {
    "D-0": "Gaps here typically mean your product development process isn't yet built to withstand regulatory scrutiny. Without a Design History File and documented risk management, you're likely to face costly rework when you engage the FDA. This is foundational work that needs to happen early — retrofitting it later is one of the most expensive mistakes in MedTech.",
    "E-1": "If you're uncertain about your regulatory pathway or haven't explored special FDA programs, you may be leaving time and money on the table — or heading down the wrong road entirely. Reimbursement strategy and clinical workflow impact need to be part of your commercial model from day one, not figured out after clearance.",
    "V-2": "Gaps in V&amp;V often don't surface until a submission is rejected or a study fails. Defining pass/fail criteria and validating your real-world system early protects your timeline and your budget at the most critical stage of commercialization.",
    "I-3": "Data governance gaps create regulatory, legal, and cybersecurity exposure that can derail a submission or a partnership. As AI becomes more central to MedTech products, regulators are paying closer attention to exactly this dimension.",
    "C-4": "Claims gaps are among the most expensive to fix late in the process because they touch everything — your regulatory strategy, your evidence plan, your marketing, and your sales team. A claims library isn't just a compliance document; it's the strategic spine of your entire commercialization effort.",
    "E-5": "Without an aligned evidence strategy, you risk running studies that don't support your regulatory pathway, don't satisfy payer requirements, or don't hold up under clinical scrutiny. Evidence planning is most valuable — and least expensive — when it happens before the studies are designed.",
  };
  return guidance[`${letter}-${index}`] || "";
}

function buildReportHtml(data: ReportData, isAdmin = false): string {
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

    const guidance = dim.readinessLevel !== "Strong" ? getDimensionGuidance(dim.letter, idx) : "";
    const guidanceBlock = guidance ? `
      <div style="background:#FFF8E1;border-left:4px solid #F59E0B;padding:12px 16px;margin-top:0;border-radius:0 0 8px 8px;font-size:14px;color:#555;line-height:1.6;">
        <strong style="color:#333;">Where to focus:</strong> ${guidance}
      </div>
    ` : "";

    return `
      <div style="margin-bottom:24px;">
        <div style="background:#004D51;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-weight:700;font-size:16px;">
          ${dim.letter} — ${dim.subtitle}
          <span style="float:right;font-size:14px;">${dim.score}/8 (${dim.percentage}%) — ${getLevelEmoji(dim.readinessLevel)} ${dim.readinessLevel}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-top:none;">
          ${questionRows}
        </table>
        ${guidanceBlock}
      </div>
    `;
  }).join("");

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
          <!-- Header -->
          <div style="background:#004D51;padding:32px 24px;text-align:center;">
            <h1 style="color:#C8E842;margin:0;font-size:24px;">D.E.V.I.C.E.™ Readiness Report</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">The Karow Advisory Group</p>
          </div>

          <div style="padding:32px 24px;">
            ${adminNote}

            <!-- Overall Score -->
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

            <!-- Your Scores Table -->
            <div style="margin-bottom:32px;">
              <h2 style="font-size:18px;color:#333;margin-bottom:16px;">Your Scores</h2>
              <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
                <thead>
                  <tr style="background:#f5f5f5;">
                    <th style="padding:10px 12px;text-align:left;font-size:14px;color:#333;">Dimension</th>
                    <th style="padding:10px 12px;text-align:center;font-size:14px;color:#333;">Score</th>
                    <th style="padding:10px 12px;text-align:center;font-size:14px;color:#333;">Level</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.dimensions.map((dim) => `
                    <tr>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;font-size:14px;color:#555;"><strong>${dim.letter}</strong> ${dim.subtitle}</td>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;text-align:center;font-size:14px;font-weight:600;color:#333;">${dim.score}/8</td>
                      <td style="padding:10px 12px;border-top:1px solid #e5e5e5;text-align:center;font-size:14px;">${getLevelEmoji(dim.readinessLevel)} ${dim.readinessLevel}</td>
                    </tr>
                  `).join("")}
                  <tr style="background:#f5f5f5;font-weight:700;">
                    <td style="padding:10px 12px;border-top:2px solid #ccc;font-size:14px;">OVERALL TOTAL</td>
                    <td style="padding:10px 12px;border-top:2px solid #ccc;text-align:center;font-size:14px;">${data.totalScore}/${data.maxTotalScore}</td>
                    <td style="padding:10px 12px;border-top:2px solid #ccc;text-align:center;font-size:14px;">${getLevelEmoji(data.readinessLevel)} ${data.readinessLevel}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Detailed Breakdown -->
            <h2 style="font-size:18px;color:#333;margin-bottom:16px;">Detailed Breakdown</h2>
            ${dimensionRows}

            <!-- CTA -->
            <div style="text-align:center;margin-top:32px;padding:24px;background:#f9f9f9;border-radius:8px;">
              <h3 style="color:#333;margin:0 0 8px;">Ready to close the gaps?</h3>
              <p style="color:#666;font-size:14px;margin:0 0 16px;">If this assessment surfaced gaps you weren't sure how to address, that's exactly where The Karow Advisory Group can help.</p>
              <a href="https://calendly.com/blythe-karow/new-client-introductory-meeting" style="display:inline-block;background:#004D51;color:#C8E842;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">Schedule a Discovery Call</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding:16px 24px;background:#f5f5f5;text-align:center;font-size:12px;color:#999;">
            © ${new Date().getFullYear()} The Karow Advisory Group | www.thekarowgroup.com
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26739173/uxtp5t4/";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReportData = await req.json();

    // Build HTML reports
    const userReportHtml = buildReportHtml(data, false);
    const adminReportHtml = buildReportHtml(data, true);

    // POST everything to Zapier webhook
    const zapierPayload = {
      email: data.email,
      percentageScore: data.percentageScore,
      readinessLevel: data.readinessLevel,
      readinessDescription: data.readinessDescription,
      totalScore: data.totalScore,
      maxTotalScore: data.maxTotalScore,
      dimensions: data.dimensions,
      userReportHtml,
      adminReportHtml,
      userEmailSubject: `Your D.E.V.I.C.E.™ Readiness Score: ${data.percentageScore}% — ${data.readinessLevel}`,
      adminEmailSubject: `New D.E.V.I.C.E.™ Assessment: ${data.email} — ${data.percentageScore}% (${data.readinessLevel})`,
      timestamp: new Date().toISOString(),
    };

    const zapierRes = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zapierPayload),
    });

    if (!zapierRes.ok) {
      const errBody = await zapierRes.text();
      throw new Error(`Zapier webhook failed [${zapierRes.status}]: ${errBody}`);
    }

    // Consume the response body
    await zapierRes.text();

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});