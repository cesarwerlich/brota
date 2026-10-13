import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

test("check-doc-paths.sh detects missing backticked files and passes for existing files", () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "brota-doc-test-"));
  try {
    const validFile = path.join(tmpDir, "EXISTING.md");
    fs.writeFileSync(validFile, "# Existing", "utf8");

    const goodDoc = path.join(tmpDir, "GOOD.md");
    fs.writeFileSync(goodDoc, "Reference to `EXISTING.md`.", "utf8");

    const badDoc = path.join(tmpDir, "BAD.md");
    fs.writeFileSync(badDoc, "Reference to `GHOST_FILE.md`.", "utf8");

    const scriptPath = path.resolve("scripts/check-doc-paths.sh");

    // Good doc passes
    assert.doesNotThrow(() => {
      execFileSync(scriptPath, [tmpDir, "GOOD.md"], { encoding: "utf8" });
    });

    // Bad doc throws non-zero exit code
    assert.throws(() => {
      execFileSync(scriptPath, [tmpDir, "BAD.md"], { encoding: "utf8" });
    });
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
