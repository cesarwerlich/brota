# TASKS.md — Live Work & Handoff

## Current Objective
Configure Brota for serverless deployment on Vercel, ensuring zero-cost hosting, automatic HTTPS, and reliable mobile photo uploads.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `main` | Issue #8: Deploy Brota to Vercel and verify on mobile | In Progress | Cesar |

## Recently Done
- [x] Configured Vercel serverless structure: `api/app.ts`, `api/index.ts`, `vercel.json`.
- [x] Refactored `server.ts` to share `api/app.ts` while keeping local dev (`npm run dev`) and standalone Node intact.
- [x] Added client-side image downscaling (`src/utils/imageUtils.ts`) in `PlantUploader.tsx` to prevent 413 Payload Too Large on Vercel's 4.5MB limit.
- [x] Documented Vercel setup runbook in `docs/operations.md` and ADR-0004 in `DECISIONS.md`.
- [x] Verified build (`./scripts/check.sh`), merged PR [#9](https://github.com/cesarwerlich/brota/pull/9), and closed Issue [#8](https://github.com/cesarwerlich/brota/issues/8).

## Next Actions
1. Link repository `cesarwerlich/brota` on the Vercel dashboard and add `GEMINI_API_KEY`.
2. Deploy and test the live URL (`https://<project>.vercel.app/api/health`).
3. Smoke test on mobile (photo upload, plant identification, chat with Flora, Meu Jardim saving).
