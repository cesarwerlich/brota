#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "🌱 Running Brota project verification checks..."

echo "==> 1. TypeScript typecheck..."
npm run lint

echo "==> 2. Production build (Vite + esbuild)..."
npm run build

echo "✅ All checks passed successfully!"
