# TASKS.md — Live Work & Handoff

## Current Objective
Evolve `dr-garden` into **Brota** and adopt multi-agent scaffold standards, maintaining working functionality and creating a separate deployment investigation issue.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `main` | Issue #8: Investigate Existing Deployment and Publish Brota | Next | Cesar |

## Recently Done
- [x] Renamed GitHub repository `cesarwerlich/plant-manager` → `cesarwerlich/brota`.
- [x] Updated git remote `origin` to `https://github.com/cesarwerlich/brota.git`.
- [x] Updated UI branding, titles, and metadata in `package.json`, `index.html`, `metadata.json`, `Navbar.tsx`, `App.tsx`, `IosSubscriptionModal.tsx`, `server.ts`.
- [x] Adopted scaffold documentation, agent contract, security policy, and runbooks: `AGENTS.md`, `CLAUDE.md`, `ANTIGRAVITY.md`, `CONTEXT.md`, `DECISIONS.md`, `SECURITY.md`, `README.md`, `docs/`.
- [x] Added stack-aware verification scripts `scripts/check.sh` and `scripts/bootstrap.sh`.
- [x] Added GitHub PR/issue templates and automated CI workflow `.github/workflows/ci.yml`.
- [x] Merged migration PR [#7](https://github.com/cesarwerlich/brota/pull/7) with passing CI checks.
- [x] Created separate deployment investigation issue [#8](https://github.com/cesarwerlich/brota/issues/8).

## Next Actions
1. Follow up on Issue [#8](https://github.com/cesarwerlich/brota/issues/8) to choose the hosting provider and publish Brota.
