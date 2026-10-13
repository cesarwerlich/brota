# Project Portfolio Brief: Brota (Plant Care & AI Companion)

> **Document Type**: Project Portfolio Handoff & Executive Brief  
> **Source Repo**: `cesarwerlich/brota` (evolved from `plant-manager` / `dr-garden`)  
> **Author / Role**: Cesar Werlich — Architect, Specifier, Governor & Reviewer  
> **Audit Date**: October 2026  
> **Status**: Live / Staged on Vercel ($0 infra) | CI Passing | Multi-Agent Governed

---

## 1. Executive Summary

**Brota** ("Sprout / Grow" in Portuguese) is an AI-assisted plant care, disease diagnosis, and botanical learning companion built by Cesar with his goddaughter.

Unlike generic SaaS experiments, Brota has a strict product principle: **AI supports real-world gardening and sensory learning; it must never replace hands-on experience.**

For founders, recruiters, and executive teams, Brota serves as tangible evidence of **pragmatic, lean software engineering and AI-native operational leadership**:
1. Zero unnecessary infrastructure footprint ($0 hosting cost, serverless runtime).
2. Vendor-neutral AI architecture (unified OpenRouter multi-modal pipeline).
3. Production adoption of the open-source `multi-agent-scaffold` governance rules.
4. Strict compliance with child and family data privacy (zero PII, zero server-side telemetry).

---

## 2. Technical Architecture & Decisions

### 2.1 The Stack
* **Frontend**: React 19, Vite 6, Tailwind CSS v4, Lucide React, Framer Motion, React Markdown.
* **Backend & API**: Express 4 with dual-mode execution (local dev server + Vercel serverless functions in `api/index.ts`).
* **AI Engine**: OpenRouter API (`OPENROUTER_API_KEY`) using native `fetch` client in `api/index.ts`, eliminating heavy proprietary SDK dependencies (`@google/genai`).
  * **Visual Identification & Pathology**: Multimodal vision model (`google/gemini-2.5-flash`) analyzing leaf health, sunlight exposure, hydration status, and taxonomy.
  * **Conversational Botanical Companion**: "Flora" chatbot providing encouraging, didactic, age-appropriate plant advice.
* **Persistence & Privacy**: Client-side `localStorage` (`flora_garden`, `flora_chat`). Zero external database subscription or maintenance overhead.
* **Deployment**: Vercel Git-integrated deployment with client-side image downsampling to preserve serverless memory limits.

### 2.2 Key Architecture Decision Records (ADRs)
* **ADR-0001 (Brand Evolution)**: Replaced sterile medical metaphors (`dr-garden`) with warm, educational framing (`Brota`).
* **ADR-0002 (Scaffold Standards)**: Adapted `multi-agent-scaffold` protocols: `AGENTS.md`, `CONTEXT.md`, `TASKS.md`, `DECISIONS.md`, and deterministic verification via `./scripts/check.sh`.
* **ADR-0003 (Pragmatic Storage)**: Retained browser-local persistence to prevent database bloat and hosting fees until sync is truly needed.
* **ADR-0004 (Vercel Architecture)**: Configured Vite SPA + Serverless Express with 60-second execution buffers for multimodal inference.
* **ADR-0005 (OpenRouter Migration)**: Unified AI billing and eliminated vendor lock-in with a zero-dependency HTTP client.

---

## 3. Public Disclosure vs. Privacy Boundaries

When sharing this project with technical founders, venture builders, and recruiters:

| ✅ Publicly Defensible & Highlights | ⛔ Strictly Private / Redacted |
|---|---|
| Educational philosophy: hands-on real-world loop (Observe → Snap → AI Diagnosis → Care Action). | Real names, personal identities, or personal locations of family members. |
| Clean technical stack: React 19 + Tailwind v4 + Express Serverless on Vercel. | Private family photos or un-sanitized camera uploads. |
| OpenRouter multimodal integration + fallback JSON parser. | Sensitive API keys or private environment configurations. |
| Adoption of `multi-agent-scaffold` governance rules and CI verification. | Personal gardening schedule logs. |

---

## 4. How to Frame this for Head of Ops / Chief of Staff Roles

Brota is not just a consumer app; it is a live demonstration of **how a Head of Ops or Chief of Staff operates in early-stage startups**:

1. **Extreme Resource Efficiency (Lean Ops)**
   * Avoided the classic startup mistake of prematurely spinning up AWS instances, Supabase DBs, and paid microservices. 
   * Achieved 100% functionality on a $0/month serverless tier with local state, proving fiscal discipline and pragmatic scope management.

2. **AI Architecture without Vendor Lock-in (Risk Mitigation)**
   * Refactored vendor-specific Google SDKs into a unified OpenRouter standard. 
   * As an operations leader, this shows the ability to protect company operations against provider price hikes, rate limits, and outages.

3. **Standardized AI & Engineering Governance (Operational Cadence)**
   * Built and maintained through strict multi-agent contracts (`AGENTS.md`, `scripts/check.sh`, GitHub Actions CI).
   * Proves the ability to coordinate AI coding agents with high code hygiene, zero drift, and repeatable handoffs.

4. **Safety, Privacy & Compliance First**
   * Designed from day one with strict data privacy (no unsolicited telemetry, no PII stored).
   * Demonstrates the compliance mindset needed to protect a growing startup against reputational and regulatory exposure.

---

## 5. Artifact Summary Snippet (Ready for Claude Build Log)

```markdown
### Brota — AI-Assisted Botanical Companion & Family Learning Lab
- **Role**: Architect & Operator (Governance via `multi-agent-scaffold`)
- **Status**: Live on Vercel ($0 Hosting) | Staged Production
- **Stack**: React 19, Tailwind v4, Express Serverless, OpenRouter (Gemini Multimodal Vision)
- **Operational Value**: 
  - Zero-cost serverless architecture with client-side state.
  - Multi-agent development governance passing deterministic CI verification (`tsc` + Vite bundle).
  - Production multimodal vision pipeline delivering real-world diagnostic guidance without vendor lock-in.
  - Strict compliance with family and child data privacy guidelines.
```
