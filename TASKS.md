# TASKS.md — Live Work & Handoff

## Current Objective
Migrate AI integration to OpenRouter (`OPENROUTER_API_KEY`) across vision plant identification, conversational botany chatbot, and quick tips.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `feat/openrouter-migration-issue-10` | Issue #10: Migrate AI provider to OpenRouter (OPENROUTER_API_KEY) | In Progress | Cesar / Antigravity |

## Recently Done
- [x] Implemented zero-dependency OpenRouter client (`api/openrouter.ts`) using native `fetch` with vision, JSON object format, and Markdown-fence extraction.
- [x] Refactored `api/app.ts` endpoints (`/identify-plant`, `/chat`, `/quick-tips`, `/health`) to OpenRouter.
- [x] Removed `@google/genai` dependency and cleaned up duplicate `vite` in `package.json`.
- [x] Verified live OpenRouter `/api/quick-tips` and `/api/chat` calls against OpenRouter API.
- [x] Updated `.env.example`, `CONTEXT.md`, `docs/operations.md`, `DECISIONS.md` (ADR-0005).

## Next Actions
1. Open and merge PR for Issue #10.
2. Add `OPENROUTER_API_KEY` to Vercel project environment variables.
