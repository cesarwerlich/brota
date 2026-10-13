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
