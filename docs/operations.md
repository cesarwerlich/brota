# operations.md — Runbook & Operations Guide

## 1. Local Operations

### Bootstrap
```bash
./scripts/bootstrap.sh
```

### Verification Checks
```bash
./scripts/check.sh
```
Runs:
1. `npm run lint` (`tsc --noEmit`)
2. `npm run build` (`vite build && esbuild server.ts ...`)

### Local Development
```bash
npm run dev
```
Serves on `http://localhost:3000` (or `PORT` specified in `.env`).

---

## 2. Production Build & Execution

### Building
```bash
npm run build
```
Creates:
- `dist/index.html` + `dist/assets/*` (Vite client SPA)
- `dist/server.cjs` + `dist/server.cjs.map` (Express Node.js server)

### Running Production Server
```bash
NODE_ENV=production npm run start
```
Starts Express on `0.0.0.0:$PORT` serving the bundled frontend and API endpoints.

---

## 3. Environment Variables

| Variable | Required | Description | Default |
| --- | --- | --- | --- |
| `GEMINI_API_KEY` | **Yes** | Google Gemini API key for plant identification and botany chat | None |
| `PORT` | No | HTTP listening port | `3000` |
| `NODE_ENV` | No | `production` enables static file serving; otherwise Vite middleware | `development` |
| `APP_URL` | No | Public URL of the application | `http://localhost:3000` |

---

## 4. Health Check

The server exposes a health endpoint:
```
GET /api/health
```
Response:
```json
{
  "status": "ok",
  "apiKeyConfigured": true
}
```
Use this endpoint for container/platform liveness and readiness probes.
