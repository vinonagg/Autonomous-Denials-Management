# Autonomous Denials Management — Portfolio Case Study

## Executive summary

**Autonomous Denials Management (ADM)** is an independent concept, board-level business case and interactive prototype for supervised agentic AI in US healthcare revenue cycle management.

All data, claims, payer references and financial figures in the repository are explicitly synthetic or illustrative.

## Business problem

Denied medical claims require classification, root-cause investigation, policy retrieval, evidence gathering and an appropriate appeal or correction path. ADM models how a supervised AI-agent fleet could coordinate this workflow.

## Agent workflow

| Stage | Agent responsibility |
|---|---|
| Intake & Classification | Normalize and route the denial |
| Root-Cause Analysis | Reconstruct why the claim was denied |
| Payer-Policy Retrieval | Ground decisions in current policy |
| Evidence Retrieval | Assemble minimum-necessary evidence |
| Appeal Strategy | Select a supported next action |
| Appeal Draft | Produce a citation-backed draft |

## Governance model

The design uses tiered autonomy:

**Shadow → Assist → Supervised Auto → Auto**

Autonomy is intended to be earned by denial sub-category only after measured accuracy and operational controls.

Irreversible actions remain under human ownership, including final submission, medical-necessity attestation and write-off decisions.

## Prototype

The repository contains an interactive browser prototype with command-center, agent-workspace, evidence, policy, audit and human-decision views.

## Program-management lens

1. Baseline the business problem with Finance.
2. Select a focused denial category and payer.
3. Establish privacy, security and AI-governance controls.
4. Build and evaluate the MVP.
5. Run shadow / controlled pilots.
6. Expand autonomy only when evidence supports it.
7. Close the prevention loop.
8. Scale with ongoing AgentOps and governance.

## Portfolio positioning

> **A supervised agentic-AI operating model for denial investigation and recovery, designed around evidence, governance, human accountability and staged autonomy.**
