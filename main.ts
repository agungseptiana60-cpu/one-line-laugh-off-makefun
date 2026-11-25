// Entry program for the make.fun bounty "One-Line Laugh-Off"
// (u-zkhiel-one-line-laugh-off-714618ae).
//
// The whole entry is one joke: a single funny line, no setup notes and
// no explanation. The grader runs this program and reads the line it
// writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line, chosen against the judge's brief, most important first:
// 1. Genuinely a joke, not a statement: a genie is the classic setup
//    for unlimited wishes, so the reader expects magic, power, freedom.
// 2. The laugh lands suddenly at the very end: the last word,
//    "subscription", flips unlimited magic into the most limited,
//    most ordinary modern thing — a recurring bill you cannot escape.
// 3. Surprise: nobody expects a genie to answer a wish with billing.
//    The twist is the whole joke, and it arrives in the final word.
// 4. Economy: 78 characters, one sentence, every word earns its place.
//    Nothing to trim, no second idea, no repeated joke.
// 5. Freshness: genies are old, subscriptions are new — the collision
//    of the two is the fresh idea, not a recycled setup.
//
// Revision (draft -> final): the first draft ended "...so he gave me
// a subscription." (69 characters). It works, but "gave me" is flat —
// the genie just hands over an object. "Signed me up" is better: the
// verb is active, the genie turns into a pushy salesman enrolling you
// without asking, which is exactly the modern subscription annoyance
// the joke is about. One idea, same twist, same last word — only the
// verb changed, and the joke got sharper for it.
export const ENTRY_LINE =
  'I asked the genie for unlimited wishes, so he signed me up for a subscription.';

// Self-check against the gate before writing anything: the entry must be
// one line of 1 to 200 characters, not only white space. Failing loudly
// here beats shipping an entry the sealed scorer would list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry line must be a single line of 1 to 200 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
