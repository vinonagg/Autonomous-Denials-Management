const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Revenue Cycle Transformation";
pres.company = "US Healthcare RCM";
pres.title = "Autonomous Denials Management";

// ---------- palette ----------
const NAVY = "10243E";
const NAVY2 = "1B3A5C";
const TEAL = "1C7293";
const TEAL_DK = "12546E";
const GREEN_DK = "0B7A63";
const MINT = "02C39A";
const AMBER = "E8A33D";
const INK = "1A2A3A";
const MUTED = "6B7B8A";
const CARD = "EEF3F6";
const WHITE = "FFFFFF";
const LINE = "D9E2E8";
const ICE = "CADCFC";
const SKY = "7FA8C9";

const HEAD = "Cambria";
const BODY = "Calibri";

// ---------- helpers ----------
function shadow() {
  return { type: "outer", color: "9AAAB8", blur: 8, offset: 2, angle: 90, opacity: 0.35, rotateWithShape: false };
}

function slideBase(dark) {
  const s = pres.addSlide();
  s.background = { color: dark ? NAVY : WHITE };
  return s;
}

function title(s, text, dark) {
  s.addShape(pres.ShapeType.ellipse, { x: 0.62, y: 0.62, w: 0.17, h: 0.17, fill: { color: dark ? MINT : TEAL } });
  s.addText(text, {
    isTextBox: true, x: 0.95, y: 0.4, w: 11.9, h: 0.85,
    fontFace: HEAD, fontSize: 32, bold: true, color: dark ? WHITE : INK, align: "left", margin: 0,
  });
}

function eyebrow(s, text, x, y, color) {
  s.addText(text, {
    isTextBox: true, x, y, w: 5, h: 0.35,
    fontFace: BODY, fontSize: 11, bold: true, color: color || TEAL, charSpacing: 2, align: "left", margin: 0,
  });
}

function statCard(s, x, y, w, h, big, label, note, accent, bigSize) {
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: CARD }, shadow: shadow() });
  s.addText(big, {
    isTextBox: true, x: x + 0.22, y: y + 0.16, w: w - 0.44, h: 0.62,
    fontFace: HEAD, fontSize: bigSize || 26, bold: true, color: accent || TEAL, align: "left", margin: 0,
  });
  s.addText(label, {
    isTextBox: true, x: x + 0.22, y: y + 0.8, w: w - 0.44, h: 0.36,
    fontFace: BODY, fontSize: 12, bold: true, color: INK, align: "left", margin: 0,
  });
  if (note) {
    s.addText(note, {
      isTextBox: true, x: x + 0.22, y: y + h - 0.55, w: w - 0.44, h: 0.5,
      fontFace: BODY, fontSize: 9.5, color: MUTED, align: "left", margin: 0,
    });
  }
}

function circleNum(s, n, x, y, d, fill, txtColor) {
  s.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: fill || TEAL } });
  s.addText(String(n), {
    isTextBox: true, x, y: y - 0.02, w: d, h: d,
    fontFace: HEAD, fontSize: 12, bold: true, color: txtColor || WHITE, align: "center", valign: "middle", margin: 0,
  });
}

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
(() => {
  const s = slideBase(true);
  s.addShape(pres.ShapeType.ellipse, { x: 9.7, y: -1.7, w: 6.4, h: 6.4, fill: { type: "none" }, line: { color: TEAL, width: 1.5 } });
  s.addShape(pres.ShapeType.ellipse, { x: 10.6, y: -0.9, w: 4.7, h: 4.7, fill: { type: "none" }, line: { color: NAVY2, width: 6 } });
  s.addShape(pres.ShapeType.ellipse, { x: 11.9, y: 3.0, w: 0.28, h: 0.28, fill: { color: MINT } });

  eyebrow(s, "BOARD OF DIRECTORS   ·   STRATEGIC REVIEW", 0.9, 0.75, SKY);
  s.addText("Autonomous Denials Management", {
    isTextBox: true, x: 0.9, y: 2.35, w: 11.2, h: 1.7,
    fontFace: HEAD, fontSize: 46, bold: true, color: WHITE, align: "left", margin: 0,
  });
  s.addText("An Agentic AI program to prevent, appeal, and recover denied claims", {
    isTextBox: true, x: 0.9, y: 4.05, w: 10.8, h: 0.9,
    fontFace: BODY, fontSize: 18, color: ICE, align: "left", margin: 0,
  });

  const chips = [
    ["$8–15M", "recurring annual uplift"],
    ["< 9 months", "expected payback"],
    ["3–4 points", "lower initial denial rate"],
  ];
  let cx = 0.9;
  chips.forEach(([a, b]) => {
    s.addShape(pres.ShapeType.roundRect, { x: cx, y: 5.55, w: 3.6, h: 1.0, rectRadius: 0.08, fill: { color: NAVY2 } });
    s.addText(
      [
        { text: a + "  ", options: { bold: true, color: MINT, fontSize: 15 } },
        { text: b, options: { color: ICE, fontSize: 11 } },
      ],
      { isTextBox: true, x: cx + 0.2, y: 5.55, w: 3.2, h: 1.0, fontFace: BODY, align: "left", valign: "middle", margin: 0 }
    );
    cx += 3.8;
  });

  s.addText("Revenue Cycle Transformation   ·   September 2026", {
    isTextBox: true, x: 0.9, y: 6.85, w: 8, h: 0.35, fontFace: BODY, fontSize: 11, color: SKY, align: "left", margin: 0,
  });
  s.addNotes("Framing: denials are now a board-level margin issue. This program applies a supervised fleet of AI agents to prevent, appeal, and recover denied claims. Ask is on the last slide.");
})();

