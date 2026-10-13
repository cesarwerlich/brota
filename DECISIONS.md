# DECISIONS.md — Architecture & Product Decisions

Accepted decisions still in force for Brota.

---

### ADR-0001: Rename Project to Brota
- **Status**: Accepted (2026-10-13)
- **Context**: The original repository name was `plant-manager` and early concept was `Dr. Garden`. Feedback indicated the clinical/doctor metaphor felt too sterile and medical. The new direction is a warm, family-oriented gardening and learning app with Cesar and his goddaughter.
- **Decision**: Rename canonical repository to `cesarwerlich/brota` and application branding to **Brota** ("Sprout / Grow" in Portuguese).
- **Consequences**: GitHub repository URL changed to `cesarwerlich/brota`. UI, HTML headers, and metadata updated.

---

### ADR-0002: Adopt Lightweight Scaffold Practices
- **Status**: Accepted (2026-10-13)
- **Context**: To improve development discipline, consistency across AI agents, and code health, we evaluated `cesarwerlich/multi-agent-scaffold`.
- **Decision**: Adopt/adapt lightweight essentials:
  - Canonical `AGENTS.md` + thin tool adapters (`CLAUDE.md`, `ANTIGRAVITY.md`).
  - Single-source context in `CONTEXT.md`, task handoff in `TASKS.md`, decisions in `DECISIONS.md`.
  - Child and family safety policies in `SECURITY.md`.
  - Stack-aware scripts (`scripts/check.sh`, `scripts/bootstrap.sh`).
  - GitHub Actions CI workflow for lint and build verification.
  - Skip unnecessary heavy multi-agent orchestration, swarm protocols, and eval directories.
- **Consequences**: Standardized developer experience without adding runtime weight or architectural friction.

---

### ADR-0003: Retain Existing Stack & Client Storage
- **Status**: Accepted (2026-10-13)
- **Context**: Brota has a working React 19 + Express + Vite + Tailwind v4 + Gemini API foundation.
- **Decision**: Preserve working application architecture. Keep garden and chat persistence in `localStorage` for now. Avoid rewriting the backend or introducing costly databases until explicitly requested.
- **Consequences**: Preserves functional stability, zero hosting database costs, and immediate responsiveness.

---

### ADR-0004: Deploy Brota to Vercel (Vite SPA + Serverless Express)
- **Status**: Accepted (2026-10-13)
- **Context**: In Issue #8, we evaluated hosting options for Brota to allow Cesar and his goddaughter to access the app on mobile and tablets. Vercel provides a seamless Git integration, automatic HTTPS, free tier ($0/month), zero server maintenance, and native support for Vite + Node.js Serverless Functions.
- **Decision**: Adapt the codebase for Vercel:
  - Extract Express app and API handlers to `api/app.ts` with dual routing (`/api/*` and `/*`).
  - Add serverless entrypoint `api/index.ts` exporting `app`.
  - Add `vercel.json` with SPA and API rewrites and 60-second function timeout for Gemini visual analysis.
  - Retain `server.ts` for local development (`npm run dev`) and standalone Node.js execution.
  - Implement client-side image downsampling to keep mobile photo uploads well below Vercel's 4.5MB payload limit.
- **Consequences**: Zero recurring hosting cost, instant deployments on Git push, full backward compatibility for local development.

---

### ADR-0005: Migrate AI Provider to OpenRouter
- **Status**: Accepted (2026-10-13)
- **Context**: Cesar uses an OpenRouter API key (`OPENROUTER_API_KEY`) to unify AI model access across projects. Using OpenRouter allows flexible selection of vision models (`google/gemini-2.5-flash`, etc.) and chat completions via standard HTTP requests without locking into vendor-specific client SDKs like `@google/genai`.
- **Decision**: 
  - Standardize on `OPENROUTER_API_KEY` across all server endpoints (`/api/identify-plant`, `/api/chat`, `/api/quick-tips`, `/api/health`).
  - Implement a lightweight, zero-dependency OpenRouter client (`api/openrouter.ts`) using native `fetch`.
  - Remove `@google/genai` dependency to keep the production bundle smaller and faster.
  - Maintain robust JSON parsing with fallback extraction for structured botanical taxonomy responses.
- **Consequences**: Unified billing and API access on OpenRouter, zero extra npm SDK dependencies, model flexibility via environment variables.
