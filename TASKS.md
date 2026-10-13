# TASKS.md — Live Work & Handoff

## Current Objective
Migrate AI integration to OpenRouter (`OPENROUTER_API_KEY`) across vision plant identification, conversational botany chatbot, and quick tips.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `main` | Configure OPENROUTER_API_KEY in Vercel environment variables | In Progress | Cesar |

## Recently Done
- [x] Implemented zero-dependency OpenRouter client (`api/openrouter.ts`) using native `fetch` with vision, JSON object format, and Markdown-fence extraction.
- [x] Refactored `api/app.ts` endpoints (`/identify-plant`, `/chat`, `/quick-tips`, `/health`) to OpenRouter.
- [x] Removed `@google/genai` dependency and cleaned up duplicate `vite` in `package.json`.
- [x] Verified live OpenRouter `/api/quick-tips` and `/api/chat` calls against OpenRouter API.
- [x] Updated `.env.example`, `CONTEXT.md`, `docs/operations.md`, `DECISIONS.md` (ADR-0005).
- [x] Merged PR [#11](https://github.com/cesarwerlich/brota/pull/11) and closed Issue [#10](https://github.com/cesarwerlich/brota/issues/10).

## Next Actions
1. Add `OPENROUTER_API_KEY` to Vercel project environment variables (Dashboard → Settings → Environment Variables).
2. Test plant identification on production with a tomato/leaf photo.
