# TASKS.md — Live Work & Handoff

## Current Objective
Evolve `dr-garden` into **Brota** and adopt multi-agent scaffold standards, maintaining working functionality and creating a separate deployment investigation issue.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `chore/migrate-to-brota-and-adopt-scaffold` | Migration: rename project, scaffold docs/scripts/CI, verify checks, open PR | In Progress | Cesar / Antigravity |

## Recently Done
- [x] Renamed GitHub repository `cesarwerlich/plant-manager` → `cesarwerlich/brota`.
- [x] Updated git remote `origin` to `https://github.com/cesarwerlich/brota.git`.
- [x] Created GitHub migration issue [#6](https://github.com/cesarwerlich/brota/issues/6).
- [x] Updated UI branding, titles, and metadata in `package.json`, `index.html`, `metadata.json`, `Navbar.tsx`, `App.tsx`, `IosSubscriptionModal.tsx`, `server.ts`.
- [x] Created `README.md`, `AGENTS.md`, `CLAUDE.md`, `ANTIGRAVITY.md`, `CONTEXT.md`.

## Next Actions
1. Add `DECISIONS.md`, `SECURITY.md`, `docs/`, `scripts/`, and `.github/` workflows/templates.
2. Verify with `./scripts/check.sh`.
3. Open PR for Issue #6 and merge.
4. Create dedicated GitHub Issue for deployment investigation: "Investigate Existing Deployment and Publish Brota".