// ============================================================
// SLIDE 2 — BOTTOM LINE UP FRONT
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Bottom line up front");

  eyebrow(s, "THE OPPORTUNITY", 0.6, 1.5);
  s.addText(
    "Payers are denying more claims, faster, and increasingly through automation. Most denials are preventable, and two-thirds of worked denials are recoverable — yet roughly half are never worked. This is an operational gap we can close.",
    { isTextBox: true, x: 0.6, y: 1.85, w: 7.2, h: 1.6, fontFace: BODY, fontSize: 13, color: INK, align: "left", margin: 0, lineSpacingMultiple: 1.15 }
  );

  eyebrow(s, "THE ASK", 0.6, 3.75);
  s.addText(
    [
      { text: "Endorse Autonomous Denials Management as a strategic revenue-cycle initiative", options: { bullet: { indent: 12 }, breakLine: true, paraSpaceAfter: 10 } },
      { text: "Approve an executive sponsor and a dedicated cross-functional delivery pod", options: { bullet: { indent: 12 }, breakLine: true, paraSpaceAfter: 10 } },
      { text: "Fund Phases 1–2 under a stage-gated model — each phase funded on evidence", options: { bullet: { indent: 12 } } },
    ],
    { isTextBox: true, x: 0.6, y: 4.1, w: 7.2, h: 2.4, fontFace: BODY, fontSize: 13, color: INK, align: "left", margin: 0 }
  );

  statCard(s, 8.1, 1.55, 4.6, 1.6, "$8–15M", "Recurring annual net revenue uplift", "Prevention + higher recovery", TEAL);
  statCard(s, 8.1, 3.35, 4.6, 1.6, "< 9 months", "Expected payback period", "Backlog cash accelerates it", GREEN_DK);
  statCard(s, 8.1, 5.15, 4.6, 1.6, "~ 6 months", "To first production beachhead", "1–2 denial types, 1–2 payers", AMBER);
  s.addNotes("Lead with the recommendation. The three numbers on the right are the board-relevant outcomes. Assumptions are illustrative for a ~$2B net patient revenue system and shown on the exposure slide.");
})();

// ============================================================
// SLIDE 3 — THE PROBLEM
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Denials have become a board-level problem");

  const cards = [
    ["11–15%", "Initial denial rate", "Up from ~8% a few years ago"],
    ["50–65%", "Denials never reworked", "Recoverable revenue walked away from"],
    ["85–90%", "Denials are preventable", "Front-end auth, eligibility, coding, docs"],
    ["$25–118", "Cost to rework one claim", "Higher for complex clinical appeals"],
    ["30–45+", "Days from denial to decision", "Drives aged AR and bad debt"],
    ["20%+", "Annual RCM staff turnover", "We cannot hire our way out of it"],
  ];
  const cw = 3.8333, ch = 1.75, gap = 0.3;
  const xs = [0.6, 0.6 + cw + gap, 0.6 + 2 * (cw + gap)];
  cards.forEach((c, i) => {
    const x = xs[i % 3];
    const y = i < 3 ? 1.6 : 1.6 + ch + 0.25;
    statCard(s, x, y, cw, ch, c[0], c[1], c[2], i === 3 || i === 4 ? AMBER : TEAL);
  });

  s.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 5.7, w: 12.1, h: 1.0, rectRadius: 0.08, fill: { color: NAVY } });
  s.addText("“We are being denied by algorithms — we will prevent and appeal with agents.”", {
    isTextBox: true, x: 0.9, y: 5.7, w: 11.5, h: 1.0, fontFace: HEAD, fontSize: 16, italic: true, color: WHITE, align: "left", valign: "middle", margin: 0,
  });
  s.addNotes("Every figure here is an industry range, not our number yet. Phase 1 replaces these with our own baseline, signed by Finance.");
})();

