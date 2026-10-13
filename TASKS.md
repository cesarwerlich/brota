# TASKS.md — Live Work & Handoff

## Current Objective
Migrate AI integration to OpenRouter (`OPENROUTER_API_KEY`) across vision plant identification, conversational botany chatbot, and quick tips.

## Active Work
| Branch / Lane | Work | Status | Owner |
| --- | --- | --- | --- |
| `main` | Test plant photo identification and tomato tracker with Cesar & goddaughter | In Progress | Cesar |

## Recently Done
- [x] Botanical catalog KB, botanical favicon & navigation refinements: merged PR [#19](https://github.com/cesarwerlich/brota/pull/19) and closed Issue [#18](https://github.com/cesarwerlich/brota/issues/18).
- [x] Minimalist UI redesign, uncluttering & separate plant guide flow: merged PR [#17](https://github.com/cesarwerlich/brota/pull/17) and closed Issue [#16](https://github.com/cesarwerlich/brota/issues/16).
- [x] Verified live production deployment on Vercel (`https://brota-cesarwerlichs-projects.vercel.app/`).
- [x] Adopted coding-agent harness and workflow practices: merged PR [#15](https://github.com/cesarwerlich/brota/pull/15) and closed Issue [#14](https://github.com/cesarwerlich/brota/issues/14).
- [x] Implemented zero-dependency OpenRouter client in `api/index.ts` using native `fetch` with vision, JSON object format, and Markdown-fence extraction.
- [x] Refactored `api/index.ts` endpoints (`/identify-plant`, `/chat`, `/quick-tips`, `/health`) to OpenRouter.
- [x] Removed `@google/genai` dependency and cleaned up duplicate `vite` in `package.json`.
- [x] Verified live OpenRouter `/api/quick-tips` and `/api/chat` calls against OpenRouter API.
- [x] Updated `.env.example`, `CONTEXT.md`, `docs/operations.md`, `DECISIONS.md` (ADR-0005).
- [x] Merged PR [#11](https://github.com/cesarwerlich/brota/pull/11) and closed Issue [#10](https://github.com/cesarwerlich/brota/issues/10).
- [x] Resolved Vercel serverless function ESM invocation error: merged PR [#12](https://github.com/cesarwerlich/brota/pull/12) and closed Issue [#13](https://github.com/cesarwerlich/brota/issues/13).
- [x] Verified live production health endpoint returns HTTP 200 OK (`https://brota-cesarwerlichs-projects.vercel.app/api/health`).

## Next Actions
1. Test plant photo identification on production with Cesar & goddaughter.
2. Develop tomato growth tracker (seedling → flower → fruit ripening).
