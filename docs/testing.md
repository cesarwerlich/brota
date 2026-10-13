# testing.md — Verification & Testing Strategy

## 1. Principles
- **Fast feedback**: Checks must complete in seconds.
- **Pre-commit / Pre-PR standard**: Code must pass `./scripts/check.sh` before merging to `main`.
- **Zero broken builds**: Both TypeScript typechecking and the client/server production build must succeed without errors or warnings.

---

## 2. Automated Checks

Run the automated verification suite:
```bash
./scripts/check.sh
```

Comprises:
1. **TypeScript Typecheck**:
   ```bash
   npm run lint # runs `tsc --noEmit`
   ```
   Validates type correctness across React components, Express route handlers, and OpenRouter payloads.

2. **Production Bundle Verification**:
   ```bash
   npm run build
   ```
   Tests that both the Vite client bundle and the esbuild Node.js server bundle compile cleanly.

---

## 3. Manual Smoke Testing Checklist

When making significant UI or API changes, verify:
- [ ] **Home / Identify Tab**: Can upload or take a plant photo and receive structured botanical result.
- [ ] **Chat Tab**: Can converse with "Flora", asking gardening questions and receiving Markdown formatted responses.
- [ ] **Meu Jardim Tab**: Can save plants to local garden, update watering date (💧), and remove plants.
- [ ] **Mobile Responsiveness**: Bottom navigation bar functions smoothly on small viewports.
- [ ] **Health Endpoint**: `curl http://localhost:3000/api/health` returns `{"status":"ok", "apiKeyConfigured": true}`.
