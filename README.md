# Autonomous Denials Management (ADM)

An Agentic AI approach to preventing, appealing, and recovering denied medical claims in US healthcare revenue cycle management (RCM).

This repository holds a concept, a board-level business case, and a working interactive prototype.

> **Status:** independent concept work and prototype. All names, payers, codes, claims, and figures are **synthetic** — no real protected health information, and no connection to any payer, clearinghouse, or EHR system. Not affiliated with or endorsed by any employer or vendor.

---

## Why this exists

Denials have quietly become a board-level number:

- ~11% of claims are denied on first pass, and the rate is rising as payers automate adjudication.
- ~85–90% of denials are considered preventable (front-end authorization, eligibility, coding, documentation).
- Roughly half of denied claims are never reworked — recoverable revenue that is simply written off.
- It costs $25–$118 to rework a single denial, during a period of margin compression and RCM labor shortage.

For a mid-sized health system this is tens of millions of dollars in margin every year.

## The concept

A **supervised fleet of AI agents** that works a denied claim end to end, with a human on every irreversible step and autonomy earned one denial category at a time.

| Step | Agent | What it does |
|---|---|---|
| 1 | Intake & Classification | Parse the 835/ERA, normalize CARC/RARC codes, route the denial |
| 2 | Root-Cause Analysis | Reconstruct why the claim was denied from the clinical and claim record |
| 3 | Payer-Policy Retrieval | Ground the case in the payer's **current** medical policy and provider manual |
| 4 | Evidence Retrieval | Assemble the minimum-necessary clinical evidence |
| 5 | Appeal Strategy | Choose the play — appeal, corrected claim, peer-to-peer — and quantify it |
| 6 | Appeal Draft | Generate the submission with every citation verified |

**Guardrails**

- A human owns every irreversible step (final submission, medical-necessity attestation, write-off).
- Autonomy is tiered and earned: Shadow → Assist → Supervised auto → Auto, promoted per denial sub-category only after measured accuracy.
- Medical-necessity judgment never leaves a credentialed clinician.
- Every action cites current payer policy and is written to an immutable audit trail.
- HIPAA-eligible models under a BAA with zero data retention; minimum-necessary PHI scoping.

## Target outcomes (illustrative model, ~$2B net patient revenue system)

| Metric | Baseline | Year-1 target |
|---|---|---|
| Initial denial rate | ~11% | 7–8% |
| Denials worked | ~60% | 95%+ |
| First-pass appeal overturn | ~65% | 75–80% |
| Appeal cycle time | 30–45 days | < 7 days |
| Cost to rework a denial | $25–118 | 40–60% lower |
| Recurring net revenue uplift | — | $8–15M |

Figures are illustrative and modeled, not guarantees. Any real deployment replaces these with a client-specific baseline signed by Finance.

---

## What's in this repository

```
autonomous-denials-management/
├── prototype/
│   └── overturn.html        # Interactive prototype — open in any browser
├── board-deck/
│   ├── ADM_Board_Deck.pptx  # 13-slide executive / board deck
│   └── build_deck.js        # Generator for the deck (Node + pptxgenjs)
└── docs/
    └── linkedin-post.md     # Announcement copy
```

### Prototype — "Overturn"

`prototype/overturn.html` is a self-contained, single-file console (no build step, no dependencies, no network calls beyond Google Fonts). **Open it directly in a browser.**

Three views:

1. **Command center** — portfolio KPIs, a denials worklist, and a live agent-activity feed.
2. **Agent workspace** — pick a denied claim and watch the six agents resolve it in sequence, each revealing a real finding with policy citations. The right panel holds the generated appeal letter, an evidence index, and an audit trail; a human-decision bar shows the autonomy tier, confidence, expected value, and modeled overturn, with Approve / Edit / Send-to-review actions.
3. **Impact** — projected recurring uplift, trend charts, and the prevention loop.

Four synthetic claims are included, chosen to show different denial types and guardrails: medical necessity (Tier 1 physician co-sign), missing authorization (Tier 3 value-hold), timely filing (Tier 3 auto-submit), and coordination of benefits (Tier 2 supervised auto).

Light and dark themes; respects `prefers-reduced-motion`.

#### Optional: publish the prototype with GitHub Pages

Settings → Pages → Deploy from branch → `main` / `/ (root)`, then browse to
`https://<your-username>.github.io/autonomous-denials-management/prototype/overturn.html`.

### Board deck

`board-deck/ADM_Board_Deck.pptx` — a 13-slide deck: problem framing, financial exposure, the agent architecture, governance and autonomy tiers, target outcomes, a gated delivery roadmap, team and operating model, risks, and the ask.

To regenerate it:

```bash
cd board-deck
npm install pptxgenjs
node build_deck.js
```

---

## Delivery approach (summary)

Stage-gated, funded on evidence — each phase ends in a go/no-go:

1. **Align & size** (M0–2) — baseline every KPI with Finance; pick a beachhead denial type + payer.
2. **Compliance & security foundation** (M1–3, parallel) — privacy/security review, payer-portal terms, AI-governance policy.
3. **Design & build MVP** (M3–6) — agent contracts, payer-policy knowledge base, evidence retrieval, evaluation harness.
4. **Shadow & controlled pilot** (M6–9) — run agents beside specialists; no autonomy until quality meets or beats the team.
5. **Close the prevention loop** (M8–11) — turn recurring root causes into front-end edits and alerts.
6. **Scale & operate** (M10–18+) — expand by backlog priority; adopt payer APIs; AgentOps and quarterly model governance.

---

## Disclaimer

This is conceptual and educational work. It is not medical, legal, or financial advice, not a product, and not connected to production systems. All data is synthetic. Autonomy tiers, confidence scores, and overturn rates are illustrative.

## Author

**Vinoth Nagarajan** — concept, board case, and prototype.
