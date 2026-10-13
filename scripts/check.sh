#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "🌱 Running Brota project verification checks..."

RUNNER="npm"
if command -v bun >/dev/null 2>&1; then
  RUNNER="bun"
fi

echo "==> 1. TypeScript typecheck ($RUNNER)..."
$RUNNER run lint

echo "==> 2. Production build ($RUNNER)..."
$RUNNER run build

echo "✅ All checks passed successfully!"