// ============================================================
// SLIDE 4 — FINANCIAL EXPOSURE
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "The financial exposure, quantified");
  s.addText("Illustrative — ~$2B net patient revenue system; refined against our data in Phase 1.", {
    isTextBox: true, x: 0.95, y: 1.18, w: 11.5, h: 0.35, fontFace: BODY, fontSize: 11, italic: true, color: MUTED, align: "left", margin: 0,
  });

  statCard(s, 0.6, 1.7, 5.6, 1.55, "$40–60M", "Net patient revenue at risk each year", "~11% of gross charges denied", AMBER);
  statCard(s, 0.6, 3.4, 5.6, 1.55, "$5–10M", "One-time cash from backlog liquidation", "First 90 days of the pilot", TEAL);
  statCard(s, 0.6, 5.1, 5.6, 1.55, "$2–4M+", "Annual cost to rework denials", "At $25–118 per claim touch", TEAL);

  s.addChart(
    pres.ChartType.bar,
    [{ name: "Share of denied claims", labels: ["Never reworked", "Worked & upheld", "Worked & overturned"], values: [40, 21, 39] }],
    {
      x: 6.6, y: 1.75, w: 6.1, h: 4.9,
      barDir: "col",
      chartColors: [AMBER, "8DA4B0", MINT],
      showTitle: true, title: "Where denied revenue goes today", titleFontSize: 12, titleColor: INK, titleFontFace: BODY,
      showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: '0"%"', dataLabelColor: INK, dataLabelFontSize: 11,
      showLegend: false,
      catAxisLabelColor: INK, catAxisLabelFontSize: 10, catAxisLabelFontFace: BODY,
      valAxisLabelColor: MUTED, valAxisLabelFontSize: 9, valAxisMaxVal: 50, valAxisMinVal: 0,
      valGridLine: { color: LINE, size: 1 }, catGridLine: { style: "none" },
      chartArea: { fill: { color: WHITE } },
    }
  );
  s.addNotes("Assumes ~60% of denials are worked today and ~65% of worked denials are overturned. The 40% never-reworked slice is the fastest money to recover in the pilot.");
})();

// ============================================================
// SLIDE 5 — SOLUTION VISION (dark)
// ============================================================
(() => {
  const s = slideBase(true);
  title(s, "Autonomous Denials Management", true);
  s.addText(
    "A supervised fleet of AI agents that diagnoses, appeals, and prevents denials — grounded in payer policy, fully auditable, with humans on every irreversible action.",
    { isTextBox: true, x: 0.95, y: 1.35, w: 11.6, h: 1.0, fontFace: BODY, fontSize: 15, color: ICE, align: "left", margin: 0, lineSpacingMultiple: 1.15 }
  );

  const pillars = [
    ["Prevent", "Pre-bill denial-risk scoring and real-time front-end checks stop denials before claims leave the building."],
    ["Appeal", "Agents find the root cause, gather clinical evidence, and draft payer-specific, policy-cited appeals for rapid submission."],
    ["Learn", "Every denial feeds root-cause fixes back to scheduling, authorization, registration, and coding."],
  ];
  const pw = 3.766, gap = 0.4;
  pillars.forEach(([h, b], i) => {
    const x = 0.6 + i * (pw + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.7, w: pw, h: 3.4, rectRadius: 0.08, fill: { color: NAVY2 } });
    s.addShape(pres.ShapeType.ellipse, { x: x + 0.35, y: 3.05, w: 0.6, h: 0.6, fill: { color: [MINT, TEAL, AMBER][i] } });
    s.addText(String(i + 1), { isTextBox: true, x: x + 0.35, y: 3.03, w: 0.6, h: 0.6, fontFace: HEAD, fontSize: 16, bold: true, color: NAVY, align: "center", valign: "middle", margin: 0 });
    s.addText(h, { isTextBox: true, x: x + 0.35, y: 3.82, w: pw - 0.7, h: 0.5, fontFace: HEAD, fontSize: 20, bold: true, color: WHITE, align: "left", margin: 0 });
    s.addText(b, { isTextBox: true, x: x + 0.35, y: 4.35, w: pw - 0.7, h: 1.7, fontFace: BODY, fontSize: 11.5, color: ICE, align: "left", margin: 0, lineSpacingMultiple: 1.15 });
  });
  s.addNotes("Three jobs, one system. Prevention is where the durable margin gain is; autonomous appeals clear today's backlog and fund the program; the learning loop is what keeps the denial rate down.");
})();

