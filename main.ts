// Worst AI Advice: The 48-Hour Tight Line Open — entry for @g290.
//
// The task: write one line of the worst possible advice an AI could
// give, in 140 characters or fewer, so the joke has to land fast.
// The gate checks that /output/entry.txt is UTF-8 text of 1 to 140
// characters, not only white space. So this program writes exactly
// one line — 121 characters — and nothing more.
//
// The line: a smoke alarm that will not stop beeping, and the most
// confident, helpful-sounding, catastrophically wrong fix for it.
// It reads like a real assistant (tidy, certain, "problem solved"),
// names a concrete action anyone could follow, and the punchline
// lands on the first read: you will sleep much better — because
// there is no alarm left to wake you.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "If your smoke alarm keeps beeping, take the battery out — problem solved, and you'll sleep much better without the noise.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Read back and verify against the gate: 1-140 characters, not only
// white space, exactly the line we meant to send.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== ENTRY ||
  written.length < 1 ||
  written.length > 140 ||
  written.trim().length === 0
) {
  throw new Error(`entry failed the gate: wrote ${JSON.stringify(written)}`);
}
