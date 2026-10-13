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
  - Canonical `AGENTS.md` loaded natively by Codex and Antigravity, imported deterministically via `@AGENTS.md` in `CLAUDE.md`.
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
  - Extract Express app and API handlers to `api/index.ts` with dual routing (`/api/*` and `/*`).
  - Add `vercel.json` with SPA and API rewrites and 60-second function timeout for visual analysis.
  - Retain `server.ts` for local development (`npm run dev`) and standalone Node.js execution.
  - Implement client-side image downsampling to keep mobile photo uploads well below Vercel's 4.5MB payload limit.
- **Consequences**: Zero recurring hosting cost, instant deployments on Git push, full backward compatibility for local development.

---

### ADR-0005: Migrate AI Provider to OpenRouter
- **Status**: Accepted (2026-10-13)
- **Context**: Cesar uses an OpenRouter API key (`OPENROUTER_API_KEY`) to unify AI model access across projects. Using OpenRouter allows flexible selection of vision models (`google/gemini-2.5-flash`, etc.) and chat completions via standard HTTP requests without locking into vendor-specific client SDKs like `@google/genai`.
- **Decision**: 
  - Standardize on `OPENROUTER_API_KEY` across all server endpoints (`/api/identify-plant`, `/api/chat`, `/api/quick-tips`, `/api/health`).
  - Implement a lightweight, zero-dependency OpenRouter client in `api/index.ts` using native `fetch`.
  - Remove `@google/genai` dependency to keep the production bundle smaller and faster.
  - Maintain robust JSON parsing with fallback extraction for structured botanical taxonomy responses.
- **Consequences**: Unified billing and API access on OpenRouter, zero extra npm SDK dependencies, model flexibility via environment variables.

---

### ADR-0006: Hardened Coding-Agent Harness & Workflow Practices
- **Status**: Accepted (2026-10-13)
- **Context**: In Issue #14, we audited `cesarwerlich/multi-agent-scaffold` (PR #9, PR #17, PR #18, Issue #10) to identify high-confidence engineering and coding-agent harness practices that improve reliability, agent autonomy, and safety without adding unnecessary framework overhead.
- **Decision**: 
  - Standardize deterministic agent instruction loading: import `@AGENTS.md` at line 1 of `CLAUDE.md`; remove redundant `ANTIGRAVITY.md` since Antigravity and Codex load `AGENTS.md` natively from the repo root.
  - Implement doc path validation via `scripts/check-doc-paths.sh` and integrate it into `./scripts/check.sh` to eliminate broken references and agent hallucinations.
  - Adopt hardened Git worktree lifecycle scripts (`scripts/worktree-bootstrap.sh`, `scripts/worktree-finish.sh`, `scripts/worktree-cleanup.sh`) to enable isolated multi-agent lanes without clobbering untracked files or propagating `.env` secrets.
  - Adopt `scripts/lane-update.mjs` with unit tests for structured GitHub Issue progress comments (`pickup` / `final`).
  - Strengthen verification and PR gates to enforce independent review ("do not merge your own PR").
- **Consequences**: Deterministic instruction loading across Claude, Codex, and Antigravity, zero credential leakage across worktrees, guaranteed doc path integrity, and safer multi-session agent coordination.
