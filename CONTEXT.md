# CONTEXT.md — Brota Architecture & Context

## Project Identity
- **Name**: **Brota** (evolved from *dr-garden* / *plant-manager*)
- **Owner**: Cesar (@cesarwerlich)
- **Repository**: [cesarwerlich/brota](https://github.com/cesarwerlich/brota)
- **Nature**: Personal, family, educational AI project.

## Purpose & Pedagogical Principles
Brota is built by Cesar and his goddaughter to learn and practice gardening together.
- **Hands-on first**: Real world interaction with soil, seeds, watering, and sun is primary. AI is an observational companion.
- **Plant focuses**:
  - Flowers and ornamental species (understanding blooming, moisture, foliage).
  - Aromatic herbs (basil, rosemary, mint — sensory learning).
  - Vegetables, **especially tomatoes** (her favorite plant to grow and harvest).
- **Core loop**: Observe → Photo / Question → AI Botanical Insight → Real-world Care Action → Growth Observation.

## Tech Stack
- **Runtime**: Node.js (ES Modules, TypeScript).
- **Frontend**:
  - React 19 (`react`, `react-dom`)
  - Vite 6 (`@vitejs/plugin-react`)
  - Tailwind CSS v4 (`@tailwindcss/vite`)
  - Lucide React (botanical and UI iconography)
  - Framer Motion (light animations)
  - React Markdown (rendering botanical guide and chatbot outputs)
- **Backend**:
  - Express 4 (`server.ts`), integrated with Vite dev middleware in development and static file serving in production.
  - Bundled for production using `esbuild` to `dist/server.cjs`.
- **AI Services**:
  - OpenRouter API (`OPENROUTER_API_KEY`) via standard HTTPS completions endpoint.
  - Multi-modal vision model (e.g. `google/gemini-2.5-flash`) for leaf and plant identification, taxonomy, and pathology assessment.
  - Conversational chatbot ("Flora") and instant practical cultivation tips powered by OpenRouter models.
- **Client Storage**:
  - `localStorage` keys: `flora_garden` (saved plants), `flora_chat` (chat message history).

## Constraints
- **Zero unnecessary cost**: Keep dependencies lightweight and serverless/managed-friendly.
- **No heavy external database**: Use client-side storage or flat file persistence until multi-device sync is genuinely requested.
- **Child/family safety**: No collection or leaking of personal or identifiable information.
- **Reliable build**: Must always pass `npm run lint` and `npm run build`.