// ============================================================
// SLIDE 6 — HOW IT WORKS
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "How it works: a coordinated agent fleet");

  const steps = [
    ["Ingest & Classify", "Parse 835/ERA, payer portals and mail; normalize CARC/RARC codes"],
    ["Diagnose Root Cause", "Auth, medical necessity, coding, timely filing, coordination of benefits"],
    ["Strategize & Draft", "Choose the play; assemble clinical evidence; write the payer-specific appeal"],
    ["Submit & Follow-up", "File via 837 / portal / fax; track status; escalate past SLA"],
  ];
  const bw = 2.65, gap = 0.5;
  steps.forEach(([h, b], i) => {
    const x = 0.6 + i * (bw + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.9, w: bw, h: 1.6, rectRadius: 0.08, fill: { color: CARD }, shadow: shadow() });
    circleNum(s, i + 1, x + 0.16, y = 2.06, 0.32, TEAL, WHITE);
    s.addText(h, { isTextBox: true, x: x + 0.56, y: 2.02, w: bw - 0.7, h: 0.42, fontFace: BODY, fontSize: 11.5, bold: true, color: INK, align: "left", margin: 0 });
    s.addText(b, { isTextBox: true, x: x + 0.16, y: 2.52, w: bw - 0.32, h: 0.9, fontFace: BODY, fontSize: 9, color: MUTED, align: "left", margin: 0, lineSpacingMultiple: 1.1 });
    if (i < 3) {
      s.addShape(pres.ShapeType.triangle, { x: x + bw + 0.1, y: 2.5, w: 0.3, h: 0.3, rotate: 90, fill: { color: TEAL } });
    }
  });

  s.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 3.75, w: 12.1, h: 0.62, rectRadius: 0.08, fill: { color: "E1F3EE" } });
  s.addText("Human review queue:  approve  ·  edit  ·  reject   —   no appeal above set thresholds is submitted without sign-off", {
    isTextBox: true, x: 0.6, y: 3.75, w: 12.1, h: 0.62, fontFace: BODY, fontSize: 11, bold: true, color: TEAL_DK, align: "center", valign: "middle", margin: 0,
  });

  eyebrow(s, "ALWAYS-ON SUPPORTING AGENTS", 0.6, 4.55);
  const chips = ["Orchestrator", "Payer-Policy RAG", "Evidence Retrieval", "Prevention Feedback", "QA & Audit"];
  const chw = 2.22, cgap = 0.25;
  chips.forEach((c, i) => {
    const x = 0.6 + i * (chw + cgap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 5.0, w: chw, h: 0.85, rectRadius: 0.08, fill: { color: NAVY2 } });
    s.addText(c, { isTextBox: true, x: x + 0.1, y: 5.0, w: chw - 0.2, h: 0.85, fontFace: BODY, fontSize: 10, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0 });
  });

  s.addText("CARC/RARC = claim adjustment / remittance advice remark codes  ·  837 = electronic claim  ·  835/ERA = electronic remittance advice", {
    isTextBox: true, x: 0.6, y: 6.15, w: 12.1, h: 0.4, fontFace: BODY, fontSize: 9, color: MUTED, align: "left", margin: 0,
  });
  s.addNotes("The four-step pipeline is the assembly line for one denied claim. The supporting agents serve every step. The green bar is the control point: humans own the irreversible submit action until autonomy is earned.");
})();

