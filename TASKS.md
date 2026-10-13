# TASKS.md — Live Work & Handoff

## Current Objective
Configure Brota for serverless deployment on Vercel, ensuring zero-cost hosting, automatic HTTPS, and reliable mobile photo uploads.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `feat/vercel-deployment-scaffold` | Issue #8: Setup Vercel directory structure, rewrites, and client photo optimizer | In Progress | Cesar / Antigravity |

## Recently Done
- [x] Configured Vercel serverless structure: `api/app.ts`, `api/index.ts`, `vercel.json`.
- [x] Refactored `server.ts` to share `api/app.ts` while keeping local dev (`npm run dev`) and standalone Node intact.
- [x] Added client-side image downscaling (`src/utils/imageUtils.ts`) in `PlantUploader.tsx` to prevent 413 Payload Too Large on Vercel's 4.5MB limit.
- [x] Documented Vercel setup runbook in `docs/operations.md` and ADR-0004 in `DECISIONS.md`.
- [x] Ran `./scripts/check.sh` and verified both `/api/health` and `/health` route resolution.

## Next Actions
1. Commit and push `feat/vercel-deployment-scaffold` to open PR for Issue #8.
2. Link project on Vercel dashboard and add `GEMINI_API_KEY`.
3. Verify live URL and complete smoke testing on mobile.
