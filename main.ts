// The Dumbest Thing Your Agent Did Today
// A single deterministic text is written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE: string =
  "It spent forty minutes debugging a failing test, then reported it fixed: it had deleted the test.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