// ============================================================
// SLIDE 7 — GOVERNANCE / AUTONOMY TIERS
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Governance: autonomy is earned, humans own the irreversible");

  const hdr = (t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: BODY, fontSize: 11, valign: "middle" } });
  const cell = (t, b) => ({ text: t, options: { color: INK, fontFace: BODY, fontSize: 10.5, valign: "middle", bold: !!b } });
  const rows = [
    [hdr("Tier"), hdr("Applies to"), hdr("Human role")],
    [cell("Tier 0 · Shadow", true), cell("A new denial category or payer"), cell("Human does the work; agent proposes in parallel; outputs compared")],
    [cell("Tier 1 · Assist", true), cell("Validated category, any dollar value"), cell("Agent drafts; specialist reviews and submits")],
    [cell("Tier 2 · Supervised auto", true), cell("Validated category, below $ threshold, confidence ≥ target"), cell("Agent submits; humans audit a sample")],
    [cell("Tier 3 · Auto", true), cell("Low-risk, high-volume: timely-filing with proof, duplicates, simple COB"), cell("Exception-only review")],
  ];
  s.addTable(rows, {
    x: 0.6, y: 1.6, w: 12.1, colW: [2.4, 4.7, 5.0], rowH: [0.4, 0.8, 0.7, 0.9, 0.7],
    border: { type: "solid", color: LINE, pt: 1 }, fill: { color: WHITE }, align: "left",
  });

  eyebrow(s, "GUARDRAILS ON EVERY CLAIM", 0.6, 5.35);
  const g = [
    "HIPAA-eligible models + BAA, zero data retention",
    "Every action cites current payer policy",
    "Confidence + dollar thresholds gate autonomy",
    "Clinician sign-off for medical necessity",
    "Immutable audit trail for every claim",
  ];
  const gw = 2.26, ggap = 0.2;
  g.forEach((t, i) => {
    const x = 0.6 + i * (gw + ggap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 5.7, w: gw, h: 1.0, rectRadius: 0.08, fill: { color: CARD } });
    s.addText(t, { isTextBox: true, x: x + 0.14, y: 5.7, w: gw - 0.28, h: 1.0, fontFace: BODY, fontSize: 9, color: INK, align: "left", valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
  });
  s.addNotes("This is the slide Compliance and Legal care about. Autonomy is not a switch we flip; each denial sub-category graduates tier by tier only after measured accuracy. Medical-necessity judgment never leaves a credentialed human.");
})();

// ============================================================
// SLIDE 8 — TARGET OUTCOMES
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Target outcomes — Year 1");

  s.addChart(
    pres.ChartType.bar,
    [
      { name: "Baseline", labels: ["Initial denial rate", "Denials worked", "Appeal overturn rate"], values: [11, 60, 65] },
      { name: "Year-1 target", labels: ["Initial denial rate", "Denials worked", "Appeal overturn rate"], values: [7.5, 95, 78] },
    ],
    {
      x: 0.6, y: 1.7, w: 7.0, h: 4.9,
      barDir: "col", barGrouping: "clustered",
      chartColors: ["9AAAB8", MINT],
      showTitle: true, title: "Baseline vs Year-1 target (%)", titleFontSize: 12, titleColor: INK, titleFontFace: BODY,
      showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.#", dataLabelColor: INK, dataLabelFontSize: 10,
      showLegend: true, legendPos: "b", legendColor: INK, legendFontSize: 10,
      catAxisLabelColor: INK, catAxisLabelFontSize: 9.5, catAxisLabelFontFace: BODY,
      valAxisLabelColor: MUTED, valAxisLabelFontSize: 9, valAxisMaxVal: 100, valAxisMinVal: 0,
      valGridLine: { color: LINE, size: 1 }, catGridLine: { style: "none" },
      chartArea: { fill: { color: WHITE } },
    }
  );

  statCard(s, 8.0, 1.7, 4.7, 1.5, "< 7 days", "Appeal cycle time (from 30–45 days)", null, TEAL);
  statCard(s, 8.0, 3.35, 4.7, 1.5, "40–60%", "Lower cost to rework each denial", null, TEAL);
  s.addShape(pres.ShapeType.roundRect, { x: 8.0, y: 5.0, w: 4.7, h: 1.65, rectRadius: 0.08, fill: { color: MINT } });
  s.addText(
    [
      { text: "$8–15M", options: { bold: true, fontSize: 22, color: NAVY, breakLine: true } },
      { text: "recurring net revenue uplift", options: { fontSize: 11, color: NAVY, breakLine: true } },
      { text: "+ $5–10M one-time cash  ·  payback < 9 months", options: { fontSize: 9.5, color: NAVY } },
    ],
    { isTextBox: true, x: 8.24, y: 5.0, w: 4.3, h: 1.65, fontFace: BODY, align: "left", valign: "middle", margin: 0 }
  );
  s.addNotes("These are Year-1 targets against our own Phase-1 baseline. The chart holds the three percentage metrics; cycle time and cost sit alongside because they are on different scales.");
})();

