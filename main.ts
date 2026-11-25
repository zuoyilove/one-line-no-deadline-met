// One Line, No Deadline Met — writes a single-line excuse for a missed deadline.
// The line is a fixed string: the joke is the entry, and the program's job is
// only to deliver it byte-for-byte to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I treated the deadline like a group project partner and assumed someone else was handling it — turns out I was the someone else.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
