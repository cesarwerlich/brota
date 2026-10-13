# memory.md — Durable Lessons & Project Facts

Durable facts, traps, and conventions learned during Brota's development.

---

## 1. Product & Domain Context
- **Goddaughter's Favorite**: Tomatoes! Ensure vegetable and tomato advice is prominent, accurate, and practical (e.g., pruning suckers, staking, daily sunlight requirements, watering at base).
- **Core Loop**: Physical hands-on gardening is the primary activity. The app is a companion for observation, questions, and tracking.
- **Language**: All user-facing UI and AI conversational responses must strictly be Brazilian Portuguese (`pt-BR`).

---

## 2. Technical Facts & Traps
- **Gemini SDK**: Uses `@google/genai` (v2.4.0).
  - Identification model: `gemini-3.1-pro-preview` with structured JSON schema (`responseSchema`).
  - Chat & tips models: `gemini-3.5-flash` / `gemini-3.1-flash-lite`.
  - Telemetry header: `User-Agent: aistudio-build` is configured in `GoogleGenAI` initialization in `server.ts`.
- **Express + Vite Dual Mode**:
  - Development mode (`NODE_ENV !== 'production'`): Express mounts Vite middlewares for full Hot Module Replacement (HMR).
  - Production mode: Vite builds to `dist/`, Express serves static assets from `dist/` and falls back to `dist/index.html`.
- **Bundling Backend**:
  - `npm run build` runs `vite build` followed by `esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`.
  - Production execution: `node dist/server.cjs`.
- **Client Storage Keys**:
  - `flora_garden`: JSON array of saved plants in `localStorage`.
  - `flora_chat`: JSON array of chat messages in `localStorage`.