// ============================================================
// SLIDE 9 — DELIVERY ROADMAP (timeline)
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Delivery roadmap");
  s.addText("Six gated phases over roughly 18 months — compliance and security run in parallel from Month 1.", {
    isTextBox: true, x: 0.95, y: 1.18, w: 11.6, h: 0.35, fontFace: BODY, fontSize: 12, color: MUTED, align: "left", margin: 0,
  });

  const nodes = [
    ["Align & Size", "Months 0–2"],
    ["Compliance & Security", "Months 1–3"],
    ["Design & Build MVP", "Months 3–6"],
    ["Shadow & Controlled Pilot", "Months 6–9"],
    ["Close Prevention Loop", "Months 8–11"],
    ["Scale & Operate", "Months 10–18+"],
  ];
  const x0 = 1.7, x1 = 11.7, step = (x1 - x0) / 5;
  s.addShape(pres.ShapeType.line, { x: x0, y: 2.95, w: x1 - x0, h: 0, line: { color: TEAL, width: 2 } });
  nodes.forEach(([name, months], i) => {
    const cx = x0 + i * step;
    s.addText(name, { isTextBox: true, x: cx - 1.05, y: 1.95, w: 2.1, h: 0.85, fontFace: BODY, fontSize: 10.5, bold: true, color: INK, align: "center", valign: "bottom", margin: 0, lineSpacingMultiple: 1.05 });
    s.addShape(pres.ShapeType.ellipse, { x: cx - 0.19, y: 2.76, w: 0.38, h: 0.38, fill: { color: TEAL }, line: { color: WHITE, width: 2 } });
    s.addText(String(i + 1), { isTextBox: true, x: cx - 0.19, y: 2.74, w: 0.38, h: 0.38, fontFace: HEAD, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0 });
    s.addText(months, { isTextBox: true, x: cx - 1.05, y: 3.2, w: 2.1, h: 0.35, fontFace: BODY, fontSize: 9.5, color: MUTED, align: "center", margin: 0 });
  });

  const cards = [
    ["Funded on evidence", "Every phase ends in an exit gate with a go / no-go and release of the next phase's budget."],
    ["Parallel foundations", "Privacy, security, payer-contract and AI-governance work start in Month 1, not after the build."],
    ["Autonomy is earned", "Nothing runs unsupervised until shadow mode shows agent quality at or above today's team."],
  ];
  const cw = 3.8333, gap = 0.3;
  cards.forEach(([h, b], i) => {
    const x = 0.6 + i * (cw + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 3.95, w: cw, h: 2.4, rectRadius: 0.08, fill: { color: CARD }, shadow: shadow() });
    s.addText(h, { isTextBox: true, x: x + 0.25, y: 4.2, w: cw - 0.5, h: 0.4, fontFace: HEAD, fontSize: 14, bold: true, color: TEAL, align: "left", margin: 0 });
    s.addText(b, { isTextBox: true, x: x + 0.25, y: 4.7, w: cw - 0.5, h: 1.5, fontFace: BODY, fontSize: 10.5, color: INK, align: "left", margin: 0, lineSpacingMultiple: 1.15 });
  });
  s.addNotes("The roadmap is deliberately gated. We are not asking for 18 months of funding today — only Phases 1–2. Each gate is a real decision point with evidence attached.");
})();

