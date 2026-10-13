#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "🌱 Running Brota project verification checks..."

RUNNER="npm"
if command -v bun >/dev/null 2>&1; then
  RUNNER="bun"
fi

echo "==> 1. Doc path verification..."
if [ -f "./scripts/check-doc-paths.sh" ]; then
  ./scripts/check-doc-paths.sh . AGENTS.md CLAUDE.md CONTEXT.md TASKS.md DECISIONS.md README.md
fi

echo "==> 2. Harness & lane unit tests..."
if command -v node >/dev/null 2>&1; then
  node --test ./scripts/*.test.mjs
fi

echo "==> 3. TypeScript typecheck ($RUNNER)..."
$RUNNER run lint

echo "==> 4. Production build ($RUNNER)..."
$RUNNER run build

echo "✅ All checks passed successfully!"
