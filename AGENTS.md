# AGENTS.md

Instructions for AI coding agents working in **Brota**. This is the canonical contract. Tool-specific files (`CLAUDE.md`, `ANTIGRAVITY.md`) are thin pointers back here.

---

## 1. Product Context & Purpose

- **Project**: **Brota** (previously *dr-garden*).
- **Owner**: Cesar (@cesarwerlich).
- **Nature**: Personal, family, educational AI project built by Cesar with his goddaughter.
- **Core Goal**: Learn and practice real-world gardening together, using AI to understand plants, diagnose leaf issues, guide care routines, and track growth.
- **Initial Plants of Interest**:
  - Flowers and ornamental plants.
  - Herbs and aromatic/edible plants.
  - Vegetables, **especially tomatoes** (which she loves).
  - Practical understanding of planting, watering, sunlight, soil, growth, and harvesting.
- **Fundamental Principle**: **AI supports real-world gardening and learning. It must not replace the hands-on experience.**
- **Scope & Complexity**: This is a personal, family project — NOT a commercial SaaS. Keep implementation lightweight, pragmatic, and maintainable. Do not invent heavy roadmap features or unnecessary orchestration.

---

## 2. Start Every Session

Read these three files first:
1. `CONTEXT.md` — Project context, current architecture, and constraints.
2. `TASKS.md` — Active objectives, session state, and next actions.
3. `DECISIONS.md` — Architectural and product decisions in force.

Inspect relevant source files before proposing or editing code. Choose the smallest useful change, preserve working functionality, and never revert unrelated changes.

---

## 3. Child & Family Safety Rules

Because this project is actively used with Cesar's goddaughter:
- **Never collect or store unnecessary personal information** (no real names of children, addresses, school info).
- **Never expose private family photos, identities, or conversations** in public assets, logs, or commit histories.
- **Age-appropriate tone**: AI responses and bot prompt engineering must be encouraging, didactic, positive, and safe for young learners.
- **Data privacy**: Keep user garden data local (e.g. `localStorage`) or private; do not introduce public user feeds or unsolicited telemetry.

---

## 4. Development Workflow

Follow standard Git & GitHub flow:
1. **Issue first**: Check existing issues before creating duplicates.
2. **Branch**: Create a focused branch (`chore/...`, `feat/...`, `fix/...`).
3. **Small diffs**: Prefer small, reviewable changes over sweeping refactors.
4. **Verification**: Always run `./scripts/check.sh` before finalizing changes.
5. **PR**: Open a pull request referencing the Issue with a clear summary.

---

## 5. Security & Credentials

- Never commit `.env`, API keys, private tokens, or secrets.
- `GEMINI_API_KEY` must always be read from environment variables (`process.env.GEMINI_API_KEY`).
- Treat external inputs and photo uploads as untrusted data. Validate base64 strings and file sizes.

---

## 6. Verification

Run the project check command before finishing any session or pull request:

```bash
./scripts/check.sh
```

This validates TypeScript compilation (`tsc --noEmit`) and Vite/esbuild production bundling.

---

## 7. Knowledge Map

- Architecture & constraints → `CONTEXT.md`
- Current work & handoff → `TASKS.md`
- Accepted decisions → `DECISIONS.md`
- Testing & verification → `docs/testing.md`
- Operations & deployment → `docs/operations.md`
- Durable lessons & traps → `docs/memory.md`
- Priorities & open questions → `docs/roadmap.md`