// ============================================================
// SLIDE 10 — STEP-BY-STEP PROCESS
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "The delivery process, step by step");

  const cells = [
    ["Align & Size · M0–2",
      "Charter and sponsor signed; steering committee stood up; 12–24 months of denial data pulled; Pareto by payer × category × dollars × preventability; every KPI baselined with Finance.",
      "Gate: signed baseline, prioritized backlog, beachhead scope, Phase 1–2 funding."],
    ["Compliance & Security Foundation · M1–3",
      "Privacy / security assessment and BAAs; legal review of payer portal terms; CMS-0057-F, No Surprises Act and state AI rules mapped; AI-governance policy approved; secure cloud environment stood up.",
      "Gate: governance policy approved by Compliance and Legal; environment security-accredited."],
    ["Design & Build MVP · M3–6",
      "Orchestrator and agent contracts designed; payer-policy knowledge base and refresh built; 835/837 ingestion and EHR evidence retrieval wired; review workbench, audit log and evaluation harness in place.",
      "Gate: MVP meets accuracy thresholds in test; security sign-off to enter shadow mode."],
    ["Shadow & Controlled Pilot · M6–9",
      "Agents run in parallel with specialists; root cause, strategy and letters blind-scored and tuned; beachhead queue then routed with every submission human-approved; aged backlog liquidated.",
      "Gate: agent quality at or above baseline; false-action rate below ceiling; approval to expand."],
    ["Close the Prevention Loop · M8–11",
      "Recurring root causes become front-end edits at scheduling, authorization, registration and coding; pre-bill denial-risk scoring added; education targeted to the teams and physicians driving denials.",
      "Gate: measurable drop in the initial denial rate for piloted categories."],
    ["Scale & Operate · M10–18+",
      "Expansion by backlog priority to more categories, payers and facilities; payer APIs adopted as available; low-risk categories promoted to higher autonomy; AgentOps, drift monitoring and quarterly governance.",
      "Gate: standardized 'add a payer / add a category' playbook, each with its own eval gate."],
  ];
  const colX = [0.6, 6.85], cw = 5.85, rowY = [1.4, 3.35, 5.3];
  cells.forEach((c, i) => {
    const x = colX[i % 2], y = rowY[Math.floor(i / 2)];
    circleNum(s, i + 1, x, y, 0.34, TEAL, WHITE);
    s.addText(c[0], { isTextBox: true, x: x + 0.48, y: y + 0.0, w: cw - 0.5, h: 0.34, fontFace: BODY, fontSize: 11, bold: true, color: INK, align: "left", margin: 0 });
    s.addText(c[1], { isTextBox: true, x: x, y: y + 0.4, w: cw, h: 0.9, fontFace: BODY, fontSize: 9, color: MUTED, align: "left", margin: 0, lineSpacingMultiple: 1.1 });
    s.addText(c[2], { isTextBox: true, x: x, y: y + 1.32, w: cw, h: 0.34, fontFace: BODY, fontSize: 9, bold: true, color: GREEN_DK, align: "left", margin: 0 });
  });
  s.addNotes("Read across: each phase has concrete activities and a hard exit gate. The gate language is what we will bring back to this committee at each checkpoint.");
})();

// ============================================================
// SLIDE 11 — TEAM & OPERATING MODEL
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Team & operating model");

  eyebrow(s, "DELIVERY POD", 0.6, 1.5);
  const pod = [
    "Executive sponsor (CFO / COO)",
    "Delivery lead + product owner",
    "AI/ML lead + 2–3 engineers",
    "Data engineering (2) + RPA engineer",
    "Embedded denials SMEs (2–3)",
    "Physician advisor / CDI",
    "Compliance & privacy officer",
    "Payer-contract counsel + change manager",
  ];
  pod.forEach((t, i) => {
    const y = 1.95 + i * 0.6;
    s.addShape(pres.ShapeType.ellipse, { x: 0.65, y: y + 0.05, w: 0.16, h: 0.16, fill: { color: TEAL } });
    s.addText(t, { isTextBox: true, x: 0.95, y: y - 0.05, w: 5.4, h: 0.4, fontFace: BODY, fontSize: 12, color: INK, align: "left", valign: "middle", margin: 0 });
  });

  eyebrow(s, "GOVERNANCE CADENCE", 7.0, 1.5);
  const cad = [
    "Daily stand-up",
    "Weekly KPI review with Finance",
    "Bi-weekly steering committee",
    "Phase-gate funding decisions",
  ];
  cad.forEach((t, i) => {
    const y = 1.95 + i * 0.6;
    s.addShape(pres.ShapeType.ellipse, { x: 7.05, y: y + 0.05, w: 0.16, h: 0.16, fill: { color: AMBER } });
    s.addText(t, { isTextBox: true, x: 7.35, y: y - 0.05, w: 5.3, h: 0.4, fontFace: BODY, fontSize: 12, color: INK, align: "left", valign: "middle", margin: 0 });
  });
  s.addShape(pres.ShapeType.roundRect, { x: 7.0, y: 4.65, w: 5.7, h: 1.9, rectRadius: 0.08, fill: { color: CARD }, shadow: shadow() });
  s.addText("Funded on evidence", { isTextBox: true, x: 7.3, y: 4.85, w: 5.1, h: 0.4, fontFace: HEAD, fontSize: 14, bold: true, color: TEAL, align: "left", margin: 0 });
  s.addText("Every phase has an exit gate and a go / no-go. Specialists move into QA, exception handling and denial-prevention analysis — not out of the organization.", {
    isTextBox: true, x: 7.3, y: 5.3, w: 5.1, h: 1.15, fontFace: BODY, fontSize: 10.5, color: INK, align: "left", margin: 0, lineSpacingMultiple: 1.15,
  });
  s.addNotes("Lean pod, SMEs embedded from day one so the agents learn our real playbook. Change management is funded because the workforce story — redeployment, not reduction — has to be handled deliberately.");
})();

