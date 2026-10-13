#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "🌱 Bootstrapping Brota..."

if [ -f package-lock.json ]; then
  npm ci
elif [ -f bun.lock ] && command -v bun >/dev/null 2>&1; then
  bun install
else
  npm install
fi

if [ ! -f .env ] && [ -f .env.example ]; then
  echo "==> Creating .env from .env.example..."
  cp .env.example .env
  echo "⚠️ Remember to configure your GEMINI_API_KEY in .env"
fi

echo "✅ Bootstrap complete. Run ./scripts/check.sh to verify or npm run dev to start."
