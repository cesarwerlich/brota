import test from "node:test";
import assert from "node:assert/strict";
import {
  parseCliArgs,
  formatLanePickupComment,
  formatLaneFinalComment,
} from "./lane-update.mjs";

test("parseCliArgs parses commands, repeatable flags, and booleans", () => {
  const parsed = parseCliArgs([
    "pickup",
    "--issue",
    "14",
    "--branch",
    "feat/scaffold-harness",
    "--worktree",
    ".worktrees/14-scaffold-harness",
    "--scope",
    "first scope",
    "--scope",
    "second scope",
    "--expected-file",
    "scripts/check.sh",
    "--post",
  ]);

  assert.equal(parsed.command, "pickup");
  assert.equal(parsed.values.issue, "14");
  assert.equal(parsed.values.branch, "feat/scaffold-harness");
  assert.equal(parsed.values.worktree, ".worktrees/14-scaffold-harness");
  assert.deepEqual(parsed.values.scope, ["first scope", "second scope"]);
  assert.deepEqual(parsed.values["expected-file"], ["scripts/check.sh"]);
  assert.equal(parsed.flags.post, true);
});

test("formatLanePickupComment formats structured markdown", () => {
  const comment = formatLanePickupComment({
    issue: "14",
    branch: "feat/scaffold-harness",
    worktree: ".worktrees/14-scaffold-harness",
    scope: ["add check-doc-paths.sh", "adopt worktree scripts"],
    expectedFiles: ["scripts/check-doc-paths.sh", "scripts/worktree-bootstrap.sh"],
    blockers: ["none"],
  });

  assert.match(comment, /Picked up issue #14 on `feat\/scaffold-harness`/);
  assert.match(comment, /Worktree: `\.worktrees\/14-scaffold-harness`/);
  assert.match(comment, /- add check-doc-paths\.sh/);
  assert.match(comment, /- `scripts\/check-doc-paths\.sh`/);
  assert.match(comment, /- none/);
});

test("formatLaneFinalComment formats structured markdown", () => {
  const comment = formatLaneFinalComment({
    branch: "feat/scaffold-harness",
    worktree: ".worktrees/14-scaffold-harness",
    changes: ["added doc paths checker", "added worktree finish gate"],
    verified: ["./scripts/check.sh passed"],
    pr: "15",
    blockers: [],
    followUps: ["monitor CI"],
  });

  assert.match(comment, /Final lane update from `feat\/scaffold-harness`/);
  assert.match(comment, /- added doc paths checker/);
  assert.match(comment, /- \.\/scripts\/check\.sh passed/);
  assert.match(comment, /- #15/);
  assert.match(comment, /- monitor CI/);
});