// ============================================================
// SLIDE 12 — RISKS & MITIGATIONS
// ============================================================
(() => {
  const s = slideBase(false);
  title(s, "Key risks & how we contain them");

  const risks = [
    ["Wrong or indefensible appeal", "Confidence + dollar gates; shadow mode first; QA sampling; humans approve Tiers 0–1."],
    ["Payer portal terms of use", "Legal review per payer; prefer 837 / API / fax; attended RPA only where permitted."],
    ["PHI exposure / prompt injection", "HIPAA-eligible endpoints + BAA, zero retention; input sanitization; DLP on outputs."],
    ["Stale payer policy", "Defined refresh SLA; date-stamped sources; agent must cite current policy or escalate."],
    ["Regulatory scrutiny of AI in claims", "Full auditability; humans accountable for clinical judgment; CMS / state alignment."],
    ["Workforce adoption", "Position as capacity relief; retrain specialists into QA / exception / analyst roles."],
  ];
  const cw = 3.8333, ch = 2.35, gap = 0.3;
  const xs = [0.6, 0.6 + cw + gap, 0.6 + 2 * (cw + gap)];
  risks.forEach(([h, b], i) => {
    const x = xs[i % 3];
    const y = i < 3 ? 1.6 : 1.6 + ch + 0.25;
    s.addShape(pres.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: CARD }, shadow: shadow() });
    s.addShape(pres.ShapeType.ellipse, { x: x + 0.25, y: y + 0.28, w: 0.14, h: 0.14, fill: { color: AMBER } });
    s.addText(h, { isTextBox: true, x: x + 0.5, y: y + 0.18, w: cw - 0.7, h: 0.6, fontFace: BODY, fontSize: 12, bold: true, color: INK, align: "left", margin: 0, lineSpacingMultiple: 1.05 });
    s.addText(b, { isTextBox: true, x: x + 0.25, y: y + 0.9, w: cw - 0.5, h: 1.3, fontFace: BODY, fontSize: 10, color: MUTED, align: "left", margin: 0, lineSpacingMultiple: 1.15 });
  });
  s.addNotes("None of these are blockers — each has an owned mitigation baked into the design and the governance policy. The two we brief most often: payer TOS (channel choice) and workforce (redeployment).");
})();

// ============================================================
// SLIDE 13 — THE ASK (dark)
// ============================================================
(() => {
  const s = slideBase(true);
  s.addShape(pres.ShapeType.ellipse, { x: 10.2, y: -1.9, w: 6.0, h: 6.0, fill: { type: "none" }, line: { color: NAVY2, width: 6 } });
  title(s, "What we're asking the Board to approve", true);

  const asks = [
    "Endorse Autonomous Denials Management as a strategic revenue-cycle initiative.",
    "Approve the executive sponsor and the cross-functional delivery pod.",
    "Fund Phases 1–2 — discovery and foundation — under the stage-gated model.",
  ];
  asks.forEach((t, i) => {
    const y = 2.05 + i * 1.2;
    s.addShape(pres.ShapeType.ellipse, { x: 0.95, y, w: 0.7, h: 0.7, fill: { color: MINT } });
    s.addText(String(i + 1), { isTextBox: true, x: 0.95, y: y - 0.02, w: 0.7, h: 0.7, fontFace: HEAD, fontSize: 20, bold: true, color: NAVY, align: "center", valign: "middle", margin: 0 });
    s.addText(t, { isTextBox: true, x: 1.95, y: y - 0.1, w: 10.5, h: 0.9, fontFace: BODY, fontSize: 16, color: WHITE, align: "left", valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
  });

  s.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 5.95, w: 12.1, h: 0.85, rectRadius: 0.08, fill: { color: MINT } });
  s.addText("Beachhead live in ~6 months   ·   shadow-tested before any autonomy   ·   payback < 9 months", {
    isTextBox: true, x: 0.6, y: 5.95, w: 12.1, h: 0.85, fontFace: BODY, fontSize: 13, bold: true, color: NAVY, align: "center", valign: "middle", margin: 0,
  });
  s.addNotes("The ask is narrow and low-regret: fund discovery and the compliance/security foundation. Everything past Phase 2 comes back to this committee with evidence at a gate.");
})();

pres.writeFile({ fileName: "ADM_Board_Deck.pptx" }).then((f) => console.log("wrote", f));
